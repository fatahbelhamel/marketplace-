import { Link } from "react-router-dom";


function Footer(){
	return(
	<div class="footer">
        <div class="row">
          <div class="col-3">
          	<div class="brand">
                 <h1><span>Dz</span>Market</h1> 
            </div>
            <p>Qui Somme Nous?</p>
          </div>
          <div class="col-3 services">
          	<h4>Services</h4>
          	<ul>
          		<li><Link to="">Paiement & Livraison</Link></li>
          		<li><Link to="">Remboursement de retour</Link></li>
          		<li><Link to="">Assistance de qualité</Link></li>
          		<li><Link to="">Rejoignez notre newsletter</Link></li>
          	</ul>
          </div>
          <div class="col-3 acheteur">
          	<h4>Client</h4>
          	<ul>
          		<li><Link to="">connecter</Link></li>
          		<li><Link to="">créer un compte</Link></li>
          		<li><Link to="">Suiver votre Commande</Link></li>
          	</ul>
          </div>
          <div class="col-3 vendeur">
          	<h4>Vendeur</h4>
          	<ul>
          		<li><Link to="">Vender En DzMarket</Link></li>
          		<li><Link to="">créer un compte</Link></li>
          	</ul>
          </div>
	 </div>
	<div class="icons">
	  <ul>
		<li><Link to=""><i class="fa-brands fa-facebook"></i></Link></li>
		<li><Link to=""><i class="fa-brands fa-linkedin"></i></Link></li>
		<li><Link to=""><i class="fa-brands fa-twitter"></i></Link></li>
		<li><Link to=""><i class="fa-brands fa-youtube"></i></Link></li>
	  </ul>
	  <form>
            <input type="text" class="form-control" name="subscribe" placeholder="Email"/>
            <button class="btn btn-outline-warning">Subscribe</button>
         </form>
	</div>
	<div class="copyright">&copy; Copyright tout les droits reservé sur DzMarket</div>
</div>
		)
}

export default Footer;