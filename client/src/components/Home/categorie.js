function Categories(props){
	return(
  <>
     <h4 class="categorie-title">Principales catégories de ce mois</h4>
     <div class="categories container"> 
        <div class="categorie">
          <img src="/images/tv-audio.png"/>
          <h5 class="categorie-name">TV, Audio et Video</h5>
        </div>
        <div class="categorie">
          <img src="/images/phone.png"/>
          <h5 class="categorie-name">Téléphonie</h5>
        </div>
        <div class="categorie">
          <img src="/images/electromenagie.png"/>
          <h5 class="categorie-name">Electroménagies</h5>
        </div>
        <div class="categorie">
          <img src="/images/Informatique.jpg"/>
          <h5 class="categorie-name">Informatique</h5>
        </div>
        <div class="categorie">
          <img src="/images/Mai-son.png"/>
          <h5 class="categorie-name">Maison & Déco</h5>
        </div>
      </div>
  </>    
		)
}
export default Categories;