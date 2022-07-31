import Sidbare from "./sidbare.js";
import Header from "./header.js";
   
function Commandes(){
    return (
        <div class="commandes">
            <Sidbare />
            <div class="commandesContainer">
                <Header />
                <div>Commandes</div>
            </div>
        </div>
    )
}

export default Commandes;