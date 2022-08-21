import Vendor from "../models/vendorModel.js";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import jwt_decode from "jwt-decode";
import md5 from "md5";



export const getvendors = async (req,res)=>{
	try{
        const vendors = await Vendor.findAll();
		res.json({vendors});
	}catch(error){
		res.status(400).json({message: error})
	}
}

export const getvendorById = async (req,res)=>{
	try{
		const vendorToken = cookie.parse(req.headers.cookie).vendorToken;
        const vendor_id = jwt_decode(vendorToken).id;
         console.log(vendor_id);
        const vendor = await Vendor.findOne({
        	where:{
        		id : vendor_id
        	}
        });
		res.json({vendor});
	}catch(error){
		console.log(error);
	}
}



export const register = async (req,res)=>{

	const { nom,prenom,email,password,confpassword,nom_boutique,adress,numero } = req.body;

    const vendor = await Vendor.findOne({
		where : {
			Email_vend : req.body.email
		}
	});
	if(vendor){
		res.status(400).json({
			message : "email exist deja"
		});
	}
	else if(password !== confpassword){
		res.status(400).json({
			message:"confirm mot de pass incorrect"
		});
	}else{
		const hashPassword = md5(password);
		const imageFile = req.file.filename;
	    try{
		    await Vendor.create({
				Nom_vend : nom,
				Prenom_vend : prenom,
				Email_vend : email,
				Mdp_vend : hashPassword,
                Nom_boutique : nom_boutique,
				Adress_vend : adress,
				Num_tel_vend : numero,
				Img_vend : imageFile
			});
		
			res.status(200).json({
				message:"vendeur bien inscré"
			});

		}catch(error){
            res.status(400).json({message : error})
		}
		
	}


}


export const login = async (req,res)=>{
	try{
		const vendor = await Vendor.findOne({
				where : {
					Email_vend : req.body.email
				}
			});
		
		const hashPassword = md5(req.body.password);
		if(!(hashPassword == vendor.Mdp_vend)) return res.status(401).json({message:"mot de pass incorrect"});
        
		const vendorToken = jwt.sign({id : vendor.id}, process.env.JWT_VENDOR_TOKEN,{expiresIn: "1h"});
		const { nom,prenom,email,password } = vendor;
        
       
		await Vendor.update({Token_vend : vendorToken},{
			where :{
				id:vendor.id
			}
		});
        
		res.status(202).cookie("vendorToken",vendorToken,{ 
        	expires  : new Date(Date.now() + 1000),
        	sameSite : 'strict',
            httpOnly : true,
            secure : false,
            maxAge : 1000*60*60*60 }
            );
		
		res.status(200).json({
           vendorToken: vendorToken,
		   vendor :{
			nom,prenom,email,password
		   }
		});
	
	}catch(error){
        res.status(404).json({message:"email not exist"});
        console.log(error);
	}
} 


export const logout = async (req,res)=>{
	try{
		const refreshToken = req.cookies.vendorToken;
	    if(!refreshToken) return res.sendStatus(204);
	    const vendor = await Vendor.findOne({
	        where : {
	            Token_vend : refreshToken
	        }
	    });
	    if(!vendor) return res.sendStatus(204);
		const vendorId = vendor.id;
		Vendor.update({Token_vend: null},{
			where : {
				id : vendorId
			}
		});
	    res.clearCookie('vendorToken');
	    return res.sendStatus(200);
	}catch(error){
		res.json({error})
	}
	
}


