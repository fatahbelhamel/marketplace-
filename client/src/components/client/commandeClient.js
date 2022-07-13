import Sidbare from "./sidbare";

function CommandeClient(){
	return(
         <div class="espace-client">
          <div class="row">
            <div class="col-3">
			        <Sidbare/>
            </div>
            <div class="col-9">
			        <h3>Mes commandes</h3>
			      </div>
          </div> 
         </div> 
		)
}

export default CommandeClient;
