import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CategoryIcon from '@mui/icons-material/Category';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';

function Header (){

    const history = useHistory();

    const Logout = async () =>{
         try {
           await axios.post("http://localhost:5000/admin/logout");
           history.push("/admin/login");
         }catch (error) {
            console.error(error);
         }
      }

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
                        <span class="badge">
                                0
                        </span>
                    </div>
                    <div class="item">
                       <MessageIcon/>
                       <span class="badge">
                                0
                        </span>
                    </div>
                    <div class="item admin-profile">             
                         <img class="avatar" src="/images/user-pngrepo-com.png"/>
                         <ul class="menu">
                           <li><Link to="">profile</Link></li>
                           <li><Link  onClick={Logout}>déconnecter</Link></li>
                         </ul>               
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;