import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
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
             <div class="featureChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={2} styles={buildStyles({ pathColor:"orange", textColor:"orange"})}  />
             </div>
             <p class="titl">les ventes totales</p>
             <p class="amount">$420</p>
             <p class="desc"></p>
             
         </div>
      </div>
    )
}

export default Feature;