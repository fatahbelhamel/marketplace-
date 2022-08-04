import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory, useParams } from "react-router-dom";
axios.defaults.withCredentials = true;

function Product(){
    
   const [product, setProduct] = useState(""); 
   const [nom_boutique, setNom_boutique] = useState("");
   const { id } = useParams();
   const history = useHistory();
   

   const getProductById = async()=>{
      const response = await axios.get(`http://localhost:5000/product/${id}`);
      setProduct(response.data.product);
      //console.log(response.data.product);
   }

   getProductById();

   const addToCart = async()=>{
      try{
         console.log(id);
         await axios.post(`http://localhost:5000/cart/add_product/${id}`);
         //history.push('/cart');
      }catch(error){
         console.log(error);
      }
      
   }

   addToCart();

   const imagePath = "/images/";

   return (
      
         <div class="product" style={{ width:"100%",padding:"10px 70px 10px 70px" }}>
            <div class="row">
               <div class="col-3">
                  <div class="product-img">
                     <img src={imagePath + product.image}/>
                  </div>
               </div>
               <div class="col-6">
                  <div class="product-info">
                     <div class="product-title">
                        <h2>{product.nom_produit}</h2>
                        <div>
                           <p>Marque: <span>{product.marque}</span></p>
                           <p>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <span>(2 vue)</span>
                            </p>
                        </div>
                     </div>
                     <hr/>
                     <h3 class="product-price">{product.prix}$</h3>
                     <div class="product-status">
                        <p>Vendu par : <span class="vendor"></span></p>
                        <p>Satut : <span>En stock</span></p>
                     </div>
                     <p class="description">{product.description}</p>
                     <hr/>
                     <div class="btns">
                        <div class="quantite">
                           <span>-</span><span class="number">1</span><span>+</span>
                        </div>
                        <button class="btn btn-dark" onClick={addToCart}>Ajouter au Panier</button>
                     </div>
                     <div class="product-category">
                        <h5>Categorie: <span>{product.categorie}</span></h5>
                     </div>
                  </div>
               </div>
               <div class="col-3">
                  <div class="shipping-info">
                     <div class="">
                        <i class="fa-solid fa-globe"></i>
                        <h5>Expédition dans le monde entier</h5>
                     </div>
                     <div class="">
                        <i class="fa-solid fa-globe"></i>
                        <h5>Retour gratuit sous 7 jours si éligible, si facile</h5>
                     </div>
                     <div class="">
                        <i class="fa-solid fa-globe"></i>
                        <h5>Le fournisseur donne des factures pour ce produit.</h5>
                     </div>
                     <div class="">
                        <i class="fa-solid fa-globe"></i>
                        <h5>Payez en ligne ou lors de la réception des marchandises</h5>
                     </div>
                  </div>
                  <div class="sell">
                     <i class="fa-thin fa-shop"></i>
                     <p>Vender en DzMarket?<span><Link to="">Créer un compte</Link></span></p>
                  </div>
               </div>
            </div>
         </div>

   	)
}

export default Product;