import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import Sidbare from "./../components/sidbare";

function CommandeClient(){
	return(
        <>
        <Navbar/>
         <div class="espace-client">
          <div class="row">
            <div class="col-3">
			        <Sidbare/>
            </div>
            <div class="col-9">
			        <div class="commandes">
                
              </div>
			      </div>
          </div> 
         </div> 
        <Footer/>
        </>  
		)
}

export default CommandeClient;
