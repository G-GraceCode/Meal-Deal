import { authOption } from "@/app/api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import User from "@/models/User";
import { UserDetail } from "@/models/UserDetails";
import { getServerSession } from "next-auth";

export async function PUT(req) {
  mongoose.connect(process.env.DB_URI);

  const data = await req.json();
  const { name, image, ...otherDetails } = data;

  const session = await getServerSession(authOption);
  const email = session.user?.email;

  await User.updateOne({ email }, { name, image });

  await UserDetail.findOneAndUpdate({ email }, otherDetails, { upsert: true });

  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.DB_URI);
  const session = await getServerSession(authOption);
  const email = session?.user?.email;

  if (!email) {
    return Response.json({});
  }
  const user = await User.findOne({ email }).lean(); // use the lean method to get the user detail once
  const userDetail = await UserDetail.findOne({ email }).lean();
  return Response.json({ ...user, ...userDetail });
}
