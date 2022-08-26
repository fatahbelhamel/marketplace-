import express from "express";
import { login, logout, getvendors, getclients, getProducts, getCategory, getCommandes, getClientCount, getVendorCount, getProductCount, getCommandeCount, validProduct, getCommandeById }  from "../controllers/adminController.js";
import { refreshTokenAdmin } from "../controllers/refreshToken.js";
import { verifyAdminToken } from "../middlweare/verifyToken.js";
import { validateLogin } from "../validation/validator.js";
const router = express.Router();

router.route('/admin/login').post(validateLogin, login);
router.route('/admin/logout').post(verifyAdminToken, logout);
router.route('/admin/token').get(refreshTokenAdmin);
router.route('/admin/getVendors').get(verifyAdminToken, getvendors);
router.route('/admin/getClients').get(verifyAdminToken,getclients);
router.route("/admin/products").get(verifyAdminToken,getProducts);
router.route("/admin/categories").get(verifyAdminToken,getCategory);
router.route("/admin/commandes").get(verifyAdminToken,getCommandes);
router.route("/admin/clientCount").get(verifyAdminToken,getClientCount);
router.route("/admin/vendorCount").get(verifyAdminToken,getVendorCount);
router.route("/admin/productCount").get(verifyAdminToken,getProductCount);
router.route("/admin/commandeCount").get(verifyAdminToken,getCommandeCount);
router.route("/admin/validProduct/:id").put(verifyAdminToken,validProduct);
router.route('/admin/commande/:id').get(verifyAdminToken, getCommandeById);


export default router;