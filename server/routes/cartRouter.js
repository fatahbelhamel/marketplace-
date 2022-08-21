import express from "express";
import { addToCart, deleteProductInCart, getProductCart, getProductCartCounter, updateQuantités } from "../controllers/cartController.js";
import { verifyClientToken } from "../middlweare/verifyToken.js";

const router = express.Router();

router.route("/cart/add_product/:id").post(verifyClientToken, addToCart);
router.route("/cart/delete_product/:id").post(verifyClientToken, deleteProductInCart);
router.route("/cart/get_products").get(verifyClientToken, getProductCart);
router.route("/cart/get_productsCounter/:id").get(verifyClientToken, getProductCartCounter);
router.route("/cart/update/:quantités").post(verifyClientToken, updateQuantités);

export default router;