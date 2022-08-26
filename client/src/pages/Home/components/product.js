
function Products(){
 
  



	return(
  <>
        <div class="product">
         <div class="product-img">
           <img src={props.image}/>
         </div>
          <div class="product-content">
            <h5 class="categorie-name">{props.name}</h5>
            <div class="btns">
              <i class="fa-solid fa-cart-shopping"><span>Ajout au kart</span></i>
              <i class="fas fa-heart"><span>Ajout au kart</span></i>
              <i class="fa-solid fa-eye"><span>Ajout au kart</span></i>
            </div>
            <hr/>
            <p>{props.description}</p>
            <p class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </p>
            <p class="offre-price">${props.price}</p>
          </div>
        </div>

  </>    
		)
}
export default Products;