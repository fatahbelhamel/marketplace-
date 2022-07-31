import Vendor from "../models/vendorModel.js";
import jwt from "jsonwebtoken";
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




export const register = async (req,res)=>{

	const { nom,prenom,email,password,confpassword,nom_boutique,adress,numero } = req.body;

    const vendor = await Vendor.findOne({
		where : {
			email : req.body.email
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
	    try{
		    await Vendor.create({
				nom : nom,
				prenom : prenom,
				email : email,
				password : hashPassword,
                nom_boutique : nom_boutique,
				adress : adress,
				numero : numero
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
					email : req.body.email
				}
			});
		
		const hashPassword = md5(req.body.password);
		if(!(hashPassword == vendor.password)) return res.status(401).json({message:"mot de pass incorrect"});

		const token = jwt.sign({id : vendor.id}, process.env.JWT_TOKEN,{expiresIn: "1h"});
		const { nom,prenom,email,password } = vendor;
        
       
		await Vendor.update({refresh_token : token},{
			where :{
				id:vendor.id
			}
		});
        
		res.status(202).cookie("token",token,{ 
        	expires  : new Date(Date.now() + 1000),
        	sameSite : 'strict',
            httpOnly : true,
            secure : false,
            maxAge : 1000*60*60*60 }
            );
		
		res.status(200).json({
           token: token,
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
		const refreshToken = req.cookies.token;
	    if(!refreshToken) return res.sendStatus(204);
	    const vendor = await Vendor.findOne({
	        where : {
	            refresh_token : refreshToken
	        }
	    });
	    if(!vendor) return res.sendStatus(204);
		const vendorId = vendor.id;
		Vendor.update({refresh_token: null},{
			where : {
				id : vendorId
			}
		});
	    res.clearCookie('token');
	    return res.sendStatus(200);
	}catch(error){
		res.json({error})
	}
	
}


