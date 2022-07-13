import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import { useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
axios.defaults.withCredentials = true;

//import { login } from "../actions/auth.actions.js";

function Register(){

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setConfpassword] = useState('');
    const [adress, setAdress] = useState('');
    const [numero, setNumero] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();


    const clientRegister = async (e)=>{
        e.preventDefault();
        try{
          await axios.post("http://localhost:5000/client/register",{
          	nom : nom,
			      prenom : prenom,
          	email : email,
          	password : password,
          	confpassword : confpassword,
			      adress : adress,
			      numero : numero
          });
          history.push("/client/login");
        } catch(error){
          if(error.response){
          	setMessage(error.response.data.message);
          }
        }
    }
	


	return(

     <div class="container connection">
     		<div class="register">
     			<h5 class="title">Créer un compte</h5>
     			 <div class="login-form">

	     			 { message }
					
	        		<form onSubmit={clientRegister}>

		           <Grid container spacing={2}>
	              <Grid item xs={12} sm={6}>
	                <TextField
	        			      margin="normal"
		                  autoComplete="given-name"
		                  name="nom"
		                  required
	                    fullWidth
		                  autoFocus
		                  id="nom"
		                  label="Nom"
		                  autoFocus
						          value={nom}
			                onChange={(e)=>setNom(e.target.value)}
		                />
	              </Grid>
	              <Grid item xs={12} sm={6}>
	                <TextField
		                  margin="normal"
		                  required
		                  fullWidth
		                  id="prenom"
		                  label="Prenom"
		                  name="prenom"
		                  autoComplete="family-name"
						          value={prenom}
			                onChange={(e)=>setPrenom(e.target.value)}
		                />
	              </Grid>
	              <Grid item xs={12}>
	                <TextField
			              margin="normal"
			              required
			              fullWidth
			              id="email"
			              label="Address Email"
			              name="email"
			              autoComplete="email"
			              value={email}
			              onChange={(e)=>setEmail(e.target.value)}
			            />
	              </Grid>
	              <Grid item xs={12} sm={6}>
	                <TextField
			              margin="normal"
			              required
			              fullWidth
			              name="password"
			              label="Mot de pass"
			              type="password"
			              id="password"
			              autoComplete="current-password"
			              value={password}
			              onChange={(e)=>setPassword(e.target.value)}
			            />
	              </Grid>
	              <Grid item xs={12} sm={6}>
	                <TextField
			              margin="normal"
			              required
			              fullWidth
			              name="confpassword"
			              label="Confirm mot de pass"
			              type="password"
			              id="password"
			              autoComplete="current-password"
			              value={confpassword}
			              onChange={(e)=>setConfpassword(e.target.value)}
			            />
	              </Grid>
	              <Grid item xs={12}>
	                <TextField
	        			      margin="normal"
		                  autoComplete="given-name"
		                  name="adress"
		                  required
		                  fullWidth
		                  id="adress"
		                  label="Adress"
						          value={adress}
			                onChange={(e)=>setAdress(e.target.value)}
		                />
	              </Grid>
	              <Grid item xs={12}>
	                <TextField
		                  margin="normal"
		                  required
		                  fullWidth
		                  id="numero"
		                  label="Numero de telephone"
		                  name="numero"
		                  autoComplete="family-name"
						          value={numero}
			                onChange={(e)=>setNumero(e.target.value)}
		                />
	              </Grid>
	              <Grid item xs={12}>
	                <FormControlLabel
	                  control={<Checkbox required value="allowExtraEmails" color="default" />}
	                  label="J'ai lu et j'accepte les Conditions générales de vente
                         et la Notification sur la Confidentialité et les Cookies de DzMarket."
	                />
                </Grid>
	              <Grid item xs={12}>
	                <button type="submit" class="btn btn-dark">créer un compte</button>
	              </Grid>
	            </Grid>
  
	        	</form>
	        </div>
     		</div>
   
     </div>































     


		)
}

export default Register;
