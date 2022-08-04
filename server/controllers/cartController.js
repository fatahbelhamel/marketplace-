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

        
        const token = cookie.parse(req.headers.cookie).token;
        const client_id = jwt_decode(token).id;

        
        const productInCart = await Cart.findOne({
            where :{
                nom_produit : product.nom_produit
            }
        });

        console.log(productInCart);
        
        let quantity = productInCart.quantités+1;
        
        if(productInCart){
            await Cart.update({quantités : quantity},
                {
                    where : {
                        id : productInCart.id
                    }
                });
            
        }else {
            await Cart.create({
                client_id: client_id,
                nom_produit: product.nom_produit,
                image_produit:  product.image,
                quantités: "1",
                prix: product.prix,
                total: product.prix
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
        const token = cookie.parse(req.headers.cookie).token;
        const client_id = jwt_decode(token).id;

        const productInCart = await Cart.findOne({
            where :{
                client_id : client_id
            }
        });
        res.status(200).json({
            productInCart
        });
        
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 