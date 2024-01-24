import { Category } from "@/models/Category";

export default async function POST(req) {
  const { name } = await res.json();
  const categoryDoc = await Category.create({ name });
  return Response.json(categoryDoc);
}

export async function GET() {
  return Response.json(await Category.find());
}
