// POST { ids: ["r1", "t4"] }  →  { ok: true, sold: ["r1", "t4"] }
//
// Called ONCE, right when a checkout actually completes. This is the only
// place a one-of-a-kind item's claim becomes permanent ("sold") instead
// of a temporary, expiring "reserved" hold — matching the rule that an
// item only truly goes out of stock when an order for it is completed.
import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") {
    return json({ ok: false }, 405);
  }

  let ids;
  try {
    const body = await req.json();
    ids = Array.isArray(body && body.ids) ? body.ids : [];
  } catch {
    return json({ ok: false }, 400);
  }

  ids = ids.filter((id) => typeof id === "string" && id.length > 0 && id.length <= 100).slice(0, 100);
  if (!ids.length) return json({ ok: true, sold: [] });

  const store = getStore({ name: "khatt-claims", consistency: "strong" });
  const now = Date.now();

  await Promise.all(
    ids.map((id) =>
      store.set(`claim:${id}`, JSON.stringify({ status: "sold", soldAt: now }))
    )
  );

  return json({ ok: true, sold: ids });
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
