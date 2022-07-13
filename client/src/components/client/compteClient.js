import Sidbare from "./sidbare";

function CompteClient(){
	return(
         <div class="espace-client">
          <div class="row">
            <div class="col-3">
			        <Sidbare/>
            </div>
            <div class="col-9">
			        <h3>Mon Compte</h3>
			      </div>
          </div> 
         </div> 
		)
}

export default CompteClient;
