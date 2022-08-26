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

   
function Vendeurs(){

  const [vendeurs, setVendeurs] = useState('');
  const [message, setMessage] = useState('');
  const [laoding, setLaoding] = useState(false);

  const getVendors = async()=>{
    try{
      setLaoding(true);
      const response = await axios.get("http://localhost:5000/admin/getVendors");
      setVendeurs(response.data.vendors);
      setLaoding(false);

    }catch(error){
      if(error.response){

      }
    }
  }

  useEffect(()=>{ getVendors(); },[]);

const imagePath = "/images/";


    return (
        <div class="vendeurs">
            <Sidbare />
            <div class="vendeursContainer">
                <Header />
                <div class="titl">Vendeurs</div>
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
                            <TableCell align="center">nom</TableCell>
                            <TableCell align="center">prenom</TableCell>
                            <TableCell align="center">nom_boutique</TableCell>
                            <TableCell align="center">email</TableCell>
                            <TableCell align="center">adress</TableCell>
                            <TableCell align="center">numéro</TableCell>
                            <TableCell align="center">action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Object.values(vendeurs).map((vendeur, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                              <TableCell align="center">{vendeur.id}</TableCell>
                              <TableCell align="center"><img class="vendeur_img" src={imagePath + vendeur.Img_vend} /></TableCell>
                              <TableCell align="center">{vendeur.Nom_vend}</TableCell>
                              <TableCell align="center">{vendeur.Prenom_vend}</TableCell>
                              <TableCell align="center">{vendeur.Nom_boutique}</TableCell>
                              <TableCell align="center">{vendeur.Email_vend}</TableCell>
                              <TableCell align="center">{vendeur.Adress_vend}</TableCell>
                              <TableCell align="center">{vendeur.Num_tel_vend}</TableCell>
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
               }
            </div>
        </div>
    )
}

export default Vendeurs;