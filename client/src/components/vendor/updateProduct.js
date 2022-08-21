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
    const [categories, setCategories] = useState('');
    const [marque, setMarque] = useState('');
    const [prix, setPrix] = useState('');
    const [image, setImage] = useState('');
    const [quantités, setQuantités] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();
    const { id } = useParams();
    
    const [product, setProduct]=useState("");

    const getProductById = async()=>{
      try{
        const response = await axios.get(`http://localhost:5000/product/${id}`); 
        setProduct(response.data.product);
      }catch(error){
        console.log(error);
      }
    }
    getProductById();
    
    const fileOnChange = (e)=>{
        setImage(e.target.files[0]);
    }

    const updateProduct = async (e)=>{
        e.preventDefault();
        try{
          const form = new FormData();
          form.append('nom_produit', nom_produit);
          form.append('description', description);
          form.append('categorie', categorie);
          form.append('marque', marque);
          form.append('prix', prix);
          form.append('image', image);
          form.append('quantity', quantités);

          await axios.put(`http://localhost:5000/vendor/product/${id}`, form);
          history.push("/vendor/productVendor");
        } catch(error){
          if(error.response){
            setMessage(error.response.data.message);
          }
          console.log(error);
        }
    }


    updateProduct();
    

    const getCategories = async()=>{
        try{
          const response = await axios.get("http://localhost:5000/category");
          setCategories(response.data.categories);
          //console.log(response);

        }catch(error){
          console.log(error);
        }
      }

      getCategories();




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
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} autoComplete="on"></textarea>
                </Grid>
                <Grid item xs={12}>
                  <select 
                    class="form-select" 
                    aria-label="Default select example"
                    style={{height:"55px", outline: "none"}}
                    value={categorie}
                    onChange={(e)=>setCategorie(e.target.value)}
                    >
                      <option>select une categorie</option>
                    {
                      Object.values(categories).map((categorie)=>(
                      
                        <option value={categorie.Nom_cat}>{categorie.Nom_cat}</option>
                      
                    ))} 
                  </select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="marque"
                    label="Marque"
                    name="marque"
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
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="quantités"
                    label="Quantités"
                    type="quantités"
                    id="quantités"
                    value={quantités}
                    onChange={(e)=>setQuantités(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input type="file" name="Img_prod" onChange={fileOnChange} />
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