// POST { id: "r1" }  →  { ok: true }
//
// Called when someone removes a one-of-a-kind item from their cart before
// checking out, so its temporary "reserved" hold is freed for other
// visitors right away. Refuses to touch an item that's already "sold" —
// that state is permanent.
import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") return json({ ok: false }, 405);

  let id;
  try {
    const body = await req.json();
    id = body && body.id;
  } catch {
    return json({ ok: false }, 400);
  }
  if (!id || typeof id !== "string" || id.length > 100) {
    return json({ ok: false }, 400);
  }

  const store = getStore({ name: "khatt-claims", consistency: "strong" });
  const key = `claim:${id}`;

  const existing = await store.get(key, { type: "json" }).catch(() => null);
  if (existing && existing.status === "sold") {
    return json({ ok: false, reason: "already-sold" });
  }

  await store.delete(key);
  return json({ ok: true });
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
