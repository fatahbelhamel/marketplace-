import Client from "../models/clientModel.js";
import jwt from "jsonwebtoken";
import md5 from "md5";
import cookie from "cookie";
import jwt_decode from "jwt-decode";




export const getclientById = async (req,res)=>{
	try{
		const clientToken = cookie.parse(req.headers.cookie).clientToken;
        const client_id = jwt_decode(clientToken).id;

        const client = await Client.findOne({
        	where:{
        		id : client_id
        	}
        });
		res.json({client});
	}catch(error){
		console.log(error);
	}
}


export const register = async (req,res)=>{

	console.log(req.file);
	console.log(req.body);

	const { nom,prenom,email,password,confpassword,adress,numero } = req.body;

    const client = await Client.findOne({
		where : {
			Email_clt : req.body.email
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
		const imageFile = req.file.filename;
	    try{
		    await Client.create({
				Nom_clt : nom,
				Prenom_clt : prenom,
				Email_clt : email,
				Mdp_clt : hashPassword,
				Adress_clt : adress,
				Num_tel_clt : numero,
				Img_clt : imageFile
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
					Email_clt : req.body.email
				}
			});
		
		const hashPassword = md5(req.body.password);
		if(!(hashPassword == client.Mdp_clt)) return res.status(401).json({message:"mot de pass incorrect"});

		const clientToken = jwt.sign({id : client.id}, process.env.JWT_CLIENT_TOKEN,{expiresIn: "1h"});
		const { nom,prenom,email,password } = client;
        
       
		await Client.update({Token_clt:clientToken},{
			where :{
				id:client.id
			}
		});
        
		res.status(202).cookie("clientToken",clientToken,{ 
        	expires  : new Date(Date.now() + 1000),
        	sameSite : 'strict',
            httpOnly : true,
            secure : false,
            maxAge : 1000*60*60*60 }
            );
		
		res.status(200).json({
           clientToken: clientToken,
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
		const refreshToken = req.cookies.clientToken;
	    if(!refreshToken) return res.sendStatus(204);
	    const client = await Client.findOne({
	        where : {
	            Token_clt : refreshToken
	        }
	    });
	    if(!client) return res.sendStatus(204);
		const clientId = client.id;
		Client.update({Token_clt: null},{
			where : {
				id : clientId
			}
		});
	    res.clearCookie('clientToken');
	    return res.sendStatus(200);
	}catch(error){
		res.json({error})
	}
}
