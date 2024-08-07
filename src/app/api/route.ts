import { db } from "@/lib/db";

export async function GET() {
  const allUsers = await db.user.findMany();

  try {
    return new Response(JSON.stringify(allUsers));
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
