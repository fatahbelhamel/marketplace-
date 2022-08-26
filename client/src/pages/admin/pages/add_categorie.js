import Sidbare from "./../components/sidbare.js";
import Header from "./../components/header.js";
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
axios.defaults.withCredentials = true;
   
function Add_categorie(){

    const [nom_categorie, setNom_categorie] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();
    

    const fileOnChange = (e)=>{
        setImage(e.target.files[0]);
        
    }

    console.log(image);
    console.log(nom_categorie);


    const addCategorie = async (e)=>{
        e.preventDefault();
        
        try{

          const form = new FormData();
          form.append('nom_categorie', nom_categorie);
          form.append('Img_cat', image);

          
            await axios.post("http://localhost:5000/category/create",form);


            history.push("/admin/categories");

        } catch(error){
          if(error.response){
            setMessage(error.response.data.message);
          }
          console.log(error);
        }
    }


    addCategorie();
    return (
        <div class="categories">
            <Sidbare />
            <div class="categoriesContainer">
                <Header />
                <div class="titl">Add_categorie</div>
                <div class="add-categorie">
                {message}
                    <form onSubmit={addCategorie}>
                       <Grid container spacing={2}>
                           <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                autoComplete="given-name"
                                name="nom_categorie"
                                required
                                fullWidth
                                autoFocus
                                id="nom_categorie"
                                label="Nom de categorie"
                                value={nom_categorie}
                                onChange={(e)=>setNom_categorie(e.target.value)}
                                />
                          </Grid>
                          <Grid item xs={12}>
                            <Input type="file" name="Img_cat" onChange={fileOnChange} />
                          </Grid>
                          <Grid item xs={12}>
                            <button type="submit" class="btn btn-dark">Ajouter</button>
                          </Grid>
                         </Grid>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add_categorie;