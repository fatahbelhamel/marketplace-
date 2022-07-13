import Carousel from "./carousel.js";
import Annonce from "./Home/annonce.js";
import Service from "./Home/services.js";
import Categories from "./Home/categorie.js";
import Banner from "./Home/banner.js";
import Offres from "./Home/offre.js";
import Articles from "./Home/article.js";
import Data from "./data.js";
function Home() {

	return(
		<div class="container-fluid">
			<div class="row">
				<div class="col-8">
					  <Carousel/>
				</div>
				<div class="col-3">
					<div class="annonces">
						<Annonce/>
					</div>
				</div>
			</div>

			<Service/>

			<Offres />

			<Categories />

			<Banner/>

			<Articles />

        </div> 
		)
}

export default Home;