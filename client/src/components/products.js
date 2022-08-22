import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Sidbare from "./sidbare.js";

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
                      <div class="product-card" style={{width:"250px",background:"white !important"}} key={index}>
                        <div class="product-tumb">
                          <img src={imagePath + product.Img_prod} alt=""/>
                        </div>
                        <div class="product-details">
                          <span class="product-catagory">{product.Cat_prod}</span>
                          <h4><Link to={path + product.id}>{product.Nom_prod}</Link></h4>
                          
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
      </>
   	)
}

export default Products;