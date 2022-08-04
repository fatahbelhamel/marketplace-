import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CategoryIcon from '@mui/icons-material/Category';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';

function Header (){
    return(
        <div class="navbar">
            <div class="wrapper">
                <div class="search">
                    <input type="text" placeholder="rechercher......."/>
                    <SearchIcon/>
                </div>
                <div class="items">
                    <div class="item">
                       <NotificationsActiveIcon/>
                    </div>
                    <div class="item">
                       <MessageIcon/>
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