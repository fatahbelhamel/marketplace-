import express from "express";
import { createCategory, getCategory } from "../controllers/categoryController.js";
import { verifyAdminToken } from "../middlweare/verifyToken.js";
import multer from "multer";
import path from "path";


const multerConfig = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname);
    }
  });

const isImage = (req,file,cb)=>{
  if(file.mimetype.startsWith('image')){
    cb(null, true);
  }else{
    cb(new Error("Only image is allowed...."));
  }
}

const upload = multer({
  storage: multerConfig,
  fileFilter: isImage
});
const router = express.Router();

router.route("/category/create").post(verifyAdminToken, upload.single('image'), createCategory);
router.route("/category").get(getCategory);

export default router;