import { db } from "@/lib/db";

export async function GET() {
  const allUsers = await db.user.findMany();

  return new Response(JSON.stringify(allUsers));
}
