import Sidbare from "./sidbare.js";
import Header from "./header.js";
   
function Clients(){
    return (
        <div class="clients">
            <Sidbare />
            <div class="clientsContainer">
                <Header />
                <div>Clients</div>
            </div>
        </div>
    )
}

export default Clients;