import { Link } from "react-router-dom";

function Product(){
   return (
      
         <div class="product" style={{ width:"100%",padding:"10px 70px 10px 70px" }}>
            <div class="row">
               <div class="col-3">
                  <div class="product-img">
                     <img src="/images/tv.webp"/>
                  </div>
               </div>
               <div class="col-6">
                  <div class="product-info">
                     <div class="product-title">
                        <h2>Neque porro quis</h2>
                        <div>
                           <p>Marque: <span>Marque</span></p>
                           <p>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <span>(2 vue)</span>
                            </p>
                        </div>
                     </div>
                     <hr/>
                     <h3 class="product-price">$200</h3>
                     <div class="product-status">
                        <p>Vendu par : <span class="vendor">brand store</span></p>
                        <p>Satut : <span>En stock</span></p>
                     </div>
                     <h3>les caractrésistiques</h3>
                     <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                     </ul>
                     <hr/>
                     <div class="btns">
                        <div class="quantite">
                           <span>-</span><span class="number">1</span><span>+</span>
                        </div>
                        <button class="btn btn-dark">Ajouter au Panier</button>
                        <button class="btn btn-warning">Acheter</button>
                     </div>
                     <div class="product-category">
                        <h5>Categorie: <span>categorie</span></h5>
                     </div>
                  </div>
               </div>
               <div class="col-3">
                  <div class="shipping-info">
                     <div class="">
                        <i class="fa-solid fa-globe"></i>
                        <h5>Expédition dans le monde entier</h5>
                     </div>
                     <div class="">
                        <i class="fa-solid fa-globe"></i>
                        <h5>Retour gratuit sous 7 jours si éligible, si facile</h5>
                     </div>
                     <div class="">
                        <i class="fa-solid fa-globe"></i>
                        <h5>Le fournisseur donne des factures pour ce produit.</h5>
                     </div>
                     <div class="">
                        <i class="fa-solid fa-globe"></i>
                        <h5>Payez en ligne ou lors de la réception des marchandises</h5>
                     </div>
                  </div>
                  <div class="sell">
                     <i class="fa-thin fa-shop"></i>
                     <p>Vender en DzMarket?<span><Link to="">Créer un compte</Link></span></p>
                  </div>
               </div>
            </div>
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Specification</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Vendor</button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <h3>Neque porro quis</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                 
              </div>
              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
            </div>
         </div>

   	)
}

export default Product;