import { db } from "@/lib/db";

export async function GET() {
  const allUsers = await db.user.findMany();

  return new Response(JSON.stringify(allUsers));
}

export async function POST(params) {
  await db.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  });

  const allUsers = await db.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
}
