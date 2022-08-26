import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CategoryIcon from '@mui/icons-material/Category';
import SellIcon from '@mui/icons-material/Sell';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';

function Sidbare (){
    return(
        <div class="sidebar">
            <div class="top">
                <span class="logo"><span>Dz</span>Market</span>
            </div>

            <div class="center">
                <ul>
                    <p class="title">Main</p>
                    <li><Link to="/admin/dashboard"><span class="icone"><DashboardIcon/></span><span>dashboard</span></Link></li>
                    <p class="title">Listes</p>
                    <li><Link to="/admin/commandes"><span class="icone"><ListAltIcon/></span><span>Commandes</span></Link></li>
                    <li><Link to="/admin/categories"><span class="icone"><CategoryIcon/></span><span>Categories</span></Link></li>
                    <li><Link to="/admin/produits"><span class="icone"><InventoryIcon/></span><span>Produits</span></Link></li>
                    <li><Link to="/admin/clients"><span class="icone"><GroupIcon/></span><span>Clients</span></Link></li>
                    <li><Link to="/admin/vendeurs"><span class="icone"><SellIcon/></span><span>Vendeurs</span></Link></li>
                    <p class="title">Utile</p>
                    <li><span>Status</span></li>
                    <li><span>Notifications</span></li>
                    <p class="title">Service</p>
                    <li><span>Logs</span></li>
                    <li><span>paramétres</span></li>
                    <p class="title">Admin</p>
                    <li><span>profile</span></li>
                    <li><span>Déconnecter</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidbare;