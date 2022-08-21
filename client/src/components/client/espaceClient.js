import { useState } from "react";
import axios from "axios";
import Sidbare from "./sidbare";


function EspaceClient(){

   const [image , setImage]= useState("");
   const [name , setName]= useState("");

   const getClient = async ()=>{
      try{
         const response = await axios.get("http://localhost:5000/client/getClient");
         setImage(response.data.client.Img_clt);
         setName(response.data.client.Nom_clt+ ' ' + response.data.client.Prenom_clt);
      }catch(error){
         console.log(error);
      }
   }

   getClient();
   const imagePath = "/images/";
	return(

		<div class="espace-client">
          <div class="row">
            <div class="col-3">
			   <Sidbare/>
            </div>
            <div class="col-9">
			   <div class="content">
                 <div class="content-header">
                   <div class="">
                      <img src={imagePath + image} />
                      <h5>{name}</h5>
                   </div>
                 </div>
                 <hr/>
                 <div class="content-body">
                    <div class="statistiques">
                       <div class="">
                          <h5>commandes totales</h5>
                          <p>5</p>
                       </div>
                       <div class="">
                          <h5>panier</h5>
                          <p>2</p>
                       </div>
                       <div class="">
                          <h5>crédit</h5>
                          <p>100$</p>
                       </div>
                       <div class="">
                          <h5>message</h5>
                          <p>0</p>
                       </div>
                    </div>
                 </div>
			   </div>
			 </div>  
            </div> 
		</div>
		)
}

export default EspaceClient;