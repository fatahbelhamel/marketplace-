import Sidbare from "./sidbare";

function EspaceVendor(){
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
                          <p>5</p>
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