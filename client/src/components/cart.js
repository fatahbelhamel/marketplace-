import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
axios.defaults.withCredentials = true;

function Cart(){

    const [products, setProducts]= useState('');
    
    const getProducts = async()=>{
    	try{
         const response = await axios.get("http://localhost:5000/cart/get_products");
         console.log(response);
    	}catch(error){
    		console.log(error);
    	}
    }
     
    getProducts(); 


	return(
       <section class="h-100" >
		  <div class="container h-100 py-5">
		    <div class="row d-flex justify-content-center align-items-center h-100">
		      <div class="col-12">

		        <div class="d-flex justify-content-between align-items-center mb-4">
		          <h3 class="fw-normal mb-0 text-black">Panier</h3>
		          <div>
		            <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
		                  class="fas fa-angle-down mt-1"></i></a></p>
		          </div>
		        </div>
              <div class="row d-flex justify-content-between align-items-center mb-4">
			        <div class="card rounded-3 mb-4 col-9 ">
			          <div class="card-body p-4">
			            <div class="row d-flex justify-content-between align-items-center">
			              <div class="col-md-2 col-lg-2 col-xl-2">
			                <img src="/images/phone.png" class=""/>
			              </div>
			              <div class="col-md-3 col-lg-3 col-xl-3">
			                <p class="lead fw-normal mb-2">Basic T-shirt</p>
			                <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
			              </div>
			              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
			                <button class="btn btn-link px-2">
			                  <i class="fas fa-minus"></i>
			                </button>

			                <input id="form1" min="0" name="quantity" value="2" type="number"
			                  class="form-control form-control-sm d-flex justify-content-center" />

			                <button class="btn btn-link px-2">
			                  <i class="fas fa-plus"></i>
			                </button>
			              </div>
			              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
			                <h5 class="mb-0">$499.00</h5>
			              </div>
			              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
			                <a href="#!" class="text-warning"><i class="fas fa-trash fa-lg"></i></a>
			              </div>
			            </div>
			          </div>
			        </div>
	              <div class="card rounded-3 mb-4 col-2" >
			          <div class="card-body p-4">
			            <div class="justify-content-between align-items-center">
			              
			                 <div class="prix-total d-flex justify-content-between">
                             <p class="titl">Total : </p>
                             <p class="prix">$488</p>
			                 </div>
			                 <button class="btn btn-dark">commander</button>
			         
			              
			            </div>
			          </div>
			        </div>
		        </div>
		        

		      </div>
		    </div>
		  </div>
		</section>
		)
}

export default Cart;