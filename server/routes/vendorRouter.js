import express from "express";
import { refreshTokenVendor } from "../controllers/refreshToken.js";
import { createProduct, getProductById, getProducts, getProductByVendor, getProductByMarque, updateProduct, deleteProduct, productCountByVendor } from "../controllers/productController.js";
import { login, register, logout } from "../controllers/vendorController.js";
import { verifyVendorToken } from "../middlweare/verifyToken.js";
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


// vendor routes
router.route("/vendor/login").post(login);
router.route("/vendor/register").post(register);
router.route('/vendor/logout').post(verifyVendorToken, logout);
router.route('/vendor/token').get(refreshTokenVendor);


// product routes
router.route("/vendor/create-product").post(verifyVendorToken, upload.single('image'), createProduct);
router.route("/product/:id").get(getProductById);
router.route("/vendor/product/vendor/:id").get(getProductByVendor);
router.route("/vendor/product/marque/:marque").get(getProductByMarque);
router.route("/products").get(getProducts);
router.route("/vendor/product/:id").put(updateProduct);
router.route("/vendor/product/:id").delete(deleteProduct);
router.route("/vendor/productCount/vendor/:id").get(productCountByVendor);





export default router;