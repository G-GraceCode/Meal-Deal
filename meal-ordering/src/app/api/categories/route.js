import { Category } from "@/models/Category";
import mongoose from "mongoose";

export async function POST(req) {
  mongoose.connect(process.env.DB_URI);

  const { name } = await req.json();
  const categoryDoc = await Category.create({ name });
  return Response.json(categoryDoc);
}

export async function GET() {
  mongoose.connect(process.env.DB_URI);

  return Response.json(await Category.find());
}
