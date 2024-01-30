import User from "@/models/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export async function POST(req) {
  const body = await req.json();

  mongoose.connect(process.env.DB_URI);

  const pass = body.password;
  if (!pass?.length || pass.length < 5) {
    new Error("password must be at least 5 characters");
  }

  const hashPassword = pass;
  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(hashPassword, salt);

  const createdUser = await User.create(body);

  return Response.json(createdUser);
}
