import express from "express";
import { refreshTokenVendor } from "../controllers/refreshToken.js";
import { createProduct, getProductById, getProducts, getProductByVendor, getProductByMarque } from "../controllers/productController.js";
import { login, register, logout } from "../controllers/vendorController.js";
import { verifyVendorToken } from "../middlweare/verifyToken.js";

const router = express.Router();

router.route("/vendor/login").post(login);
router.route("/vendor/register").post(register);
router.route('/vendor/logout').delete(logout);
router.route('/vendor/token').get(refreshTokenVendor);
router.route("/vendor/create-product").post(verifyVendorToken, createProduct);
router.route("/vendor/product/:id").get(getProductById);
router.route("/vendor/product/vendor/:vendor").get(getProductByVendor);
router.route("/vendor/product/marque/:marque").get(getProductByMarque);
router.route("/vendor/products").get(getProducts);




export default router;