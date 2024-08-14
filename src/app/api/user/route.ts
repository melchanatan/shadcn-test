import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

import * as z from "zod";
import { userPostSchema, userPostIdSchema } from "@/lib/validation/user";
import { json } from "stream/consumers";
import { redirect } from "next/dist/server/api-utils";

export async function GET() {
  const allUsers = await db.user.findMany();

  try {
    return new Response(JSON.stringify(allUsers));
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

const delay = (delayInms: number) => {
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

export async function DELETE(req: Request) {
  try {
    const json = await req.json();
    const body = userPostIdSchema.parse(json);

    console.log(body.id);
    await db.user.delete({
      where: {
        id: body.id,
      },
    });

    return new Response(null, { status: 204 });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return new Response(JSON.stringify(e.issues), { status: 422 });
    }

    return new Response(JSON.stringify(e), { status: 500 });
  }
}
