import Sidbare from "./sidbare.js";
import Header from "./header.js";
   
function Categories(){
    return (
        <div class="categories">
            <Sidbare />
            <div class="categoriesContainer">
                <Header />
                <div>Categories</div>
            </div>
        </div>
    )
}

export default Categories;