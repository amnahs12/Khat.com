// Scheduled function — Netlify runs this automatically on the cron
// schedule in "config" below, no manual trigger needed.
//
// Deletes any one-of-a-kind item's "reserved" hold that expired without
// the visitor completing checkout, freeing it back up for other people
// without anyone having to do it by hand. Never touches "sold" claims —
// those are permanent.
import { getStore } from "@netlify/blobs";

export default async () => {
  const store = getStore({ name: "khatt-claims", consistency: "strong" });
  const { blobs } = await store.list({ prefix: "claim:" });
  const now = Date.now();
  let removed = 0;

  await Promise.all(
    blobs.map(async (b) => {
      const record = await store.get(b.key, { type: "json" }).catch(() => null);
      if (
        record &&
        record.status === "reserved" &&
        typeof record.expiresAt === "number" &&
        record.expiresAt < now
      ) {
        await store.delete(b.key);
        removed++;
      }
    })
  );

  console.log(`cleanup-expired-claims: removed ${removed} expired reservation(s)`);

  return new Response(JSON.stringify({ ok: true, removed }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

// Runs every 15 minutes. Adjust the cron expression to taste — see
// https://crontab.guru for the syntax. (Note: this only fires on your
// live, published site — it does not run during local "netlify dev".)
export const config = {
  schedule: "*/15 * * * *",
};
