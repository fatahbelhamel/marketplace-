import Sidbare from "./../components/sidbare.js";
import Header from "./../components/header.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

axios.defaults.withCredentials = true;

   
function Products(){

  const [products, setProducts] = useState('');
  const [message, setMessage] = useState('');
  const [laoding, setLaoding] = useState(false);


  const getProducts = async()=>{
    try{
      setLaoding(true);
      const response = await axios.get("http://localhost:5000/admin/products");
      setProducts(response.data.products);
      setLaoding(false);

    }catch(error){
      if(error.response){

      }
    }
  }

  useEffect(()=>{ getProducts(); },[]);

 
  const validProduct = async(productId)=>{
    try{
      setLaoding(true);
      await axios.put(`http://localhost:5000/admin/validProduct/${productId}`);
      setLaoding(false);
    }catch(error){
      if(error.response){

      }
    }
  }



const imagePath = "/images/";


    return (
        <div class="products">
            <Sidbare />
            <div class="productsContainer">
                <Header />
                <div class="titl">Produits</div>
                { laoding ? 
                  <div class="d-flex justify-content-center" style={{marginTop:"100px"}}>
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  :
                <div class="table">
                   <TableContainer component={Paper} class="table">
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">id</TableCell>
                            <TableCell align="center">image</TableCell>
                            <TableCell align="center">name</TableCell>
                            <TableCell align="center">categorie</TableCell>
                            <TableCell align="center">marque</TableCell>
                            <TableCell align="center">prix</TableCell>
                            <TableCell align="center">quantités</TableCell>
                            <TableCell align="center">status</TableCell>
                            <TableCell align="center">action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Object.values(products).map((product, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                              <TableCell align="center">{product.id}</TableCell>
                              <TableCell align="center"><img class="product_img" src={imagePath + product.Img_prod} /></TableCell>
                              <TableCell align="center">{product.Nom_prod}</TableCell>
                              <TableCell align="center">{product.Cat_prod}</TableCell>
                              <TableCell align="center">{product.Marq_prod}</TableCell>
                              <TableCell align="center">{product.Prix}</TableCell>
                              <TableCell align="center">{product.Quant_prod}</TableCell>
                              <TableCell align="center">{product.Stat_prod}</TableCell>
                              <TableCell align="center">
                                 <div class="btns">
                                   <div class="btn-update">
                                      <VisibilityIcon/>
                                   </div>
                                   <div class="btn-delete">
                                      <DeleteIcon/>
                                   </div> 
                                   <div class="btn-delete">
                                       {product.Stat_prod==="en attend" ? <button class="btn btn-outline-dark" onClick={()=>validProduct(product.id)}>valider</button> : ""} 
                                   </div> 
                                 </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                </div>
              }
              
            </div>
        </div>
    )
}

export default Products;