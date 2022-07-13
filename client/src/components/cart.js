function Cart(){
	return(
       <div class="cart container">
          <h1 style={{textAlign:"center"}}>Panier</h1>
          <div>
          	<table class="table">
			  <thead class="table-light">
			    <th style={{textAlign:"center"}}>Produit</th>
			    <th>Price</th>
			    <th>Quantité</th>
			    <th>Total</th>
			    <th></th>
			  </thead>
			  <tbody>
			    <tr>
				   <td>
				   	<div class="produit">
				   		<img src="/images/tv.jpg"/>
				   		<div class="produit-info">
				   			<h5>Neque porro quis</h5>
	                        <p>Vendu par : <span>brand store</span></p>
	                    </div>
				   	</div>
				   </td>
				   <td>$200.00</td>
				   <td>
                      <div class="quantite">
                           <span>-</span><span class="number">1</span><span>+</span>
                      </div>
				   </td>
				   <td>$2.500.00</td>
				   <td>
				  
				   </td>
				</tr>
				
			  </tbody>
			</table>
          </div>
       </div>
		)
}

export default Cart;