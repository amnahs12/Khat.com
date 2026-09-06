// GET  →  { reviews: [ { id, name, rating, text, images, createdAt }, ... ] }
//
// Newest first. Every visitor calls this on page load to populate the
// Reviews section, so everyone sees the same list — reviews aren't just
// local to the browser that posted them (unlike the cart).
import { getStore } from "@netlify/blobs";

export default async () => {
  const store = getStore({ name: "khatt-reviews", consistency: "strong" });
  const { blobs } = await store.list({ prefix: "review:" });

  const reviews = (
    await Promise.all(
      blobs.map((b) => store.get(b.key, { type: "json" }).catch(() => null))
    )
  )
    .filter(Boolean)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return new Response(JSON.stringify({ reviews }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
};
