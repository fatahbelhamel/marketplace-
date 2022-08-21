import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
   
function Feature(){
    return (
      <div class="feature">
         <div class="top">
             <h2 class="titl">Total revenu</h2>
             <MoreVertIcon fontSize="small"/>
         </div>
         <div class="bottom">
             <div class="featureChart" style={{color:"red"}}>
                <CircularProgressbar value={70} text={"70%"} color={"red"} strokeWidth={2}/>
             </div>
             <p class="titl">les ventes totales</p>
             <p class="amount">$420</p>
             <p class="desc">vendre en ligne sur DzMarket en seulement 4 étapes simples</p>
             
         </div>
      </div>
    )
}

export default Feature;