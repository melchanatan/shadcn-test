import { db } from "@/lib/db";
import { userPostSchema } from "@/lib/validation/user";

export async function GET() {
  const allUsers = await db.user.findMany();

  try {
    return new Response(JSON.stringify(allUsers));
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = userPostSchema.parse(json)
  
    await db.user.create({
      data: {
        username: body.username,
        password: body.password
      }
    });

    return new Response("successfully create user")
  } catch (error) {
    return new Response("Something went wrong", {status: 501})
  }
  
}