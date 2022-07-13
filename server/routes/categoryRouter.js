import express from "express";
import { createCategory, getCategory } from "../controllers/categoryController.js";
import { verifyAdminToken } from "../middlweare/verifyToken.js";
const router = express.Router();

router.route("/category/create").post(verifyAdminToken, createCategory);
router.route("/category").get(getCategory);

export default router;