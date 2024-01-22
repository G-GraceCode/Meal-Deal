import { authOption } from "@/app/api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import User from "@/models/User";
import { getServerSession } from "next-auth";

export async function PUT(req) {
  mongoose.connect(process.env.DB_URI);

  const data = await req.json();

  const session = await getServerSession(authOption);
  const email = session.user?.email;

  await User.updateOne({ email }, data);

  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.DB_URI);
  const session = await getServerSession(authOption);
}
