import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const UploadImage = async (file) => {
  const response = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  console.log("img", response);
  return { imageURL: response.secure_url, ok: true };
};

export async function POST(req) {
  const file = await req.formData()
  const data = file.get("file");
  console.log("file", file);
  const res = await UploadImage(data);
  return Response(res);
}
