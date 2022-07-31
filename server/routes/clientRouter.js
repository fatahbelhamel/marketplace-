import express from "express";
import { refreshTokenClient } from "../controllers/refreshToken.js";
import { getclients, login,logout,register }  from "../controllers/clientController.js";
import { verifyclientToken } from "../middlweare/verifyToken.js";
import { isRequestValidated, validateRegister, validateLogin } from "../validation/validator.js";
const router = express.Router();

router.route('/client/clients').get(verifyclientToken,getclients);
router.route('/client/login').post(validateLogin, login);
router.route('/client/register').post(validateRegister, isRequestValidated, register);
router.route('/client/logout').post(verifyclientToken, logout);
router.route('/client/token').get(refreshTokenClient);


export default router;