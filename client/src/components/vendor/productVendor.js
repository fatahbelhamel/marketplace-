import { useState } from "react";
import { Link } from "react-router-dom";
import Sidbare from "./sidbare";
import axios from 'axios';
import cookie from "cookie";
import jwt_decode from "jwt-decode";
import Product from "./product";
axios.defaults.withCredentials = true;

function ProductVendor(){

  const [productes, setProducts] = useState('');

const getProducts = async (req,res)=>{
  try{
 
    const response = await axios.get(`http://localhost:5000/vendor/product/vendor/2`);
    setProducts(response.data.product);
    //console.log(products);
    
  }catch(error){
    console.log(error);
  }
}

getProducts();

	return(
         <div class="espace-vendor">
          <div class="row">
            <div class="col-3">
			        <Sidbare/>
            </div>
            <div class="col-9">
			        <h3 class="title">Les produits</h3>
              <div class="products">

               {
                Object.entries(productes).map(product=> console.log(product.id))
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