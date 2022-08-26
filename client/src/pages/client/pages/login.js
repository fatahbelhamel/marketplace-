import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
axios.defaults.withCredentials = true;


function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();
    


	const clientLogin = async (e)=>{
        e.preventDefault();
        try{
          await axios.post("http://localhost:5000/client/login",
		      {
          	email : email,
          	password : password
          });
		        history.push("/client/espaceClient");
        } catch(error){
          if(error.response){
			      setMessage(error.response.data.message);
          }
        }
    }


	return(
     <>
	 <Navbar/>
     <div class="container connection">
     		<div class="login">
     			<h5 class="title">Se connecter</h5>
     			 <div class="login-form">
	     			 { message }
					
	        		<form onSubmit={clientLogin}>
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
			                <Link href="#" variant="body2" style={{color:"black"}}>
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
     			<Link to="/client/register">
     			 <button class="btn btn-dark" type="submit">Créer un compte sur DzMarket</button>
     			</Link> 
     		</div>
   
     </div>
     <Footer/>
    </>
       
	)
}

export default Login;
