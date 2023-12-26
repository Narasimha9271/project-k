//File handling
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const res = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfullly
    //console.log("File is upoaded on cloudinary", res.url);

    //after uploaded successfully, remove the link
    fs.unlinkSync(localFilePath);
    return res;
  } catch (err) {
    fs.unlinkSync(localFilePath); // Remove the locally saved temp file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
