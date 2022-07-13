import express from "express";

const router = express.Router();

router.route("/product/create").post();
router.route("/product").get();

export default router;