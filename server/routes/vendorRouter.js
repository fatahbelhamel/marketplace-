import express from "express";
import { refreshTokenVendor } from "../controllers/refreshToken.js";
import { createProduct, getProductById, getProducts, getProductsByOrder, getProductByCategory,getProductByVendor, getProductByMarque, getProductMarque, updateProduct, deleteProduct, productCountByVendor, searchProduct } from "../controllers/productController.js";
import { getvendorById, login, register, logout } from "../controllers/vendorController.js";
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
router.route('/vendor/getVendor').get(verifyVendorToken, getvendorById);
router.route("/vendor/login").post(login);
router.route("/vendor/register").post(upload.single('Img_vend'),register);
router.route('/vendor/logout').post(verifyVendorToken, logout);
router.route('/vendor/token').get(refreshTokenVendor);


// product routes
router.route("/vendor/create-product").post(verifyVendorToken, upload.single('Img_prod'), createProduct);
router.route("/product/:id").get(getProductById);
router.route("/vendor/products").get(getProductByVendor);

router.route("/vendor/product/:id").put(verifyVendorToken, updateProduct);
router.route("/vendor/product/:id").post(verifyVendorToken, deleteProduct);
router.route("/vendor/productCount/vendor/:id").get(productCountByVendor);
router.route("/product/marque/:marque").get(getProductByMarque);
router.route("/products").get(getProducts);
router.route("/productsByOrder").get(getProductsByOrder);
router.route("/products/:categorie").get(getProductByCategory);
router.route("/products/:categorie/marque").get(getProductMarque);
router.route("/products/:key").get(searchProduct);



export default router;