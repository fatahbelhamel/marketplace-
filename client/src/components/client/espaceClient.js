import Sidbare from "./sidbare";


function EspaceClient(){
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
                      <img src="/images/img8.jpg" />
                      <h5>fatah tech</h5>
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