import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

import { userPostSchema } from "@/lib/validation/user";

export async function GET() {
  const allUsers = await db.user.findMany();

  try {
    return new Response(JSON.stringify(allUsers));
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = userPostSchema.parse(json);

    await delay(1000);

    await db.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });

    return new Response("successfully create user");
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError)
      if (e.code === "P2002")
        return new Response(
          "There is a unique constraint violation, a new user cannot be created with this username",
          { status: 409 }
        );
    return new Response("Something went wrong", { status: 501 });
  }
}
