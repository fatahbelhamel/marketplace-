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
             <div class="featureChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={2}/>
             </div>
             <p class="titl">Total sales made today</p>
             <p class="amount">420$</p>
             <p class="desc">vendre en ligne sur DzMarket en seulement 4 étapes simples</p>
             <div class="summary">
                 <div class="item">
                     <div class="itemTitle">target</div>
                     <KeyboardArrowUpIcon fontSize="small"/>
                     <div class="itemResult">
                         <div class="resultAmount">$12.4k</div>
                     </div>
                 </div>
                 <div class="item">
                     <div class="itemTitle">target</div>
                     <KeyboardArrowUpIcon fontSize="small"/>
                     <div class="itemResult">
                         <div class="resultAmount">$12.4k</div>
                     </div>
                 </div>
                 <div class="item">
                     <div class="itemTitle">target</div>
                     <KeyboardArrowUpIcon fontSize="small"/>
                     <div class="itemResult">
                         <div class="resultAmount">$12.4k</div>
                     </div>
                 </div>
             </div>
         </div>
      </div>
    )
}

export default Feature;