import Navbar from "./../components/navbar.js";
import Footer from "./../components/footer.js";
import Sidbare from "./../components/sidbare.js";
import { Link, useHistory } from "react-router-dom";
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

   
function CommandeVendor(){

  const [commandes, setCommandes] = useState('');
  const [message, setMessage] = useState('');
  const [laoding, setLaoding] = useState(false);
  const history = useHistory();

  const getCommandes = async()=>{
    try{
      setLaoding(true);
      const response = await axios.get("http://localhost:5000/vendor/commandes");
      setCommandes(response.data.commandes);
      setLaoding(false);
    }catch(error){
      if(error.response){

      }
    }
  }
  useEffect(()=>{ getCommandes(); },[]);
  

  const validCommande = async(commandeId)=>{
    try{
      setLaoding(true);
      await axios.put(`http://localhost:5000/vendor/validCommande/${commandeId}`);
      history.push("/vendor/commandeVendor");
      setLaoding(false);
    }catch(error){
      if(error.response){

      }
    }
  }

  const deleteCommande = async(commandeId)=>{
    try{
      setLaoding(true);
      await axios.post(`http://localhost:5000/vendor/deleteCommande/${commandeId}`);
      history.push("/vendor/commandeVendor");
      setLaoding(false);
    }catch(error){
      if(error.response){

      }
    }
  }

const imagePath = "/images/";
const commandePath = "/admin/commande/";

    return (
        <>
        <Navbar/>
        <div class="espace-vendor">
              <div class="row">
                <div class="col-3">
                  <Sidbare/>
                </div>
                <div class="col-9">
                  <h3>Les commandes</h3>
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
                              <TableCell align="center">{commande.Email_clt}</TableCell>
                              <TableCell align="center"><img class="categorie_img" style={{width:"80px",height:"80px"}} src={imagePath + commande.Img_prod} /> {commande.Nom_prod} </TableCell>
                              <TableCell align="center">${commande.Prix}</TableCell>
                              <TableCell align="center">{commande.Quantités}</TableCell>
                              <TableCell align="center">{commande.Stat_cmds}</TableCell>
                              <TableCell align="center">
                                 <div class="btns">
                                   <div class="btn-update" >
                                      <Link to={commandePath + commande.id} style={{color:"orange"}}><VisibilityIcon/></Link>
                                   </div>
                                   <div class="btn-delete">
                                      <Link to="#" style={{color:"orange"}} onClick={()=>deleteCommande(commande.id)}><DeleteIcon/></Link>
                                   </div>   
                                   <div class="btn-delete">
                                       {commande.Stat_cmds==="en attend" ? <button class="btn btn-outline-dark btn-sm" onClick={()=>validCommande(commande.id)}>valider</button> : ""} 
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
      </div>
      <Footer/>
      </>  
    )
}

export default CommandeVendor;





  