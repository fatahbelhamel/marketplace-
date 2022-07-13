import { useState } from "react";
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
		  history.push("/dashboard");
        } catch(error){
          if(error.response){
			setMessage(error.response.data.message);
          }
        }
    }


	return(
      <div class="compte-vendor container"> 	
			  <div class="box">
        		<h2>DzMarket</h2>
					 
				 <div class="alert alert-danger">{message}</div>
        		
        		<form onSubmit={adminLogin}>
        			<TextField
		              margin="normal"
		              required
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
		            <FormControlLabel
		              control={<Checkbox value="remember" color="primary" />}
		              label="Souviens-toi de moi"
		            />
		            <Button
		              type="submit"
		              fullWidth
		              variant="contained"
		              sx={{ mt: 3, mb: 2 }}
		            >
		              Login
		            </Button>
		            
        		</form>
        	</div>
		</div>

		)
}

export default AdminLogin;