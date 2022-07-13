 import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
axios.defaults.withCredentials = true;

//import { login } from "../actions/auth.actions.js";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();
    


	const vendorLogin = async (e)=>{
        e.preventDefault();
        try{
          await axios.post("http://localhost:5000/vendor/login",
		      {
          	email : email,
          	password : password
          });
		        history.push("/vendor/espaceVendor");
        } catch(error){
          if(error.response){
			      setMessage(error.response.data.message);
          }
        }
		/*const user = {
			email ,
			password
		}

		  dispatch(login(user));*/
    }


	return(

     <div class="container connection">
     		<div class="login">
     			<h5 class="title">Se connecter</h5>
     			 <div class="login-form">
	     			 {message}
					
	        		<form onSubmit={vendorLogin}>
	        			<TextField
			              margin="normal"
			             // required
			              fullWidth
			              id="email"
			              label="Address Email"
			              name="email"
			              autoComplete="email"
			              autoFocus
			              value={email}
			              onChange={(e)=>setEmail(e.target.value)}
			            />
			            <TextField
			              margin="normal"
			             // required
			              fullWidth
			              name="password"
			              label="Mot de pass"
			              type="password"
			              id="password"
			              autoComplete="current-password"
			              value={password}
			              onChange={(e)=>setPassword(e.target.value)}
			            />
			            <Grid container>
			              <Grid item xs>
			                <Link href="#" variant="body2">
							           Mot de passe oublié?
			                </Link>
			              </Grid>
			              <Grid item>
			                <Link href="#" variant="body2">
			                </Link>
			              </Grid>
			            </Grid>
			            <button class="btn btn-dark">se connecter</button>
									<button class="btn google"><i class="fa-brands fa-google"></i> google</button>
			            <button class="btn btn-primary"><i class="fa-brands fa-facebook-f"></i> facebook</button>
			          
	        		</form>
	        	</div>
     		</div>
     		<div class="divider">
     			<div></div>
     		</div>
     		<div class="creer-compte">
     			<h5 class="title">Créer un compte</h5>
     			<p>Créez votre compte client sur DzMarket en quelques clics ! Vous pouvez vous inscrire soit en utilisant votre adresse e-mail, soit via votre compte Facebook.</p>
     			<Link to="/vendor/register">
     			 <button class="btn btn-dark" type="submit">Créer un compte sur DzMarket</button>
     			</Link> 
     		</div>
   
     </div>


       
		)
}

export default Login;
