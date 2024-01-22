import uniqid from "uniqid";
import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export async function POST(req) {
  const data = await req.formData();

  if (data.get("file")) {
    const getFile = data.get("file");
    const ext = getFile.name.split(".").slice(-1)[0];
    const fileName = uniqid() + "." + ext;
    // fs.renameSync(data.name, fileName);

    // const result = await cloudinary.v2.uploader.upload(fileName, {
    //   resource_type: "auto",
    //   use_filename: true,
    // });
    // console.log("res", result);

    // const cloudImage = await cloudinary.url(fileName, {
    //   width: 500,
    //   height: 500,
    //   crop: "pad",
    // });

    const uploadedImage = await cloudinary.uploader.upload(fileName, {
      resource_type: "auto",
      public_id: "foodOrder-avater",
      use_filename: true,
    });

    console.log("img", uploadedImage);
  }

  return Response.json(true);
}
