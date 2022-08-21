import jwt from "jsonwebtoken";
import cookie from "cookie";

export const verifyClientToken = (req, res, next) =>{
  try{
    const authHeader = req.headers.cookie;
    if(authHeader){
      const clientToken = cookie.parse(authHeader).clientToken;
      if(clientToken == null) return res.sendStatus(401);
      jwt.verify(clientToken, process.env.JWT_CLIENT_TOKEN,(error, decoded) => {
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

export const verifyAdminToken = (req, res, next) =>{
  try{
    const authHeader = req.headers.cookie;
    if(authHeader){
      const adminToken = cookie.parse(authHeader).adminToken;
      if(adminToken == null) return res.sendStatus(401);
      jwt.verify(adminToken, process.env.JWT_ADMIN_TOKEN,(error, decoded) => {
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


export const verifyVendorToken = (req, res, next) =>{
  try{
    const authHeader = req.headers.cookie;
    if(authHeader){
      const vendorToken = cookie.parse(authHeader).vendorToken;
      if(vendorToken == null) return res.sendStatus(401);
      jwt.verify(vendorToken, process.env.JWT_VENDOR_TOKEN,(error, decoded) => {
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