import Navbar from "./../components/navbar.js";
import Footer from "./../components/footer.js";
import Testimonials from "./../components/testimonial.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Vendor(){
  const [token,setToken]=useState("");
  const refreshToken = async () =>{
         try {
          const response = await axios.get("http://localhost:5000/vendor/token");
            setToken(response.data.vendorToken);
         }catch (error) {
            console.error(error);
         }
      }
 
 useEffect(()=>{       
       refreshToken();
 },[]);  
	return(
    <>
       <Navbar/>
       <div class="vendor">
       	 <div class="banner">
       	 	<img src="/images/vendor-online.png"/>
            <div class="overly"></div>
       	 	<div class="banner-content">
       	 	  <h1>Des millions d'acheteurs ont hâte de voir
                  Ce que vous avez en magasin
              </h1>
              <Link to={token ? "/vendor/espaceVendor" :"/vendor/login"}><button class="btn btn-outline-warning">commancer de vendre</button></Link>
       	 	</div> 	
       	 </div>
         <div class="vendor-services">
             <h5>POURQUOI VENDRE SUR DzMarket</h5>
             <h4>Rejoignez un marché où près de 50 millions d'acheteurs autour
                 la boutique mondiale d'objets uniques
             </h4>
             <div class="services">
                 <div class="row">
                     <div class="col-4">
                         <img src="/images/01.png"/>
                         <h3>Frais peu élevés</h3>
                         <p>Il ne faut pas beaucoup pour répertorier vos articles
                            et une fois que vous faites une vente, Martfury's
                            les frais de transaction ne sont que de 2,5 %.
                         </p>
                     </div>
                     <div class="col-4">
                         <img src="/images/02.png"/>
                         <h3>Des outils puissants</h3>
                         <p>Our tools and services make it easy
                            to manage, promote and grow your
                            business.
                         </p>
                     </div>
                     <div class="col-4">
                         <img src="/images/03.png"/>
                         <h3>Assistance 24h/24 et 7j/7</h3>
                         <p>Nos outils et services vous facilitent la tâche
                            pour gérer, promouvoir et développer votre
                            des affaires.
                         </p>
                     </div>
                 </div>
            </div>
         </div>
         <div class="fonctionalité">
             <h5>COMMENT ÇA FONCTIONNE</h5>
             <h4>Facile à commencer à vendre en ligne sur DzMarket en seulement 4 étapes simples</h4>
             <div class="fonctionalité-timeline">
              <div class="container">

                <div class="row align-items-center how-it-works d-flex">
                  <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                    <div class="circle font-weight-bold">1</div>
                  </div>
                  <div class="col-6">
                    <h5>Inscrivez-vous et répertoriez vos produits</h5>
                    <p>Enregistrez votre entreprise gratuitement et créez un catalogue de produits. Bénéficiez d'une formation gratuite sur la gestion de votre activité en ligne</p>
                    <p>Nos conseillers DzMarket vous aideront à chaque étape et vous assisteront pleinement dans la mise en ligne de votre entreprise</p>
                  </div>
                </div>

                <div class="row timeline">
                  <div class="col-2">
                    <div class="corner top-right"></div>
                  </div>
                  <div class="col-8">
                    <hr/>
                  </div>
                  <div class="col-2">
                    <div class="corner left-bottom"></div>
                  </div>
                </div>

                <div class="row align-items-center justify-content-end how-it-works d-flex">
                  <div class="col-6 text-right">
                    <h5>Recevez des commandes et vendez votre produit</h5>
                    <p>Enregistrez votre entreprise gratuitement et créez un catalogue de produits. Bénéficiez d'une formation gratuite sur la gestion de votre activité en ligne</p>
                    <p>Nos conseillers DzMarket vous aideront à chaque étape et vous assisteront pleinement dans la mise en ligne de votre entreprise</p>
                  </div>
                  <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div class="circle font-weight-bold">2</div>
                  </div>
                </div>

                <div class="row timeline">
                  <div class="col-2">
                    <div class="corner right-bottom"></div>
                  </div>
                  <div class="col-8">
                    <hr/>
                  </div>
                  <div class="col-2">
                    <div class="corner top-left"></div>
                  </div>
                </div>

                <div class="row align-items-center how-it-works d-flex">
                  <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                    <div class="circle font-weight-bold">3</div>
                  </div>
                  <div class="col-6">
                    <h5>Emballez et expédiez facilement</h5>
                    <p>Enregistrez votre entreprise gratuitement et créez un catalogue de produits. Bénéficiez d'une formation gratuite sur la gestion de votre activité en ligne</p>
                    <p>Nos conseillers DzMarket vous aideront à chaque étape et vous assisteront pleinement dans la mise en ligne de votre entreprise</p>
                  </div>
                </div>

                <div class="row timeline">
                  <div class="col-2">
                    <div class="corner top-right"></div>
                  </div>
                  <div class="col-8">
                    <hr/>
                  </div>
                  <div class="col-2">
                    <div class="corner left-bottom"></div>
                  </div>
                </div>

                <div class="row align-items-center justify-content-end how-it-works d-flex">
                  <div class="col-6 text-right">
                    <h5>Recevez des paiements et développez votre entreprise</h5>
                    <p>Enregistrez votre entreprise gratuitement et créez un catalogue de produits. Bénéficiez d'une formation gratuite sur la gestion de votre activité en ligne</p>
                    <p>
                      Nos conseillers DzMarket vous aideront à chaque étape et vous assisteront pleinement dans la mise en ligne de votre entreprise</p>
                  </div>
                  <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div class="circle font-weight-bold">4</div>
                  </div>
                </div>

                
              </div>
            </div>
         </div>
         
       </div>
       <h4 class="categorie-title">Écoutez les avis des autres clients</h4>
       <div class="testimonials">
         <Testimonials/>
       </div>
      <Footer/> 
  </>     
		)
}

export default Vendor;