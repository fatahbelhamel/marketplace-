import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';



function AdminLogin(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

	const adminLogin = async (e)=>{
        e.preventDefault();
        try{
          await axios.post("http://localhost:5000/admin/login",{
          	email : email,
          	password : password
          });
		      history.push("/admin/dashboard");
        } catch(error){
          if(error.response){
			setMessage(error.response.data.message);
          }
        }
    }


	return(
      <div class="container connection" style={{width:'500px' ,margin:'100px auto'}} >
     		<div class="login">
     			<h5 class="title">Se connecter</h5><i class="fa-solid fa-bars"></i>
     			 <div class="login-form">
	     			 { message }
					
	        		<form onSubmit={adminLogin}>
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
	        		</form>
	        	</div>
     		</div>
   
     </div>

		)
}

export default AdminLogin;