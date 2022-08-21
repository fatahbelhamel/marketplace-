import * as React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidbare from "./sidbare.js";
import Header from "./header.js";
import SellIcon from '@mui/icons-material/Sell';

function Commande(){

  const [commande, setCommande] = useState('');
  const [message, setMessage] = useState('');
  const { id } = useParams();

  const getCommandes = async()=>{
    try{
      const response = await axios.get(`http://localhost:5000/admin/commande/${id}`);
      setCommande(response.data.commande);

    }catch(error){
      if(error.response){

      }
    }
  }
  useEffect(()=>{ getCommandes(); },[]);


  const imagePath = "/images/";

	return(
         <div class="commande">
            <Sidbare />
            <div class="commandeContainer">
                <Header />
                <div class="titl">Commande</div>
                <div class="commande_header">
                   <div class="commande_date">
                     <p class="date">{commande.createdAt}</p>
                     <p class="commande_id">Jedi 25 jan 2022 3.20pm</p>
                   </div>
                </div>
                <div class="commande_body">
                   <div class="commande_info">
                      <div class="item">
                         <div class="icon">
                           <SellIcon />
                         </div>
                         <div class="client_info">
                           <p class="client_name">{commande.Nom_clt}</p>
                           <p class="client_email">{commande.Email_clt}</p>
                         </div>
                      </div>
                      <div class="item">
                         <div class="icon">
                           <SellIcon />
                         </div>
                         <div class="shipping_info">
                           <p class="shipping">shipping : {commande.Pays}</p>
                           <p class="meth_paie">method paiement : {commande.Paie_meth}</p>
                         </div>
                      </div>
                      <div class="item">
                         <div class="icon">
                           <SellIcon />
                         </div>
                         <div class="address_info">
                           <p class="address">Adresse: {commande.Adress_clt}</p>
                         </div>
                      </div>
                   </div>
                    <div class="commande_item">
                      <TableContainer>
                      <Table >
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">produit</TableCell>
                            <TableCell align="left">prix</TableCell>
                            <TableCell align="left">quantités</TableCell>
                            <TableCell align="left">total</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>                       
                            <TableRow >
                              <TableCell align="left"><img class="categorie_img" style={{width:"50px",height:"50px"}} src={imagePath + commande.Img_prod} /> {commande.Nom_prod} </TableCell>
                              <TableCell align="left">${commande.Prix}</TableCell>
                              <TableCell align="left">{commande.Quantités}</TableCell>
                              <TableCell align="left">${commande.Prix * commande.Quantités}</TableCell>
                            </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                   </div>
                </div>
            </div>
        </div>     
		)
}

export default Commande;