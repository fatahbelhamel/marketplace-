import * as React from 'react';
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
   
function Tabl(){

  const [commandes, setCommandes] = useState('');
  const [message, setMessage] = useState('');

  const getCommandes = async()=>{
    try{
      const response = await axios.get("http://localhost:5000/admin/commandes");
      setCommandes(response.data.commandes);

    }catch(error){
      if(error.response){

      }
    }
  }
  useEffect(()=>{ getCommandes(); },[]);

  const imagePath = "/images/";

    return (
        
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
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Object.values(commandes).map((commande, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                              <TableCell align="center">{commande.id}</TableCell>
                              <TableCell align="center">{commande.Email_clt}</TableCell>
                              <TableCell align="center"><img class="categorie_img" style={{width:"50px",height:"50px"}} src={imagePath + commande.Img_prod} /> {commande.Nom_prod} </TableCell>
                              <TableCell align="center">${commande.Prix}</TableCell>
                              <TableCell align="center">{commande.Quantités}</TableCell>
                              <TableCell align="center">{commande.Stat_cmds}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
  )

}

export default Tabl;