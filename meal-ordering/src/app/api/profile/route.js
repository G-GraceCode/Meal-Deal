import { authOption } from "@/app/api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import { User } from "@/models/User";

export async function PUT() {
  mongoose.connect(process.env.DB_URI);

  const body = await req.json();

  const session = await getServerSession(authOption);
  const email = session.user?.email;

  if ("name" in body) {
    // update user name
    await User.updateOne({ email }, { name: body.name });
  }
  return Response.json(true);
}
