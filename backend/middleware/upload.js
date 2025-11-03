import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    // Determine the resource type dynamically
    const isPdf = file.mimetype === "application/pdf";

    return {
      folder: "janmarine_pages",
      resource_type: isPdf ? "raw" : "image", // 🔥 this is the key fix
      allowed_formats: ["jpg", "jpeg", "png", "webp", "pdf"],
      public_id: `${file.originalname.split(".")[0]}-${Date.now()}`,
    };
  },
});

const upload = multer({ storage });
export default upload;
