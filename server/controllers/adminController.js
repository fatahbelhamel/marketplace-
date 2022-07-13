import Admin from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import md5 from "md5";


export const login = async (req,res)=>{
	try{
		const admin = await Admin.findOne({
				where : {
					email : req.body.email
				}
			});
		
		const hashPassword = md5(req.body.password);
		if(!(hashPassword == admin.password)) return res.status(401).json({message:"mot de pass incorrect"});

		const token = jwt.sign({id : admin.id}, process.env.JWT_TOKEN,{expiresIn: "1h"});
		const { nom,prenom,email,password } = admin;

		res.status(200).json({
           token,
		   admin :{
			nom,prenom,email,password
		   }
		});
	
	}catch(error){
        res.status(404).json({message:"email not exist"});
	}
} 




