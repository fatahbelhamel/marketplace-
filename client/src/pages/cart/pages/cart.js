import Navbar from "./../components/navbar.js";
import Footer from "./../components/footer.js";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
axios.defaults.withCredentials = true;

function Cart(){

    const [products, setProducts]= useState('');
    const [total, setTotal]= useState('');
    const [quantités, setQuantités]= useState("");
    const [laoding, setLaoding] = useState(false);
    const history = useHistory();
    
    const getProducts = async()=>{
    	try{
    	 setLaoding(true);
         const response = await axios.get("http://localhost:5000/cart/get_products");
         setProducts(response.data.productInCart);
         console.log(response.data.productInCart.length);
         setTotal(response.data.total);
         setLaoding(false);
    	}catch(error){
    		console.log(error);
    	}
    }
   
    useEffect(()=>{ getProducts(); });


  
	   const deleteProductInCart = async(productId)=>{
	    	try{
				console.log(productId);
	    		console.log(`http://localhost:5000/cart/delete_product/${productId}`);
			   await axios.post(`http://localhost:5000/cart/delete_product/${productId}`);
			   history.push("/cart");
	    	}catch(error){
	    		console.log(error);
	    	}
	    }
  

    
    	
    //console.log(quantités);
    
    //console.log(products);

    const imagePath = "/images/";

	return(
		<>
	   <Navbar/>
       <section class="h-100 cart" >
		  <div class="container h-100 py-5">
		    <div class="row d-flex justify-content-center align-items-center h-100">
		      <div class="col-12">
            
		        <div class="d-flex justify-content-between align-items-center mb-4">
		          <h3 class="fw-normal mb-0 text-black">Panier</h3>
		          <div>
		            
		          </div>
		        </div>
		        <div class="row d-flex justify-content-between align-items-center mb-4">
					{ products ?
					Object.values(products).map((product, index)=>(
					<div class="card rounded-3 mb-4 col-9 " key={index}>
			          <div class="card-body p-4">
			            <div class="row d-flex justify-content-between align-items-center">
			              <div class="col-md-2 col-lg-2 col-xl-2">
			                <img src={imagePath + product.Img_prod} class="image"/>
			              </div>
			              <div class="col-md-3 col-lg-3 col-xl-3">
			                <p class="lead fw-normal mb-2">{product.Nom_prod}</p>
			                
			              </div>
			              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
			                <button class="btn btn-link px-2">
			                  <i class="fas fa-minus"></i>
			                </button>

			                <input id="form1" min="0" name="quantity" value={product.Quantités}  type="number"
			                  class="form-control form-control-sm d-flex justify-content-center" />

			                <button class="btn btn-link px-2" >
			                  <i class="fas fa-plus"></i>
			                </button>
			              </div>
			              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
			                <h5 class="mb-0">${product.Prix * product.Quantités}</h5>
			              </div>
			              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
			                <a style={{cursor:"pointer"}} onClick={()=>deleteProductInCart(product.id)}  class="text-warning"><i class="fas fa-trash fa-lg"></i></a>
			              </div>
			            </div>
			          </div>
			        </div>
					)) : "le panier est vide"
				       
				    }
			      {products.length ? 

			      
		              <div class="card rounded-3 mb-4 col-2" >
				          <div class="card-body p-4">
				            <div class="justify-content-between align-items-center">			              
				                 <div class="prix-total d-flex justify-content-between">
		                             <p class="titl">Total : </p>
		                             <p class="prix">${total}</p>
				                 </div>
				                 <Link to="/commande" class="btn btn-dark">commander</Link>
				            </div>
				          </div>
				        </div>
                    
                    : ""
                    }  

		        </div>
              
		        

		      </div>
		    </div>
		  </div>
		</section>
	    <Footer/>
		</>	
		)
}

export default Cart;