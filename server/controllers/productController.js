import Product from "../models/productModel.js";
import Vendor from "../models/vendorModel.js";
import cookie from "cookie";
import jwt_decode from "jwt-decode";
import multer from "multer";
import fs from "fs";



export const createProduct = async(req,res) =>{
    console.log(req.body);
     console.log(req.file);
    
    
    const { nom_produit,description,categorie,marque,prix,quantity } = req.body;
    
    try{
        const product = await Product.findOne({
            where : {
                Nom_prod : nom_produit
            }
        });
        if(product) return res.status(400).json({ message : "ce produit exist deja"});
        
        const vendorToken = cookie.parse(req.headers.cookie).vendorToken;
        const vendor_id = jwt_decode(vendorToken).id;
        console.log(jwt_decode(vendorToken));

        const imageFile = req.file.filename;

        const vendor = await Vendor.findOne({
            where : {
                id : vendor_id
            }
        });
        await Product.create({
            Nom_prod : nom_produit,
            Desc_prod : description,
            Cat_prod : categorie,
            Marq_prod : marque,
            Prix : prix,
            Quant_prod : quantity,
            Img_prod : imageFile,
            Id_vend : vendor_id,
            Nom_boutique : vendor.Nom_boutique
        });
        res.status(200).json({
            message:"produit est bien créer"
        });
    }catch(error){
        res.status(402).json({ message : error});
        console.log(error);
    }  


    
} 

export const getProducts = async(req,res) =>{
    try{
        const products = await Product.findAll({
            where : {
                Stat_prod:"valide"
            }
        });

        res.status(200).json({
             products
        });

    }catch(error){
        res.status(400).json({ message : error});
    }    
} 

export const getProductsByOrder = async(req,res) =>{
    try{
        const products = await Product.findAll({
            where : {
                Stat_prod:"valide"
            },
            order : [
                ['id', 'DESC']
            ]
        });

        res.status(200).json({
             products
        });

    }catch(error){
        res.status(400).json({ message : error});
    }    
} 

export const getProductById = async(req,res) =>{
    try{
        const product = await Product.findOne({
            where :{
                id : req.params.id
            }
        });
        res.status(200).json({
                product
        });
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 

export const getProductByVendor = async(req,res) =>{
    try{
        const vendorToken = cookie.parse(req.headers.cookie).vendorToken;
        const vendor_id = jwt_decode(vendorToken).id;

        const products = await Product.findAll({
            where :{
                Id_vend : vendor_id
            }
        });
        res.status(200).json({
             products
        });
       
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 

export const getProductByCategory = async(req,res) =>{
    try{
        const products = await Product.findAll({
            where :{
                Cat_prod : req.params.categorie
            }
        });
        const product = await Product.findOne({
            where :{
                Cat_prod : req.params.categorie
            }
        });
        let marque=[];
        products.forEach((marq)=>{
            marque.push(marq.Marq_prod);
        });
        console.log(marque);
        res.status(200).json({
             products
        });
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 

export const getProductMarque = async(req,res) =>{
    try{
        const product = await Product.findOne({
            where :{
                Cat_prod : req.params.categorie
            }
        });
        const products = await Product.findAll({
             where :{
                Marq_prod : product.Marq_prod
            }
        });
        res.status(200).json({
             products
        });
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 

export const getProductByPrix = async(req,res) =>{
    try{
        const product = await Product.findAll({
            where :{
                Prix : req.params.prix
            }
        });
        res.status(200).json({
                product
        });
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 

export const getProductByMarque = async(req,res) =>{
    try{
        const products = await Product.findAll({
            where :{
                Marq_prod : req.params.marque
            }
        });
        res.status(200).json({
                products
        });
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 

export const updateProduct = async(req,res) =>{
    console.log(req.body);
     console.log(req.file);
    
    
    const { nom_produit,description,categorie,marque,prix,quantity } = req.body;
    
    try{
        const product = await Product.findOne({
            where : {
                Nom_prod : nom_produit
            }
        });
        if(product) return res.status(400).json({ message : "ce produit exist deja"});
        const vendorToken = cookie.parse(req.headers.cookie).vendorToken;
        const vendor_id = jwt_decode(vendorToken).id;

        const imageFile = req.file.filename;
        const vendor = await Vendor.findOne({
            where : {
                id : vendor_id
            }
        });

        await Product.update({
            Nom_prod : nom_produit,
            Desc_prod : description,
            Cat_prod : categorie,
            Marq_prod : marque,
            Prix : prix,
            Quant_prod : quantity,
            Img_prod : imageFile,
            Id_vend : vendor_id,
            Nom_boutique : vendor.Nom_boutique
        },{
            where: {
                id : req.params.id
            }
        });
        res.status(200).json({
            message:"produit est bien créer"
        });
    }catch(error){
        res.status(402).json({ message : error});
        console.log(error);
    }  
} 


export const deleteProduct = async(req,res) =>{
    try{
        const product = await Product.destroy({
            where :{
                id : req.params.id
            }
        });
        res.status(200).json({
                message:"le produit est supprimé"
        });
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 


export const productCountByVendor = async(req,res) =>{
    try{
        const count = await Product.count({
            where :{
                Id_vend : req.params.id
            }
        });
        res.status(200).json({
                count
        });
    }catch(error){
        res.status(400).json({ message : error});
    }  
}

export const searchProduct = async(req,res) =>{
    try{
        const products = await Product.findAll({
            where :{
                Nom_prod :  req.params.key
                }
            
        });
        console.log(products);
        res.status(200).json({
                products
        });
    }catch(error){
        res.status(400).json({ message : error});
    }  
}

