import { Link } from "react-router-dom";

function Product(props){
	return(
             <div class="product-card" style={{width:"250px",background:"white !important"}}>
                  <div class="product-tumb">
                    <img src={props.image} alt=""/>
                  </div>
                  <div class="product-details">
                    <span class="product-catagory">{props.categorie}</span>
                    <h4><Link to="/product">{props.nom_poduit}</Link></h4>
                    <p>{props.description}</p>
                    <div class="product-bottom-details">
                      <div class="product-price">${props.prix}</div>
                      <div class="product-links">
                        <a href=""><i class="fa fa-heart"></i></a>
                        <a href=""><i class="fa fa-shopping-cart"></i></a>
                      </div>
                    </div>
                  </div>
                </div> 
		)
}
export default Product;