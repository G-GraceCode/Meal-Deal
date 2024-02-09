import User from "@/models/User";
import mongoose from "mongoose";

export async function GET() {
  mongoose.connect(process.env.DB_URI);
  const user = await User.find({});
  return Response.json(user);
}
