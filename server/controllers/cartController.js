import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";
import cookie from "cookie";
import jwt_decode from "jwt-decode";


export const addToCart = async(req,res) =>{
  try{
        const product = await Product.findOne({
            where :{
                id : req.params.id
            }
        });

        
        const clientToken = cookie.parse(req.headers.cookie).clientToken;
        const client_id = jwt_decode(clientToken).id;
        console.log(clientToken);
        console.log(client_id);

        
        const productInCart = await Cart.findOne({
            where :{
                Nom_prod : product.Nom_prod
            }
        });

        console.log(productInCart);
        
        
        
        if(productInCart){

            let quantity = productInCart.Quantités+1;
            
            await Cart.update({Quantités : quantity},
                {
                    where : {
                        id : productInCart.id
                    }
                });
            
        }else {
            await Cart.create({
                Id_clt: client_id,
                Nom_prod: product.Nom_prod,
                Img_prod:  product.Img_prod,
                Quantités: "1",
                Prix: product.Prix
            });
        }
        

        res.status(200).json({
            message:"produit est ajouté au panier"
        });

    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }  
} 

export const getProductCart = async(req,res) =>{
    try{
        const clientToken = cookie.parse(req.headers.cookie).clientToken;
        const client_id = jwt_decode(clientToken).id;
        //console.log(client_id);

        const productInCart = await Cart.findAll({
            where :{
                Id_clt : client_id
            }
        });
      
        let total=0;
        productInCart.forEach((product)=>{
            total = total + (product.Prix*product.Quantités);
        });
        
    

        res.status(200).json({
            productInCart,
            total
        });
        //console.log(productInCart);
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 

export const getProductCartCounter = async(req,res) =>{
    try{

        const count = await Cart.count({
            where :{
                Id_clt : req.params.id
            }
        });
        res.status(200).json({
            count
        });
       console.log(count);
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 

export const deleteProductInCart = async(req,res) =>{
    
   try{
        await Cart.destroy({
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

export const updateQuantités = async(req,res) =>{
    
   try{
        await Cart.update({
            where :{
                Quantités : req.params.quantités
            }
        });
        res.status(200).json({
                message:"le produit est supprimé"
        });
    }catch(error){
        res.status(400).json({ message : error});
    }        
} 