// POST { name, rating, text, images: ["data:image/jpeg;base64,...", ...] }
//   →  { ok: true, review: { id, name, rating, text, images, createdAt } }
//   or { ok: false, reason: "bad-request" }
//
// Stores one visitor-submitted review in Netlify Blobs. Images arrive
// already resized/compressed to JPEG data URLs by the browser (see
// resizeImageFile() in script.js) — this function just enforces sane
// server-side limits (count + size) so nobody can post something huge,
// then stores the review as-is. get-reviews.mjs is what lists them back
// out for every visitor.
import { getStore } from "@netlify/blobs";

const MAX_NAME_LEN = 60;
const MAX_TEXT_LEN = 1000;
const MAX_IMAGES = 3;
const MAX_IMAGE_LEN = 900_000; // ~650KB of actual image data per data URL, generous headroom over the browser's resized output

export default async (req) => {
  if (req.method !== "POST") return json({ ok: false, reason: "method-not-allowed" }, 405);

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, reason: "bad-request" }, 400);
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, MAX_NAME_LEN) : "";
  const text = typeof body.text === "string" ? body.text.trim().slice(0, MAX_TEXT_LEN) : "";
  const rating = Number(body.rating);

  if (!name || !text || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return json({ ok: false, reason: "bad-request" }, 400);
  }

  let images = Array.isArray(body.images) ? body.images : [];
  images = images
    .filter((src) => typeof src === "string" && src.startsWith("data:image/") && src.length <= MAX_IMAGE_LEN)
    .slice(0, MAX_IMAGES);

  const id = (globalThis.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const review = {
    id,
    name,
    rating,
    text,
    images,
    createdAt: new Date().toISOString(),
  };

  const store = getStore({ name: "khatt-reviews", consistency: "strong" });
  await store.setJSON(`review:${id}`, review);

  return json({ ok: true, review });
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
