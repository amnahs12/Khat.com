// POST { id: "r1" }  →  { ok: true }  or  { ok: false, reason: "taken" }
//
// Puts a temporary "reserved" hold on a one-of-a-kind item — NOT a
// permanent sale. The hold expires automatically after RESERVATION_MS if
// the visitor never completes checkout (see finalize-order.mjs, which is
// what actually marks something "sold", and cleanup-expired-claims.mjs,
// the scheduled job that sweeps away abandoned reservations).
//
// Uses Netlify Blobs' conditional writes (onlyIfNew / onlyIfMatch), which
// are atomic per key — so two visitors racing for the same product can't
// both win.
import { getStore } from "@netlify/blobs";

const RESERVATION_MS = 45 * 60 * 1000; // 45 minutes — long enough to check out

export default async (req) => {
  if (req.method !== "POST") return json({ ok: false, reason: "method-not-allowed" }, 405);

  let id;
  try {
    const body = await req.json();
    id = body && body.id;
  } catch {
    return json({ ok: false, reason: "bad-request" }, 400);
  }
  if (!id || typeof id !== "string" || id.length > 100) {
    return json({ ok: false, reason: "bad-request" }, 400);
  }

  const store = getStore({ name: "khatt-claims", consistency: "strong" });
  const key = `claim:${id}`;
  const now = Date.now();
  const reservation = JSON.stringify({ status: "reserved", claimedAt: now, expiresAt: now + RESERVATION_MS });

  // Fast path: nobody has ever put a hold on this item.
  const created = await store.set(key, reservation, { onlyIfNew: true });
  if (created && created.modified) {
    return json({ ok: true });
  }

  // Something's already stored under this key — inspect it before giving up.
  const existing = await store.getWithMetadata(key, { type: "json" }).catch(() => null);
  if (!existing) {
    // Rare race: existed a moment ago, gone now. One more try.
    const retry = await store.set(key, reservation, { onlyIfNew: true });
    const ok = !!(retry && retry.modified);
    return json({ ok, reason: ok ? undefined : "taken" }, ok ? 200 : 409);
  }

  const { data, etag } = existing;

  if (data && data.status === "sold") {
    return json({ ok: false, reason: "taken" }, 409);
  }
  if (data && data.status === "reserved" && typeof data.expiresAt === "number" && data.expiresAt > now) {
    return json({ ok: false, reason: "taken" }, 409);
  }

  // Whatever's there is an expired (or malformed) reservation — safe to
  // take over. onlyIfMatch keeps this atomic against anyone else doing
  // the same thing at the same instant.
  const takeover = await store.set(key, reservation, { onlyIfMatch: etag });
  const ok = !!(takeover && takeover.modified);
  return json({ ok, reason: ok ? undefined : "taken" }, ok ? 200 : 409);
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
