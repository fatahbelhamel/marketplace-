import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
//import jwt_decode from "jwt-decode";
import { useHistory, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//import { Helmet } from "react-helmet-async";
axios.defaults.withCredentials = true;

function Product(){
   
   
   const [product, setProduct] = useState(""); 
   const [products, setProducts] = useState("");
   const [marque, setMarque] = useState("");
   const { id } = useParams();
   const history = useHistory();

   useEffect(()=>{
      const getProductById = async()=>{
      try{
         const response = await axios.get(`http://localhost:5000/product/${id}`);
         setProduct(response.data.product);
         setMarque(response.data.product.Marq_prod);
      }catch(error){
         console.log(error);
      }
     };
     getProductById();
   },[id]);

   
   
     const addToCart = async(e)=>{
      e.preventDefault();
      try{
         
         await axios.post(`http://localhost:5000/cart/add_product/${id}`);
         history.push('/cart');
      }catch(error){
         console.log(error);
      }   
     };
   
   
   useEffect(()=>{
     addToCart();
   },[id]);


  const getProductsByMarque = async()=>{
    const response = await axios.get(`http://localhost:5000/product/marque/${marque}`);
    setProducts(response.data.products);
   }
   
  getProductsByMarque();

   const imagePath = "/images/";
   const path = "/product/";

   return (
         
         <div class="product" style={{ width:"100%",padding:"10px 70px 10px 70px" }}>
            <div class="row">
               <div class="col-3">
                  <div class="product-img">
                     <img src={imagePath + product.Img_prod}/>
                  </div>
               </div>
               <div class="col-6">
                  <div class="product-info">
                     <div class="product-title">
                       
                        <h2>{product.Nom_prod}</h2>
                        
                        <div>
                           <p>Marque: <span>{product.Marq_prod}</span></p>
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
                     <h3 class="product-price">{product.Prix}$</h3>
                     <div class="product-status">
                        <p>Vendu par : <span class="vendor">{product.Nom_boutique}</span></p>
                        <p>Satut : <span>En stock</span></p>
                     </div>
                     <p class="description">{product.Desc_prod}</p>
                     <hr/>
                     <div class="btns">
                        <div class="quantite">
                           <span>-</span><span class="number">1</span><span>+</span>
                        </div>
                        <button class="btn btn-dark" onClick={addToCart}>Ajouter au Panier</button>
                     </div>
                     <div class="product-category">
                        <h5>Categorie: <span>{product.Cat_prod}</span></h5>
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
            <div class="product-semilaire">
               <h5 class="title">Les produits semilaires</h5>
                <div class="products">
                 {products ?
                  Object.values(products).map((product, index)=>{
                  return (
                   <div class="product-card" style={{width:"300px",background:"white !important"}} key={index}>
                      <div class="product-tumb">
                        <img src={imagePath + product.Img_prod} alt=""/>
                      </div>
                      <div class="product-details">
                        <span class="product-catagory">{product.Cat_prod}</span>
                        <h4><Link to={path + product.id}>{product.Nom_prod}</Link></h4>
                        
                        <div class="product-bottom-details">
                          <div class="product-price">{product.Prix}$</div>
                          <div class="product-links">
                            <Link to=""><FavoriteIcon/></Link>
                            <Link to="#" onClick={()=>addToCart(product.id)}><ShoppingCartIcon/></Link>
                          </div>
                        </div>
                      </div>
                   </div>    
                  )
                 }) :" "
                } 
                   
                </div>
            </div>
         </div>

   	)
}

export default Product;