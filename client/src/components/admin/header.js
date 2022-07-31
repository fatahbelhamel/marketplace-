import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CategoryIcon from '@mui/icons-material/Category';

function Header (){
    return(
        <div class="navbar">
            <div class="wrapper">
                <div class="search">
                    <input type="text" placeholder="rechercher......."/>
                    <button type="submit" class="btn btn-sm">recherche</button>
                </div>
                <div class="items">
                    <div class="item">
                       <DashboardIcon/>
                    </div>
                    <div class="item">
                       <ListAltIcon/>
                    </div>
                    <div class="item">
                       <img class="avatar" src="/images/user-pngrepo-com.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;