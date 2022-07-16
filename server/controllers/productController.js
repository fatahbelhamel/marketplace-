import Product from "../models/productModel.js";
import cookie from "cookie";
import jwt_decode from "jwt-decode";

export const createProduct = async(req,res) =>{
    const { nom_produit,description,categorie,marque,prix,image } = req.body;
    try{
        const product = await Product.findOne({
            where : {
                nom_produit : req.body.nom_produit
            }
        });
        if(product) return res.status(400).json({ message : "ce produit exist deja"});
        const token = cookie.parse(req.headers.cookie).token;
        const vendor_id = jwt_decode(token).id;
        console.log(vendor_id);
        await Product.create({
            nom_produit : nom_produit,
            description : description,
            categorie : categorie,
            marque : marque,
            prix : prix,
            image : image,
            vendeur_id : vendor_id
        });
        res.status(200).json({
            message:"produit est bien créer"
        });
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 

export const getProducts = async(req,res) =>{
    try{
        const products = await Product.findAll();

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
        const product = await Product.findAll({
            where :{
                vendeur_id : req.params.id
            }
        });
        res.status(200).json({
             product
        });
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 

export const getProductByPrix = async(req,res) =>{
    try{
        const product = await Product.findAll({
            where :{
                prix : req.params.prix
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
        const product = await Product.findAll({
            where :{
                marque : req.params.marque
            }
        });
        res.status(200).json({
                product
        });
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 

export const updateProduct = async(req,res) =>{
    const { nom_produit,description,categorie,marque,prix,image } = req.body;
    try{
        const product = await Product.findOne({
            where :{
                id : req.params.id
            }
        });
        if(product){
            await Product.update({
                nom_produit : nom_produit,
                description : description,
                categorie : categorie,
                marque : marque,
                prix : prix,
                image : image
            },{
                where :{
                    id : req.params.id
                }
            });
            res.status(200).json({
                    message:"le produit est modifié"
            });
        }
        
    }catch(error){
        res.status(400).json({ message : error});
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