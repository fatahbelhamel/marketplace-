import { Link } from "react-router-dom";

function Sidbare (){
    return(
        <nav class="container">
        <div class="sidebare">
            <ul class="nav flex-column">
            <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/vendor/compteVendor">
                <span data-feather="home"></span>
                Mon compte
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/vendor/commandeVendor">
                <span data-feather="file"></span>
                Les commandes
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/vendor/productVendor">
                <span data-feather="shopping-cart"></span>
                Les produits
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/vendor/adProduct">
                <span data-feather="shopping-cart"></span>
                Ajouter un produit
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">
                <span data-feather="users"></span>
                Les clients
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">
                <span data-feather="bar-chart-2"></span>
                Boite de message
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">
                <span data-feather="bar-chart-2"></span>
                Mon crédit
                </Link>
            </li>
            <li class="nav-item">
                <hr/>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">
                <span data-feather="layers"></span>
                Informations personnels
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">
                <span data-feather="layers"></span>
                Déconnecter
                </Link>
            </li>
            </ul>

        </div>
        </nav>
    )
}

export default Sidbare;