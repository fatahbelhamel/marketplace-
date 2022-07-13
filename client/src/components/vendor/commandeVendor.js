import Sidbare from "./sidbare";

function CommandeVendor(){
	return(
         <div class="espace-vendor">
          <div class="row">
            <div class="col-3">
			        <Sidbare/>
            </div>
            <div class="col-9">
			        <h3>Les commandes</h3>
			      </div>
          </div> 
         </div> 
		)
}

export default CommandeVendor;