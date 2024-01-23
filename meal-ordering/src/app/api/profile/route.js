import { authOption } from "@/app/api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import User from "@/models/User";
import UserDetails from "@/models/UserDetails";
import { getServerSession } from "next-auth";

export async function PUT(req) {
  mongoose.connect(process.env.DB_URI);

  const data = await req.json();
  const { name, email, ...otherDetails } = data;

  const session = await getServerSession(authOption);
  const Email = session.user?.email;

  await User.updateOne({ Email }, { name, email });

  await UserDetails.updateOne({ Email }, otherDetails);

  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.DB_URI);
  const session = await getServerSession(authOption);
  const email = session?.user?.email;

  if (!email) {
    return res.status(401).json({});
  }
  const user = await User.findOne({ email }).lean(); // use the lean method to get the user detail once
  const userDetail = await UserDetails.findOne({ email }).lean();
  return Response.json({ ...user, ...userDetail });
}
