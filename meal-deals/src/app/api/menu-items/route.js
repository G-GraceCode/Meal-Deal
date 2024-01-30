import MenuItem from "@/models/MenuItems";
import mongoose from "mongoose";

export async function POST(req) {
  const data = await req.json();
  const menuItem = await MenuItem.create(data);

  return Response.json(menuItem);
}

export async function PUT(req) {
  const { _id, ...data } = await req.json();
  const menuItem = await MenuItem.findOneAndUpdate({ _id }, { data });
}

export async function GET() {
  mongoose.connect(process.env.DB_URI);
  return Response.json(await MenuItem.find());
}
