import jwt from "jsonwebtoken";
import cookie from "cookie";

export const verifyclientToken = (req, res, next) =>{
  if(req.headers.authorization){
    const token = req.headers.authorization.split(" ")[1];
    const client = jwt.verify(token, process.env.JWT_TOKEN);
    req.client = client;
    next();
  }else{
    return res.status(400).json({
      message : "tu n'a pas l'autorisation"
    });
  }
	
}

export const verifyAdminToken = (req, res, next) =>{
  if(req.headers.authorization){
    const token = req.headers.authorization.split(" ")[1];
    const admin = jwt.verify(token, process.env.JWT_TOKEN);
    req.admin = admin;
    next();
  }else{
    return res.status(400).json({
      message : "tu n'a pas l'autorisation"
    });
  }
	
}
export const verifyVendorToken = (req, res, next) =>{
  try{
    const authHeader = req.headers.cookie;
    if(authHeader){
      const token = cookie.parse(authHeader).token;
      if(token == null) return res.sendStatus(401);
      jwt.verify(token, process.env.JWT_TOKEN,(error, decoded) => {
        if(error){
          console.log(error);
          return res.sendStatus(403);
        } 
        req.email = decoded.email;
        next();
     });  
    }else {
      res.status(400).json({
        message : "tu n'a pa l'autorisation"
      });
     }  
    
  }catch(error){
    console.log(error);
  }  	
}