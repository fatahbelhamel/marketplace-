import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Sidbare from "./sidbare.js";
import Header from "./header.js";
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

   
function Categories(){

  const [categories, setCategories] = useState('');
  const [message, setMessage] = useState('');

  const getCategories = async()=>{
    try{
      const response = await axios.get("http://localhost:5000/admin/categories");
      setCategories(response.data.categories);
      console.log(response.data);

    }catch(error){
      if(error.response){
        console.log(error.response.data);
      }
      console.log(error);
    }
  }

  getCategories();

const imagePath = "/images/";


    return (
        <div class="categories">
            <Sidbare />
            <div class="categoriesContainer">
                <Header />
                <div class="titl">Categories</div>
                <div class="table">
                   <TableContainer component={Paper} class="table">
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">categorie_id</TableCell>
                            <TableCell align="center">categorie_image</TableCell>
                            <TableCell align="center">categorie_name</TableCell>
                            <TableCell align="center">action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Object.values(categories).map((categorie, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                              <TableCell align="center">{categorie.id}</TableCell>
                              <TableCell align="center"><img class="categorie_img" src={imagePath + categorie.Img_cat} /></TableCell>
                              <TableCell align="center">{categorie.Nom_cat}</TableCell>
                              <TableCell align="center">
                                 <div class="btns">
                                   <div class="btn-update">
                                      <VisibilityIcon/>
                                   </div>
                                   <div class="btn-delete">
                                      <DeleteIcon/>
                                   </div>      
                                 </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                </div>
                <Link to="/admin/add_categorie" class="btn btn-dark add-btn">ajouter une categorie</Link>
            </div>
        </div>
    )
}

export default Categories;