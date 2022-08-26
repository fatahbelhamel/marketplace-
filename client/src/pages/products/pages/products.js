import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import Sidbare from "./../components/sidbare.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


axios.defaults.withCredentials = true;

function Products(){
    
   const [products, setProducts] = useState(""); 
   const [marques, setMarques] = useState(""); 
   const [categoryImage, setCategoryImage] = useState(""); 
   const { categorie } = useParams();
   const history = useHistory();
   

   const getProductByCategory = async()=>{
      const response = await axios.get(`http://localhost:5000/products/${categorie}`);
      setProducts(response.data.products);
      //console.log(response);
   }

   getProductByCategory();

  const getCategoryImage = async()=>{
      const response = await axios.get(`http://localhost:5000/category_image/${categorie}`);
      setCategoryImage(response.data.categorie.Img_cat);
      console.log(response);
   }

   getCategoryImage();
   
  const imagePath = "/images/";
  const path = "/product/";

   return (
      <>
      <Navbar/> 
        <div class="categorie_baner container-fluid">
            <div class="image">
                <img src={imagePath + categoryImage}/>
            </div>
            <div class="overly"></div>
            <div class="title">{categorie}</div>
        </div>
      
        <div class="products-by-category container">

            <Sidbare/>
        
         <div class="products">

               {products ?
              
                Object.values(products).map((product, index)=>{
                  return (
                      <div class="product-card" style={{width:"250px",height:"400px",background:"white !important"}} key={index}>
                        <div class="product-tumb">
                          <img src={imagePath + product.Img_prod} alt=""/>
                        </div>
                        <div class="product-details">
                          <span class="product-catagory">{product.Cat_prod}</span>
                          <h4><Link to={path + product.id}>{product.Nom_prod}</Link></h4>
                          <div class="review" style={{display:"flex"}}>
                           <p style={{display:"flex",color:"orange",fontSize:"10px"}}>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                            </p>
                            <p style={{marginTop:"-7px", marginLeft:"10px"}}>(3 review)</p>
                          </div>
                          <div class="product-bottom-details">
                            <div class="product-price">${product.Prix}</div>
                            <div class="product-links">
                              <Link to=""><FavoriteIcon/></Link>
                            <Link to="#" ><ShoppingCartIcon/></Link>
                            </div>
                          </div>
                        </div>

                      </div> 
                    )
                }) : "........"


               }

         </div>
        </div> 
        <Footer/>
      </>
   	)
}

export default Products;