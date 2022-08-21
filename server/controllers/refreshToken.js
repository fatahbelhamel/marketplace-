import jwt from "jsonwebtoken";
import Client from "../models/clientModel.js";
import Vendor from "../models/vendorModel.js";
import Admin from "../models/adminModel.js";

export const refreshTokenClient = async (req,res)=>{
 try {
    const refreshToken = req.cookies.clientToken;
    if(!refreshToken) return res.sendStatus(401);
    const client = await Client.findOne({
        where : {
            Token_clt : refreshToken
        }
    });
    if(!client) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.JWT_CLIENT_TOKEN, (error, decode)=>{
        if(error) return res.sendStatus(403);
        const clientId = client.id;
        const name = client.Prenom_clt;
        const email = client.Email_clt;
        const clientToken = jwt.sign({clientId, name, email}, process.env.JWT_CLIENT_TOKEN,{expiresIn: '1h'});
        res.json({ clientToken });
    });
 } catch (error) {
     console.log(error);
 }
}

export const refreshTokenAdmin = async (req,res)=>{
 try {
    const refreshToken = req.cookies.adminToken;
    if(!refreshToken) return res.sendStatus(401);
    const admin = await Admin.findOne({
        where : {
            Token_adm : refreshToken
        }
    });
    if(!admin) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.JWT_ADMIN_TOKEN, (error, decode)=>{
        if(error) return res.sendStatus(403);
        const adminId = admin.id;
        const name = admin.Prenom_adm;
        const email = admin.Email_adm;
        const adminToken = jwt.sign({adminId, name, email}, process.env.JWT_ADMIN_TOKEN,{expiresIn: '1h'});
        res.json({ adminToken });
    });
 } catch (error) {
     console.log(error);
 }
}


export const refreshTokenVendor = async (req,res)=>{
 try {
    const refreshToken = req.cookies.vendorToken;
    if(!refreshToken) return res.sendStatus(401);
    const vendor = await Vendor.findOne({
        where : {
            Token_vend : refreshToken
        }
    });
    if(!vendor){
        console.log(vendor);
        return res.sendStatus(403);
    } 
    jwt.verify(refreshToken, process.env.JWT_VENDOR_TOKEN, (error, decode)=>{
        if(error) return res.sendStatus(403);
        const vendorId = vendor.id;
        const name = vendor.Prenom_vend;
        const email = vendor.Email_vend;
        const nom_boutique = vendor.Nom_boutique;
        const vendorToken = jwt.sign({vendorId, name, email,nom_boutique}, process.env.JWT_VENDOR_TOKEN,{expiresIn: '1h'});
        res.json({ vendorToken });
    });
 } catch (error) {
     console.log(error);
 }
}

