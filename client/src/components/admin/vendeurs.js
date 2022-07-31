import Sidbare from "./sidbare.js";
import Header from "./header.js";
   
function Vendeurs(){
    return (
        <div class="vendeurs">
            <Sidbare />
            <div class="vendeursContainer">
                <Header />
                <div>Vendeurs</div>
            </div>
        </div>
    )
}

export default Vendeurs;