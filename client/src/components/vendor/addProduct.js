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
import Input from '@mui/material/Input';
import Sidbare from "./sidbare";
axios.defaults.withCredentials = true;

function AddProduct(){


    const [nom, setNom] = useState('');
    const [nom_produit, setNom_produit] = useState('');
    const [description,setDescription] = useState('');
    const [categorie, setCategorie] = useState('');
    const [marque, setMarque] = useState('');
    const [prix, setPrix] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();


    const addProduct = async (e)=>{
        e.preventDefault();
        try{
          await axios.post("http://localhost:5000/vendor/create-product",{
          	nom_produit : nom_produit,
            description : description,
            categorie : categorie,
            marque : marque,
            prix : prix,
            image : image,
          });
          history.push("/vendor/productVendor");
        } catch(error){
          if(error.response){
          	setMessage(error.response.data.message);
          }
          console.log(error);
        }
    }


    addProduct();
    





	return (
          <div class="espace-vendor">
          <div class="row">
            <div class="col-3">
			    <Sidbare/>
            </div>
            <div class="col-9">
			    <h3>Ajouter un produit</h3>
			    {message}
			    <div class="add-product">
             <form onSubmit={addProduct}>

		           <Grid container spacing={2}>
	               <Grid item xs={12}>
	                <TextField
	        			margin="normal"
		                autoComplete="given-name"
		                name="nom_produit"
		                required
	                    fullWidth
		                autoFocus
		                id="nom_produit"
		                label="Nom de produit"
						value={nom_produit}
			            onChange={(e)=>setNom_produit(e.target.value)}
		                />
	              </Grid>
	              <Grid item xs={12} >
	                <TextField
		                  margin="normal"
		                  required
		                  fullWidth
		                  id="description"
		                  label="Description"
		                  name="description"
						  value={description}
			              onChange={(e)=>setDescription(e.target.value)}
		                />
	              </Grid>
	              <Grid item xs={12}>
	               <TextField
        			      margin="normal"
	                      autoComplete="given-name"
	                      name="categorie"
	                      required
	                      fullWidth
	                      id="categorie"
	                      label="Categorie"
					      value={categorie}
		                  onChange={(e)=>setCategorie(e.target.value)}
	                />
	              </Grid>
	              <Grid item xs={12}>
	                <TextField
			              margin="normal"
			              required
			              fullWidth
			              id="marque"
			              label="Marque"
			              name="marque"
			              autoComplete="marque"
			              value={marque}
			              onChange={(e)=>setMarque(e.target.value)}
			            />
	              </Grid>
	              <Grid item xs={12}>
	                <TextField
			              margin="normal"
			              required
			              fullWidth
			              name="prix"
			              label="Prix"
			              type="prix"
			              id="prix"
			              value={prix}
			              onChange={(e)=>setPrix(e.target.value)}
			            />
	              </Grid>
	              <Grid item xs={12}>
	                <Input accept="image/*" id="contained-button-file" multiple type="file" value={image} onChange={(e)=>setImage(e.target.value)} />
							  <Button variant="contained" component="span">
							    image
							  </Button>
							  </Grid>
	              <Grid item xs={12}>
	                <button type="submit" class="btn btn-dark">Ajouter</button>
	              </Grid>
	            </Grid>
  
	        	</form>
			    </div>
			</div>
          </div> 
         </div>  
		)
}

export default AddProduct;