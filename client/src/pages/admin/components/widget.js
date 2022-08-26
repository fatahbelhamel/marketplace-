import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

axios.defaults.withCredentials = true;

function Widget ({type}){

    const [clientCount, setClientCount] = useState("");
    const [vendorCount, setVendorCount] = useState("");
    const [productCount, setProductCount] = useState("");
    const [commandeCount, setCommandeCount] = useState("");

    const getClientCount = async()=>{
        try{
            const response = await axios.get("http://localhost:5000/admin/clientCount");
            setClientCount(response.data.count);
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
    getClientCount();

    const getVendorCount = async()=>{
        try{
            const response = await axios.get("http://localhost:5000/admin/vendorCount");
            setVendorCount(response.data.count);
        }catch(error){
            console.log(error);
        }
    }
    getVendorCount();

    const getProductCount = async()=>{
        try{
            const response = await axios.get("http://localhost:5000/admin/productCount");
            setProductCount(response.data.count);
        }catch(error){
            console.log(error);
        }
    }
    getProductCount();

    const getCommandeCount = async()=>{
        try{
            const response = await axios.get("http://localhost:5000/admin/commandeCount");
            setCommandeCount(response.data.count);
        }catch(error){
            console.log(error);
        }
    }
    getCommandeCount();

    let data;

    switch(type){
        case "clients":
          data = {
            title: "clients",
            isMoney: false,
            counter: clientCount,
            linke: "voir toutes les clients",
            icon: <PersonOutlinedIcon />
          };
        break;
        case "vendeurs":
          data = {
            title: "vendeurs",
            isMoney: false,
            counter: vendorCount,
            linke: "voir toutes les vendeurs",
            icon: <PersonOutlinedIcon />
          };
        break;
        case "produits":
          data = {
            title: "produits",
            isMoney: false,
            counter: productCount,
            linke: "voir toutes les produits",
            icon: <PersonOutlinedIcon />
          };
        break;
        case "commandes":
          data = {
            title: "commandes",
            isMoney: false,
            counter: commandeCount,
            linke: "voir toutes les commandes",
            icon: <PersonOutlinedIcon />
          };
        break;  
    }
    const path = "/admin/";
    return(
        <div class="widget">
           <div class="left">
               <span class="titl">{data.title}</span>
               <span class="counter">{data.counter}</span>
               <span class="link"><Link to={path + data.title}>{data.linke}</Link></span>
           </div>
           <div class="right">
               <div class="percentage positive">
                   <KeyboardArrowUpIcon/>
                   20%
               </div>
               <div class="icone">
                   {data.icon}
               </div>
           </div>
        </div>
    )
}

export default Widget;