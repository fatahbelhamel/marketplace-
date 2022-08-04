import express from "express";
import { addToCart, getProductCart } from "../controllers/cartController.js";
import { verifyClientToken } from "../middlweare/verifyToken.js";

const router = express.Router();

router.route("/cart/add_product/:id").post(verifyClientToken, addToCart);
router.route("/cart/get_products").get(verifyClientToken, getProductCart);

export default router;