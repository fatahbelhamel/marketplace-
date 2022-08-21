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

   
function Clients(){

  const [clients, setClients] = useState('');
  const [message, setMessage] = useState('');

  const getClients = async()=>{
    try{
      const response = await axios.get("http://localhost:5000/admin/getClients");
      setClients(response.data.clients);

    }catch(error){
      if(error.response){

      }
    }
  }

  getClients();

const imagePath = "/images/";


    return (
        <div class="clients">
            <Sidbare />
            <div class="clientsContainer">
                <Header />
                <div class="titl">Clients</div>
                <div class="table">
                   <TableContainer component={Paper} class="table">
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">id</TableCell>
                            <TableCell align="center">image</TableCell>
                            <TableCell align="center">nom</TableCell>
                            <TableCell align="center">prenom</TableCell>
                            <TableCell align="center">email</TableCell>
                            <TableCell align="center">adress</TableCell>
                            <TableCell align="center">numéro</TableCell>
                            <TableCell align="center">action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Object.values(clients).map((client, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                              <TableCell align="center">{client.id}</TableCell>
                              <TableCell align="center"><img class="client_img" src={imagePath + client.Img_clt} /></TableCell>
                              <TableCell align="center">{client.Nom_clt}</TableCell>
                              <TableCell align="center">{client.Prenom_clt}</TableCell>
                              <TableCell align="center">{client.Email_clt}</TableCell>
                              <TableCell align="center">{client.Adress_clt}</TableCell>
                              <TableCell align="center">{client.Num_tel_clt}</TableCell>
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
            
            </div>
        </div>
    )
}

export default Clients;