import jwt from "jsonwebtoken";
import Client from "../models/clientModel.js";
import Vendor from "../models/vendorModel.js";

export const refreshTokenClient = async (req,res)=>{
 try {
    const refreshToken = req.cookies.token;
    if(!refreshToken) return res.sendStatus(401);
    const client = await Client.findOne({
        where : {
            refresh_token : refreshToken
        }
    });
    if(!client) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.JWT_TOKEN, (error, decode)=>{
        if(error) return res.sendStatus(403);
        const clientId = client.id;
        const name = client.prenom;
        const email = client.email;
        const token = jwt.sign({clientId, name, email}, process.env.JWT_TOKEN,{expiresIn: '1h'});
        res.json({ token });
    });
 } catch (error) {
     console.log(error);
 }
}

export const refreshTokenVendor = async (req,res)=>{
 try {
    const refreshToken = req.cookies.token;
    if(!refreshToken) return res.sendStatus(401);
    const vendor = await Vendor.findOne({
        where : {
            refresh_token : refreshToken
        }
    });
    if(!vendor){
        console.log(vendor);
        return res.sendStatus(403);
    } 
    jwt.verify(refreshToken, process.env.JWT_TOKEN, (error, decode)=>{
        if(error) return res.sendStatus(403);
        const vendorId = vendor.id;
        const name = vendor.prenom;
        const email = vendor.email;
        const token = jwt.sign({vendorId, name, email}, process.env.JWT_TOKEN,{expiresIn: '1h'});
        res.json({ token });
    });
 } catch (error) {
     console.log(error);
 }
}

