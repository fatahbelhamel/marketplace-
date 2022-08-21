import Sidbare from "./sidbare";
import { useState } from "react";
import axios from "axios";

function CompteClient(){

  const [client, setClient]=useState("");

  const getClient = async ()=>{
      try{
         const response = await axios.get("http://localhost:5000/client/getClient");
         setClient(response.data.client);
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
			        <div class="compte-client">
                <div class="title">Mon compte</div>
                <div class="head">
                   <img src={imagePath + client.Img_clt} alt="" />
                   <p class="name">{client.Nom_clt +" "+ client.Prenom_clt}</p>
                </div> 
                <div class="body">
                   <p class="email">{client.Email_clt}</p>
                   <p class="numero">{client.Num_tel_clt}</p>
                   <p class="address">{client.Adress_clt}</p>
                </div>  
              </div>
			      </div>
          </div> 
         </div> 
		)
}

export default CompteClient;
