import express from "express";
import { login }  from "../controllers/adminController.js";
import { verifyAdminToken } from "../middlweare/verifyToken.js";
import { validateLogin } from "../validation/validator.js";
const router = express.Router();

router.route('/admin/login').post(validateLogin, login);
router.post('/profile', verifyAdminToken, (req, res) =>{
     res.status(200).json({admin: "profile admin"});
});

export default router;