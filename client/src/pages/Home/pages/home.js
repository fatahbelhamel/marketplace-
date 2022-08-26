import Navbar from "./../components/navbar.js";
import Footer from "./../components/footer.js";
import Carousel from "./../components/carousel.js";
import Annonce from "./../components/annonce.js";
import Service from "./../components/services.js";
import Categories from "./../components/categorie.js";
import Banner from "./../components/banner.js";
import Offres from "./../components/offre.js";
import Articles from "./../components/article.js";

function Home() {

	return(
		<>
		<Navbar/>
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
        <Footer/>
        </>
		)
}

export default Home;