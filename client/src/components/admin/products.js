import Sidbare from "./sidbare.js";
import Header from "./header.js";
   
function Products(){
    return (
        <div class="products">
            <Sidbare />
            <div class="productsContainer">
                <Header />
                <div>Products</div>
            </div>
        </div>
    )
}

export default Products;