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

   
function Commandes(){

  const [commandes, setCommandes] = useState('');
  const [message, setMessage] = useState('');
  const [laoding, setLaoding] = useState(false);

  const getCommandes = async()=>{
    try{
      setLaoding(true);
      const response = await axios.get("http://localhost:5000/admin/commandes");
      setCommandes(response.data.commandes);
      setLaoding(false);

    }catch(error){
      if(error.response){

      }
    }
  }
  useEffect(()=>{ getCommandes(); },[]);
  

  const validCommande = async(productId)=>{
    try{
      setLaoding(true);
      await axios.put(`http://localhost:5000/admin/validCommande/${productId}`);
      setLaoding(false);
    }catch(error){
      if(error.response){

      }
    }
  }

const imagePath = "/images/";
const commandePath = "/admin/commande/";

    return (
        <div class="categories">
            <Sidbare />
            <div class="categoriesContainer">
                <Header />
                <div class="titl">Commandes</div>
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
                            <TableCell align="center">email</TableCell>
                            <TableCell align="center">produit</TableCell>
                            <TableCell align="center">prix</TableCell>
                            <TableCell align="center">quantités</TableCell>
                            <TableCell align="center">status</TableCell>
                            <TableCell align="center">action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Object.values(commandes).map((commande, index) => (
                            <TableRow key={index}>
                              <TableCell align="center">{commande.id}</TableCell>
                              <TableCell align="center">{commande.Email_clt}</TableCell>
                              <TableCell align="center"><img class="categorie_img" src={imagePath + commande.Img_prod} /> {commande.Nom_prod} </TableCell>
                              <TableCell align="center">${commande.Prix}</TableCell>
                              <TableCell align="center">{commande.Quantités}</TableCell>
                              <TableCell align="center">{commande.Stat_cmds}</TableCell>
                              <TableCell align="center">
                                 <div class="btns">
                                   <div class="btn-update" >
                                      <Link to={commandePath + commande.id} style={{color:"orange"}}><VisibilityIcon/></Link>
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
              }
            </div>
        </div>
    )
}

export default Commandes;