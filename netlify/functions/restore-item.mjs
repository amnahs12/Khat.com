// POST { id: "t4", secret: "..." }  →  { ok: true }  or  { ok: false, reason: "..." }
//
// Admin-only. Deletes a claim record entirely, putting a one-of-a-kind item
// back to "available" exactly as if it had never been reserved or sold.
// Used from admin.html when a sale falls through (order cancelled, buyer
// never paid, etc). Requires the ADMIN_SECRET env var to be set in Netlify
// (Site configuration → Environment variables) and match what's typed into
// the admin page.
import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") return json({ ok: false, reason: "method-not-allowed" }, 405);

  let id, secret;
  try {
    const body = await req.json();
    id = body && body.id;
    secret = body && body.secret;
  } catch {
    return json({ ok: false, reason: "bad-request" }, 400);
  }

  const adminSecret = process.env.ADMIN_SECRET;
  if (!adminSecret) {
    // Fails closed: if it's not configured, nobody can restore anything
    // rather than the check silently passing.
    return json({ ok: false, reason: "not-configured" }, 500);
  }
  if (!secret || secret !== adminSecret) {
    return json({ ok: false, reason: "unauthorized" }, 401);
  }

  if (!id || typeof id !== "string" || id.length > 100) {
    return json({ ok: false, reason: "bad-request" }, 400);
  }

  const store = getStore({ name: "khatt-claims", consistency: "strong" });
  await store.delete(`claim:${id}`);

  return json({ ok: true });
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
