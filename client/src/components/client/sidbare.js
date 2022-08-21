import { Link } from "react-router-dom";

function Sidbare (){

    return(
        <nav class="container">
        <div class="sidebare">
            <ul class="nav flex-column">
            <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/client/compteClient">
                <span data-feather="home"></span>
                Mon compte
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/client/commandeClient" >
                <span data-feather="file"></span>
                Mes commandes
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">
                <span data-feather="users"></span>
                Boite de message
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">
                <span data-feather="shopping-cart"></span>
                Mon list d'envie
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">
                <span data-feather="shopping-cart"></span>
                Mon panier
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
                Adress de livraison
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">
                <span data-feather="layers"></span>
                Modifier le mote de pass
                </Link>
            </li>
            </ul>

        </div>
        </nav>
    )
}

export default Sidbare;