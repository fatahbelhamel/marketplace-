import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

function Widget ({type}){

    let data;

    switch(type){
        case "clients":
          data = {
            title: "clients",
            isMoney: false,
            counter: 100,
            linke: "voir toutes les clients",
            icon: <PersonOutlinedIcon />
          };
        break;
        case "vendeurs":
          data = {
            title: "vendeurs",
            isMoney: false,
            counter: 100,
            linke: "voir toutes les vendeurs",
            icon: <PersonOutlinedIcon />
          };
        break;
        case "produits":
          data = {
            title: "produits",
            isMoney: false,
            counter: 100,
            linke: "voir toutes les produits",
            icon: <PersonOutlinedIcon />
          };
        break;
        case "commandes":
          data = {
            title: "commandes",
            isMoney: false,
            counter: 100,
            linke: "voir toutes les commandes",
            icon: <PersonOutlinedIcon />
          };
        break;  
    }

    return(
        <div class="widget">
           <div class="left">
               <span class="titl">{data.title}</span>
               <span class="counter">{data.counter}</span>
               <span class="link">{data.linke}</span>
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