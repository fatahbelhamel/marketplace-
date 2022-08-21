import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
axios.defaults.withCredentials = true;

function Commande (){

	const [products, setProducts]= useState('');
    const [total, setTotal]= useState('');
    const [id, setId]= useState('');
    const [count, setCount]= useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [pays, setPays]= useState('');
    const [city, setCity]= useState('');
    const [code_postal, setCode_postal]= useState('');
    const [paie_meth, setPaie_meth]= useState('');
    const history = useHistory();


    const addCommande = async(e)=>{
    	e.preventDefault();
    	try{
      
          await axios.post("http://localhost:5000/commande", {
              client_nom : nom,
              client_prenom : prenom,
              client_email : email,
              client_address : adress,
              pays : pays,
              city : city,
              code_postal : code_postal,
              paie_meth : paie_meth
          });
          history.push("/cart");
    	}catch(error){
    		console.log(error);
    	}
    }
    useEffect(()=>{
      addCommande();
    },[]); 


    const getProducts = async()=>{
    	try{
         const response = await axios.get("http://localhost:5000/cart/get_products");
         setProducts(response.data.productInCart);
         console.log(response.data.productInCart.length);
         setTotal(response.data.total);
    	}catch(error){
    		console.log(error);
    	}
    }
    useEffect(()=>{
      getProducts();
    },[]);  

    const getClientId = async (req,res)=>{
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

    const getProductCountInCart = async(req,res)=>{
      try{
         const response = await axios.get(`http://localhost:5000/cart/get_productsCounter/${id}`);
         setCount(response.data.count);
         console.log(count);
      }catch(error){
         console.log(error);
      }
   }

   useEffect(()=>{
      getProductCountInCart();
    },[id]);

	return(
      <div class="commande">
        <div class="container">
		  <main>
		    <div class="py-5 text-center">
		      <h2>passer une commande</h2>
		    </div>

		    <div class="row g-5">
		      <div class="col-md-5 col-lg-4 order-md-last">
		        <h4 class="d-flex justify-content-between align-items-center mb-3">
		          <span class="text-warning">Mon panier</span>
		          <span class="badge bg-warning rounded-pill">{count ? count : "0"}</span>
		        </h4>
		        <ul class="list-group mb-3">
		        { products ?
					Object.values(products).map((product, index)=>(
			          <li class="list-group-item d-flex justify-content-between lh-sm" key={index}>
			            <div>
			              <h6 class="my-0">{product.Nom_prod}</h6>
			              <small class="text-muted"></small>
			            </div>
			            <span class="text-muted">${product.Prix * product.Quantités}</span>
			          </li>
			      )) : "le panier est vide"       
				  }    
		          
		          <li class="list-group-item d-flex justify-content-between">
		            <span>Total (USD)</span>
		            <strong>${total ? total : "0"}</strong>
		          </li>
		        </ul>

		      </div>
		      <div class="col-md-7 col-lg-8">
		        <h4 class="mb-3">Adresse de commande</h4>
		        <form class="needs-validation" novalidate onSubmit={addCommande}>
		          <div class="row g-3">
		            <div class="col-sm-6">
		              <label for="firstName" class="form-label">Nom</label>
		              <input type="text" class="form-control" id="lastName" placeholder="" value="" required value={nom} onChange={(e)=>setNom(e.target.value)}/>
		              <div class="invalid-feedback">
		                Valid first name is required.
		              </div>
		            </div>

		            <div class="col-sm-6">
		              <label for="lastName" class="form-label">Prenom</label>
		              <input type="text" class="form-control" id="firstName" placeholder="" value="" required value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
		              <div class="invalid-feedback">
		                Valid last name is required.
		              </div>
		            </div>

		            <div class="col-12">
		              <label for="email" class="form-label">Email </label>
		              <input type="email" class="form-control" id="email" placeholder="" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
		              <div class="invalid-feedback">
		                Please enter a valid email address for shipping updates.
		              </div>
		            </div>

		            <div class="col-12">
		              <label for="address" class="form-label">Address</label>
		              <input type="text" class="form-control" id="address" placeholder="" required value={adress} onChange={(e)=>setAdress(e.target.value)}/>
		              <div class="invalid-feedback">
		                Please enter your shipping address.
		              </div>
		            </div>

		            <div class="col-md-5">
		              <label for="country" class="form-label">Pays</label>
		              <select class="form-select" id="country" required value={pays} onChange={(e)=>setPays(e.target.value)}>
		                <option value="">selectioné...</option>
		                <option>Algéria</option>
		                <option>Algéria</option>
		                <option>Algéria</option>
		                <option>Algéria</option>
		              </select>
		              <div class="invalid-feedback">
		                Please select a valid country.
		              </div>
		            </div>

		            <div class="col-md-4">
		              <label for="state" class="form-label">City</label>
		              <select class="form-select" id="state" required value={city} onChange={(e)=>setCity(e.target.value)}>
		                <option value="">selectioné...</option>
		                <option>Alger</option>
		                <option>Boumerdes</option>
		                <option>Alger</option>
		              </select>
		              <div class="invalid-feedback">
		                Please provide a valid state.
		              </div>
		            </div>

		            <div class="col-md-3">
		              <label for="zip" class="form-label">Code postal</label>
		              <input type="text" class="form-control" id="zip" placeholder="" required value={code_postal} onChange={(e)=>setCode_postal(e.target.value)}/>
		              <div class="invalid-feedback">
		                Zip code required.
		              </div>
		            </div>
		          </div>

		          <hr class="my-4"/>

		          <div class="form-check">
		            <input type="checkbox" class="form-check-input" id="same-address"/>
		            <label class="form-check-label" for="same-address">L'adresse de livraison est la même que mon adresse de commande</label>
		          </div>

		          <div class="form-check">
		            <input type="checkbox" class="form-check-input" id="save-info"/>
		            <label class="form-check-label" for="save-info">Conservez ces informations pour la prochaine fois</label>
		          </div>

		          <hr class="my-4"/>

		          <h4 class="mb-3">Paiement</h4>

		          <div class="my-3">
		            <div class="form-check">
		              <input id="credit" name="Carte de crédit" type="radio" class="form-check-input" onClick={(e)=>setPaie_meth(e.target.name)}/>
		              <label class="form-check-label" for="credit">Carte de crédit</label>
		            </div>
		            <div class="form-check">
		              <input id="debit" name="A la livraison" type="radio" class="form-check-input" onClick={(e)=>setPaie_meth(e.target.name)}/>
		              <label class="form-check-label" for="debit">A la livraison</label>
		            </div>
		          </div>

		          <div class="row gy-3">
		            <div class="col-md-6">
		              <label for="cc-name" class="form-label">Nom sur la carte</label>
		              <input type="text" class="form-control" id="cc-name" placeholder=""/>
		              <div class="invalid-feedback">
		                Name on card is required
		              </div>
		            </div>

		            <div class="col-md-6">
		              <label for="cc-number" class="form-label">Numéro de Carte de Crédit</label>
		              <input type="text" class="form-control" id="cc-number" placeholder=""/>
		              <div class="invalid-feedback">
		                Credit card number is required
		              </div>
		            </div>

		            <div class="col-md-3">
		              <label for="cc-expiration" class="form-label">Expiration</label>
		              <input type="text" class="form-control" id="cc-expiration" placeholder=""/>
		              <div class="invalid-feedback">
		                Expiration date required
		              </div>
		            </div>

		            <div class="col-md-3">
		              <label for="cc-cvv" class="form-label">CVV</label>
		              <input type="text" class="form-control" id="cc-cvv" placeholder=""/>
		              <div class="invalid-feedback">
		                Security code required
		              </div>
		            </div>
		          </div>

		          <hr class="my-4"/>

		          <button class="w-100 btn btn-dark btn-lg" type="submit">Commander</button>
		        </form>
		      </div>
		    </div>
		  </main>
		</div>
	</div>
		)
}

export default Commande;