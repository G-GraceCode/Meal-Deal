import { authOption } from "@/app/api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import { User } from "@/models/User";

export async function PUT() {
  mongoose.connect(process.env.DB_URI);

  const body = await req.json();

  const session = await getServerSession(authOption);
  const email = session.user?.email;
  const userUploads = {};

  if ("name" in data) {
    userUploads.name = data.name;
  }

  if ("image" in data) {
    userUploads.image = data.image;
  }

  if (Object.keys(userUploads).length > 0) {
    // update user name
    await User.updateOne({ email }, userUploads);
  }
  return Response.json(true);
}
