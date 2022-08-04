import Client from "../models/clientModel.js";
import jwt from "jsonwebtoken";
import md5 from "md5";



export const getclients = async (req,res)=>{
	try{
        const clients = await Client.findAll();
		res.json({clients});
	}catch(error){
		console.log(error);
	}
}




export const register = async (req,res)=>{

	const { nom,prenom,email,password,confpassword,adress,numero } = req.body;

    const client = await Client.findOne({
		where : {
			email : req.body.email
		}
	});
	if(client){
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
		    await Client.create({
				nom : nom,
				prenom : prenom,
				email : email,
				password : hashPassword,
				adress : adress,
				numero : numero
			});
		
			res.status(200).json({
				message:"le client bien inscré"
			});
			
		}catch(error){
            console.log(error);
		}
		
	}


}


export const login = async (req,res)=>{
	try{
		const client = await Client.findOne({
				where : {
					email : req.body.email
				}
			});
		
		const hashPassword = md5(req.body.password);
		if(!(hashPassword == client.password)) return res.status(401).json({message:"mot de pass incorrect"});

		const token = jwt.sign({id : client.id

		}, process.env.JWT_TOKEN,{expiresIn: "1h"});
		const { nom,prenom,email,password } = client;
        
       
		await Client.update({refresh_token:token},{
			where :{
				id:client.id
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
		   client :{
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
	    const client = await Client.findOne({
	        where : {
	            refresh_token : refreshToken
	        }
	    });
	    if(!client) return res.sendStatus(204);
		const clientId = client.id;
		Client.update({refresh_token: null},{
			where : {
				id : clientId
			}
		});
	    res.clearCookie('token');
	    return res.sendStatus(200);
	}catch(error){
		res.json({error})
	}
}
