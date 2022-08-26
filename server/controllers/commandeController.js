import Commande from "../models/commandeModel.js";
import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";
import cookie from "cookie";
import jwt_decode from "jwt-decode";


export const addCommande = async(req,res) =>{
  try{
        console.log(req.body);
        const { client_nom, client_prenom, client_email, client_address, pays, city, code_postal, paie_meth } = req.body;

        const clientToken = cookie.parse(req.headers.cookie).clientToken;
        const client_id = jwt_decode(clientToken).id;

        const productInCart = await Cart.findOne({
            where:{
                Id_clt : client_id
            }
        });
         
        const commande = await Commande.findOne({
            Nom_prod : productInCart.Nom_prod
        });
        if(commande){
            let quantity = commande.Quantités+1;
            
            await Commande.update({Quantités : quantity},
                {
                    where : {
                        id : commande.id
                    }
                });
        }else {
            const product = await Product.findOne({
                where:{
                    Nom_prod : productInCart.Nom_prod
                }
            });
            const vendor_id = product.Id_vend;
            const date = new Date();

            await Commande.create({
            Id_clt: client_id,
            Id_vend: vendor_id,
            Nom_clt : client_nom,
            Prenom_clt : client_prenom,
            Email_clt : client_email,
            Adress_clt : client_address,
            Pays : pays,
            City : city,
            Code_postal : code_postal,
            Nom_prod: productInCart.Nom_prod,
            Img_prod:  productInCart.Img_prod,
            Quantités: productInCart.Quantités,
            Prix: productInCart.Prix,
            Paie_meth: paie_meth,
            Date_cmds: Date.now()
        });
        
        }
        
        

        res.status(200).json({
            message:"commande est ajouté "
        });

    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }  
} 

export const getCommandes = async(req,res) =>{
    try{
        const vendorToken = cookie.parse(req.headers.cookie).vendorToken;
        const vendor_id = jwt_decode(vendorToken).id;
        const commandes = await Commande.findAll({
            where : {
                Id_vend : vendor_id
            }
        });
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

export const deleteCommande = async(req,res) =>{
    try{
        const product = await Commande.destroy({
            where :{
                id : req.params.id
            }
        });
        res.status(200).json({
                message:"la commande est supprimé"
        });
    }catch(error){
        res.status(400).json({ message : error});
    }    
} 