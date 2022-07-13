import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
axios.defaults.withCredentials = true;

function NavbarVendor(){

  const [name ,setName] = useState('');
  const [token ,setToken] = useState('');
  const [expire ,setExpire] = useState('');
  const history = useHistory();
 

  const refreshToken = async () =>{
     try {
      const response = await axios.get("http://localhost:5000/vendor/token");
        setToken(response.data.token);
        const decode = jwt_decode(response.data.token);
        console.log(decode);
        setName(decode.name);
        setExpire(decode.exp);
     }catch (error) {
        console.error(error);
     }
  }
      
  refreshToken();   
   
    
  const Logout = async () =>{
     try {
        await axios.delete("http://localhost:5000/vendor/logout");
     }catch (error) {
        console.error(error);
     }
  }

   Logout();


  return(

    <div>
       <div class="header">
               <div class="brand">
                 <h1><Link to="/"><span>Dz</span>Market</Link></h1>
               </div>
                <div class="search">
                  <form>
                   <input type="search" class="form-control" name="search" placeholder="chercher un produit, une marque ou une categorie"/>
                   <button class="btn btn-dark">Search</button>
                  </form>
               </div>
               <div class="items">
                  <ul class="items-menu">
                       <li class="user">
                        <Link to=""><br/>
                        <img class="icone" src="/images/user-profile-pngrepo-com.png"/> 
                        {token ? name : "S'identifier"}
                        </Link>
                            <ul class="menu">
                               <li><Link to="/vendor/login"><button class="btn btn-sm">Se connecter</button></Link></li>
                               <li><Link to="" class="divider"></Link></li>
                               <li><Link to="/vendor/espaceVendor">Mon compte</Link></li>
                               <li><Link to="">Mes commandes</Link></li>
                               <li><Link to="">Ma list d'envie</Link></li>
                               {
                                name ? <li><Link onSubmit={Logout}>Déconnecter</Link></li> : ""
                                }
                               
                            </ul>
                       </li>
                       <li>
                         <Link to=""><br/>
                              <img class="icone" src="/images/heart-pngrepo-com.png"/>
                              <span class="badge">
                                0
                                <span class="visually-hidden">unread messages</span>
                              </span>
                         </Link>
                        </li>
                       <li>
                          <Link to="cart"><br/>
                              <img class="icone" src="/images/shopping-cart-pngrepo-com.png"/>
                              <span class="badge">
                                0
                                <span class="visually-hidden">unread messages</span>
                              </span>
                          </Link></li>
                   </ul>
               </div>

               <div class="btn-toggle">
                  <i class="fa-solid fa-bars"></i>
               </div>
           </div>
       <div class="header-nav">
           <div class="items">
               <ul class="items-menu">
                   <li><i class="fa-solid fa-bars"></i><Link to="" class="categorie">Tout les départements</Link>
                        <ul class="menu">
                           <li><Link to="">Electronique</Link>
                                <ul class="sub-menu">
                                   <li><Link to="">Electronique</Link></li>
                                   <li><Link to="">Electronique</Link></li>
                                   <li><Link to="">Electronique</Link></li>
                                   <li><Link to="">Electronique</Link></li>
                                   <li><Link to="">Electronique</Link></li>
                                </ul>
                           </li>
                           <li><Link to="">Ordinateur</Link>
                                <ul class="sub-menu">
                                   <li><Link to="">Ordinateur</Link></li>
                                   <li><Link to="">Ordinateur</Link></li>
                                   <li><Link to="">Ordinateur</Link></li>
                                   <li><Link to="">Ordinateur</Link></li>
                                </ul>
                           </li>
                           <li><Link to="">Télephone</Link>
                                <ul class="sub-menu">
                                   <li><Link to="">Télephone</Link></li>
                                   <li><Link to="">Télephone</Link></li>
                                   <li><Link to="">Télephone</Link></li>
                                </ul></li>
                           <li><Link to="">Télevision</Link> 
                                <ul class="sub-menu">
                                   <li><Link to="">Télevision</Link></li>
                                   <li><Link to="">Télevision</Link></li>
                                   <li><Link to="">Télevision</Link></li>
                                </ul></li>
                           <li><Link to="">Meubles</Link> 
                                <ul class="sub-menu">
                                   <li><Link to="">Meubles</Link></li>
                                   <li><Link to="">Meubles</Link></li>
                                   <li><Link to="">Meubles</Link></li>
                                   <li><Link to="">Meubles</Link></li>
                                </ul></li>
                           <li><Link to="">Vêtements</Link> 
                                <ul class="sub-menu">
                                   <li><Link to="">Vêtements</Link></li>
                                   <li><Link to="">Vêtements</Link></li>
                                   <li><Link to="">Vêtements</Link></li>
                                   <li><Link to="">Vêtements</Link></li>
                                   <li><Link to="">Vêtements</Link></li>
                                </ul></li>
                        </ul>
                   </li>
               </ul>
           </div>
           <div class="items">
               <ul class="items-menu">
                   <li><Link to="/">Offres</Link></li>
                   <li><Link to="">Services</Link>
                        <ul class="menu">
                           <li><Link to="">Services</Link></li>
                           <li><Link to="">Services</Link></li>
                           <li><Link to="">Services</Link></li>
                        </ul>
                   </li>
                   <li><Link to="">Apropos</Link></li>
                   <li><Link to="">Contact</Link></li>
               </ul>
           </div>
            <div class="items">
               <ul class="items-menu">
                   <li><Link to="/vender-en-DzMarket" class="nav-item">Vender en DzMarket</Link></li>
                   <li><Link to="" class="nav-item">Suivre votre Commande</Link></li>
                   <li><i class="fa-solid fa-language" style={{marginLeft:"10px",marginRight:"0px"}}></i><Link to="" style={{padding:"5px"}}>Langue</Link><i class="fa-solid fa-angle-down"></i>
                        <ul class="menu" style={{width:"150px"}}>
                           <li><Link to="">Francais</Link></li>
                           <li><Link to="">Anglais</Link></li>
                        </ul>
                   </li>
               </ul>
           </div>
       </div> 
       
   </div>
  )
}
export default NavbarVendor;