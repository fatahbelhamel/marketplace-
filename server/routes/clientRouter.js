import express from "express";
import { refreshTokenClient } from "../controllers/refreshToken.js";
import { getclientById,login,logout,register }  from "../controllers/clientController.js";
import { verifyClientToken } from "../middlweare/verifyToken.js";
import { isRequestValidated, validateRegister, validateLogin } from "../validation/validator.js";
import multer from "multer";
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


router.route('/client/getClient').get(verifyClientToken,getclientById);
router.route('/client/login').post(validateLogin, login);
router.route('/client/register').post(validateRegister, upload.single('Img_clt'), register);
router.route('/client/logout').post(verifyClientToken, logout);
router.route('/client/token').get(refreshTokenClient);


export default router;