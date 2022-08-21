import Admin from "../models/adminModel.js";
import Vendor from "../models/vendorModel.js";
import Client from "../models/clientModel.js";
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import Commande from "../models/commandeModel.js";
import jwt from "jsonwebtoken";
import md5 from "md5";


export const login = async (req,res)=>{
	try{
		const admin = await Admin.findOne({
				where : {
					Email_adm : req.body.email
				}
			});
		
		const hashPassword = md5(req.body.password);
		//console.log(md5(req.body.password));
		if(!(hashPassword == admin.Mdp_adm)) return res.status(401).json({message:"mot de pass incorrect"});

		const adminToken = jwt.sign({id : admin.id}, process.env.JWT_ADMIN_TOKEN,{expiresIn: "1h"});
		const { nom,prenom,email,password } = admin;

		await Admin.update({Token_adm : adminToken},{
			where :{
				id:admin.id
			}
		});
        
		res.status(202).cookie("adminToken",adminToken,{ 
        	expires  : new Date(Date.now() + 1000),
        	sameSite : 'strict',
            httpOnly : true,
            secure : false,
            maxAge : 1000*60*60*60 }
            );

		res.status(200).json({
           adminToken,
		   admin :{
			nom,prenom,email,password
		   }
		});
	
	}catch(error){
        res.status(404).json({message:"email not exist"});
	}
} 

export const logout = async (req,res)=>{
    try{
        const refreshToken = req.cookies.adminToken;
        if(!refreshToken) return res.sendStatus(204);
        const admin = await Admin.findOne({
            where : {
                Token_adm : refreshToken
            }
        });
        if(!admin) return res.sendStatus(204);
        const adminId = admin.id;
        Client.update({Token_adm: null},{
            where : {
                id : adminId
            }
        });
        res.clearCookie('adminToken');
        return res.sendStatus(200);
    }catch(error){
        res.json({error})
    }
}

export const getvendors = async (req,res)=>{
	try{
        const vendors = await Vendor.findAll();
		res.json({vendors});
	}catch(error){
		res.status(400).json({message: error})
	}
}

export const getclients = async (req,res)=>{
	try{
        const clients = await Client.findAll();
		res.json({clients});
	}catch(error){
		console.log(error);
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

export const getCategory = async(req,res) =>{
    try{
        const categories = await Category.findAll();
        if(categories) {
            res.status(200).json({
                categories
            });
        }else{
            res.status(400).json({
                message:"error"
            });
        }
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 

export const getCommandes = async(req,res) =>{
    try{
        const commandes = await Commande.findAll();
        if(commandes) {
            res.status(200).json({
                commandes
            });
        }else{
            res.status(400).json({
                message:"error"
            });
        }
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 

export const getClientCount = async(req,res) =>{
    try{
        const count = await Client.count();
        res.status(200).json({
        	count
        });
        console.log(count);
        
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 

export const getVendorCount = async(req,res) =>{
    try{
        const count = await Vendor.count();
        res.status(200).json({
        	count
        });
        
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 

export const getProductCount = async(req,res) =>{
    try{
        const count = await Product.count();
        res.status(200).json({
        	count
        });
        
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 

export const getCommandeCount = async(req,res) =>{
    try{
        const count = await Commande.count();
        res.status(200).json({
            count
        });
        
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 

export const validProduct = async(req,res) =>{
    try{
        await Product.update({Stat_prod : "valide"},{
            where :{
                 id :  req.params.id
                }
        });
        
        res.status(200).json({
               message : "produit validé"
        });
    }catch(error){
        res.status(400).json({ message : error});
    }  
}

export const validCommande = async(req,res) =>{
    try{
        await Commande.update({Stat_cmds : "valid"},{
            where :{
                 id :  req.params.id
                }
        });
        
        res.status(200).json({
               message : "produit validé"
        });
    }catch(error){
        res.status(400).json({ message : error});
    }  
}

export const getCommandeById = async(req,res) =>{
    try{
        const commande = await Commande.findOne({
            where :{
                id : req.params.id
            }
        });
        res.status(200).json({
                commande
        });
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 


