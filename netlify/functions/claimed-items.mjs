// GET  →  { claimed: [ { id: "r1", status: "sold" }, { id: "t4", status: "reserved" }, ... ] }
//
// The site polls this every ~20s so everyone's availability view for
// one-of-a-kind items stays roughly in sync. Expired reservations are
// simply left out of the list here (so they instantly read as available
// again) — netlify/functions/cleanup-expired-claims.mjs is what actually
// deletes them from storage on a schedule.
import { getStore } from "@netlify/blobs";

export default async () => {
  const store = getStore({ name: "khatt-claims", consistency: "strong" });
  const { blobs } = await store.list({ prefix: "claim:" });
  const now = Date.now();

  const claimed = (
    await Promise.all(
      blobs.map(async (b) => {
        const id = b.key.slice("claim:".length);
        const record = await store.get(b.key, { type: "json" }).catch(() => null);
        if (!record) return null;
        if (record.status === "sold") return { id, status: "sold" };
        if (record.status === "reserved" && typeof record.expiresAt === "number" && record.expiresAt > now) {
          return { id, status: "reserved" };
        }
        return null;
      })
    )
  ).filter(Boolean);

  return new Response(JSON.stringify({ claimed }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
};
