import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Sidbare from "./sidbare";
import axios from 'axios';
import cookie from "cookie";
import jwt_decode from "jwt-decode";
import Product from "./product";
axios.defaults.withCredentials = true;

function ProductVendor(){

  const [products, setProducts] = useState("");
  const [id, setId] = useState("");
  const history = useHistory();

/*
const getVendorId = async (req,res)=>{
   try {
      const response = await axios.get("http://localhost:5000/vendor/token");
      const decode = jwt_decode(response.data.token);
        setId(decode.vendorId);
     }catch (error) {
        console.error(error);
     }
}
useEffect(()=>{
   getVendorId();
},[]);
*/

const getProducts = async ()=>{
  try{
    console.log(id);
    const response = await axios.get(`http://localhost:5000/vendor/products`);
    setProducts(response.data.products);
    //console.log(products);
    
  }catch(error){
    console.log(error);
  }
}
useEffect(()=>{
   getProducts();
},[]);


const deleteProduct = async(productId)=>{
  try{
    await axios.post(`http://localhost:5000/vendor/product/${productId}`);
    history.push("/vendor/productVendor");
  }catch(error){
    console.log(error);
  }
}

const imagePath = "/images/";
const path ="/vendor/updateProduct/";

	return(
         <div class="espace-vendor">
          <div class="row">
            <div class="col-3">
			        <Sidbare/>
            </div>
            <div class="col-9">
			        <h3 class="title">Les produits</h3>
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
                          <h4><Link to="/product">{product.Nom_prod}</Link></h4>
                          
                          <div class="product-bottom-details">
                            <div class="product-price">${product.Prix}</div>
                            <div class="product-links">
                              <Link to={path + product.id}><i class="fa-solid fa-pen-to-square"></i></Link>
                              <Link to="#" onClick={()=>deleteProduct(product.id)}><i class="fa-solid fa-trash"></i></Link>
                            </div>
                          </div>
                        </div>

                      </div> 
                    )
                }) : ""


               }


               </div> 
              <div class="add-product">
                 <Link to="/vendor/adProduct" class="btn btn-outline-dark">Ajouter un produit</Link>
              </div>
			      </div>
          </div> 
         </div> 
		)
}

export default ProductVendor;