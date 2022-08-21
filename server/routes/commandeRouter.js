import express from "express";
import { addCommande } from "../controllers/commandeController.js";
import { verifyClientToken } from "../middlweare/verifyToken.js";

const router = express.Router();

router.route('/commande').post(verifyClientToken, addCommande);




export default router;