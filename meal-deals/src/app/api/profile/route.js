import { authOption } from "@/app/api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import User from "@/models/User";
import { UserDetail } from "@/models/UserDetails";
import { getServerSession } from "next-auth";

export async function PUT(req) {
  mongoose.connect(process.env.DB_URI);

  const data = await req.json();
  const { _id, name, image, ...otherDetails } = data;

  let filter = {};
  if (_id) {
    filter = { _id };
  } else {
    const session = await getServerSession(authOption);
    const email = session.user?.email;
    filter = { email };
  }
  const user = await User.findOne(filter);
  await User.updateOne(filter, { name, image });
  await UserDetail.findOneAndUpdate({ email: user.email }, otherDetails, {
    upsert: true,
  });

  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.DB_URI);

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  let filterUser = {};

  if (_id) {
    filterUser = { _id };
  } else {
    const session = await getServerSession(authOption);
    const email = session?.user?.email;

    if (!email) {
      return Response.json({});
    }
    filterUser = { _id };
  }

  const user = await User.findOne(filterUser).lean(); // use the lean method to get the user detail once
  const userDetail = await UserDetail.findOne({ email: user.email }).lean();

  return Response.json({ ...user, ...userDetail });
}
