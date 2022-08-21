import Sidbare from "./sidbare";
import { useState } from "react";
import axios from "axios";

function CompteVendor(){

  const [vendor, setVendor]=useState("");

  const getVendor = async ()=>{
      try{
         const response = await axios.get("http://localhost:5000/vendor/getVendor");
         setVendor(response.data.vendor);
      }catch(error){
         console.log(error);
      }
   }
   getVendor();
  const imagePath = "/images/";
	return(
         <div class="espace-vendor">
          <div class="row">
            <div class="col-3">
              <Sidbare/>
            </div>
            <div class="col-9">
              <div class="compte-vendor">
                <div class="title">Mon compte</div>
                <div class="head">
                   <img src={imagePath + vendor.Img_vend} alt="" />
                   <p class="name">{vendor.Nom_boutique}</p>
                </div> 
                <div class="body">
                   <p class="email">{vendor.Email_vend}</p>
                   <p class="numero">{vendor.Num_tel_vend}</p>
                   <p class="address">{vendor.Adress_vend}</p>
                </div>  
              </div>
            </div>
          </div> 
         </div> 
		)
}

export default CompteVendor;