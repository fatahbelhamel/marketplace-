import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Sidbare from "./sidbare";

function EspaceVendor(){


   const [count, setCount] = useState("");
   const [id, setId] = useState("");

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
   },[id])
   
   const getProductCount = async(req,res)=>{
      try{
         const response = await axios.get(`http://localhost:5000/vendor/productCount/vendor/${id}`);
         setCount(response.data.count);
         console.log(count);
      }catch(error){
         console.log(error);
      }
   }

   getProductCount();

	return(
            <div class="espace-vendor">
          <div class="row">
            <div class="col-3">
			   <Sidbare/>
            </div>
            <div class="col-9">
			   <div class="content">
                 <div class="content-header">
                   <div class="">
                      <img src="/images/img8.jpg" />
                      <h5>06 mobile</h5>
                   </div>
                 </div>
                 <hr/>
                 <div class="content-body">
                    <div class="statistiques">
                       <div class="">
                          <h5>ventes totales</h5>
                          <p>10</p>
                       </div>
                       <div class="">
                          <h5>produits</h5>
                          <p>{count}</p>
                       </div>
                       <div class="">
                          <h5>commandes</h5>
                          <p>10</p>
                       </div>
                       <div class="">
                          <h5>crédit</h5>
                          <p>500$</p>
                       </div>
                    </div>
                 </div>
			   </div>
			 </div>  
            </div> 
		</div>
		)
}

export default EspaceVendor;