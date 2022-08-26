import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
axios.defaults.withCredentials = true;

function Navbar(){

  const [name ,setName] = useState('');
  const [token ,setToken] = useState('');
  const [categories, setCategories] = useState('');
  const [message, setMessage] = useState('');
  const [id , setId] = useState('');
  const [count, setCount] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState('');
  const [filters, setFilters] = useState('');
  const [classe, setClasse] = useState('');
  const history = useHistory();

      const refreshToken = async () =>{
         try {
          const response = await axios.get("http://localhost:5000/client/token");
            setToken(response.data.clientToken);
            const decode = jwt_decode(response.data.clientToken);
            setName(decode.name);
         }catch (error) {
            console.error(error);
         }
      }
 
         useEffect(()=>{       
               refreshToken();
         },[]);  
    
   
      const Logout = async () =>{
         try {
           await axios.post("http://localhost:5000/client/logout");
           history.push("/client/login");
         }catch (error) {
            console.error(error);
         }
      }
 
 
        const getClientId = async ()=>{
          try {
             const response = await axios.get("http://localhost:5000/client/token");
             const decode = jwt_decode(response.data.clientToken);
                setId(decode.clientId);
             }catch (error) {
                console.error(error);
             }
        }
   useEffect(()=>{     
         getClientId();
   },[]);

   
        const getProductInCartCount = async()=>{
          try{
             const response = await axios.get(`http://localhost:5000/cart/get_productsCounter/${id}`);
             setCount(response.data.count);
             //console.log(response);
            
          }catch(error){
             console.log(error);
          }
        }
    //useEffect(()=>{    
        getProductInCartCount();
    //},[id]);

     
          const getCategories = async()=>{
            try{
              const response = await axios.get("http://localhost:5000/category");
              setCategories(response.data.categories);

            }catch(error){
              if(error.response){

              }
            }
          }
     useEffect(()=>{     
        getCategories();
     },[]);

/*
       const getProducts = async()=>{
        
        try{
            const response = await axios.get(`http://localhost:5000/products`);
            setProducts(response.data.products);
           // console.log(response.data.products);
        }catch(error){
            console.log(error);
        }
       }
      useEffect(()=>{
            getProducts();
      },[]);
  */    
    useEffect(()=>{
       const search = async()=>{
          const response = await axios.get(`http://localhost:5000/products`);
           setProducts(response.data.products);
           //console.log(products);
           setFilters(Object.values(products).filter((item) => item.nom_produit.toLowerCase().includes(searchTerm)));
       }

     search();
    },[]);

    
     
     console.log(filters);
      const path ="/products/";

  return(

    <div>
       <div class="header">
               <div class="brand">
                 <h1><Link to="/"><span>Dz</span>Market</Link></h1>

               </div>
                <div class="search">
                  <form>
                   <input type="search" class="form-control" autocomplete="off" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} name="search" placeholder="chercher un produit....."/>
                   <button class="btn btn-dark" type="submit">Search</button>
                  </form>
                  <ul class="searchItems" >
                     
                  </ul>
                  
               </div>
               
               <div class="items">
                  <ul class="items-menu">
                       <li class="user">
                        <Link to=""><br/>
                        <img class="icone" src="/images/user-profile-pngrepo-com.png"/> 
                        {token ? name : "S'identifier"}
                        </Link>
                            <ul class="menu">
                               <li><Link to="/client/login"><button class="btn btn-sm">Se connecter</button></Link></li>
                               <li><Link to="" class="divider"></Link></li>
                               <li><Link to={token ? "/client/espaceClient" : "/client/login"}>Mon compte</Link></li>
                               <li><Link to="">Mes commandes</Link></li>
                               <li><Link to="">Ma list d'envie</Link></li>
                               {
                                token ? <li><Link onClick={Logout}>Déconnecter</Link></li> : ""
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
                          <Link to="/cart"><br/>
                              <img class="icone" src="/images/shopping-cart-pngrepo-com.png"/>
                              <span class="badge">
                                {count ? count : "0"}
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
                      
                        <ul class="menu" >
                        {Object.values(categories).map((categorie, index) => (
                           
                               <li key={index}><Link to={path + categorie.Nom_cat}>{categorie.Nom_cat}</Link></li>
                           
                         ))}   
                        </ul>
                      
                   </li>
               </ul>
           </div>
           <div class="items">
               <ul class="items-menu">
                   <li><Link to="/">Offres</Link></li>
                   <li><Link to="">Services</Link>
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
export default Navbar;