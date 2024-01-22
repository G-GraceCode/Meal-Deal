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
    console.log("file", getFile);
    const ext = getFile.name.split(".").slice(-1)[0];
    const fileName = uniqid() + "." + ext;
    // fs.renameSync(data.name, fileName);

    // const result = await cloudinary.v2.uploader.upload(fileName, {
    //   resource_type: "auto",
    //   use_filename: true,
    // });
    // console.log("res", result);

    const cloudImage = cloudinary.url(fileName);
    console.log("clod", cloudImage);

    const tranImage = cloudinary.image(fileName, {
      type: getFile.type,
      transformation: [
        { gravity: "face", height: 300, width: 300, crop: "fill" },
        { radius: "max" },
        { fetch_format: "auto" },
      ],
    });
    console.log("clod", tranImage);

    const uploadedImage = await cloudinary.uploader.upload(fileName, {
      public_id: fileName.split(".")[0],
      resource_type: "auto",
      use_filename: true,
    });

    console.log("img", uploadedImage);
  }

  return Response.json(true);
}
