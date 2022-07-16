import { useState, setState } from "react";
import axios from "axios";
import { useHistory, useParams, useEffect } from "react-router-dom";
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

function UpdateProduct(){


    const [nom, setNom] = useState('');
    const [nom_produit, setNom_produit] = useState('');
    const [description,setDescription] = useState('');
    const [categorie, setCategorie] = useState('');
    const [marque, setMarque] = useState('');
    const [prix, setPrix] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();
    const { id } = useParams();
  
   axios.get(`http://localhost:5000/vendor/product/${id}`).then(response=>{
       const product = response.data.product;
       //setNom_produit(product.nom_produit);
       //setDescription(product.description);
       //setCategorie(product.categorie);
       //setMarque(product.marque);
       //setPrix(product.prix);
       //setImage(product.image);
      });  

    


    const updateProduct = async (e)=>{
        e.preventDefault();
        try{
          await axios.put(`http://localhost:5000/vendor/product/${id}`,{
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


    updateProduct();
    





  return (
          <div class="espace-vendor">
          <div class="row">
            <div class="col-3">
          <Sidbare/>
            </div>
            <div class="col-9">
          <h3>Modifier un produit</h3>
          {message}
          <div class="add-product">
             <form onSubmit={updateProduct}>

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
              value={description || ""}
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
                value={categorie || ""}
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
                    value={marque || ""}
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
                    value={prix || ""}
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
                  <button type="submit" class="btn btn-dark">Modifier</button>
                </Grid>
              </Grid>
  
            </form>
          </div>
      </div>
          </div> 
         </div>  
    )
}

export default UpdateProduct;