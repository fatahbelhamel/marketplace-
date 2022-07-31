import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

axios.defaults.withCredentials = true;

function Offres(props){

  const [products, setProducts] = useState("");

  const getProducts = async()=>{
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data.products);
    //console.log(response.data.products);
  }
   
  getProducts(); 

  const getProductById = async()=>{
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data.products);
    console.log(response.data.products);
  }
   
  getProductById(); 

  const imagePath = "/images/";
  const path = "/product/"
	return(
  <>
  <h4 class="title">Nouvel Arrivage</h4>
	<div class="articles">
      <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          
          {products ?
              
              Object.values(products).map((product, index)=>{
                return (
                  <SwiperSlide>
                    <div class="product-card" style={{width:"300px",background:"white !important"}} key={index}>
                      <div class="product-tumb">
                        <img src={imagePath + product.image} alt=""/>
                      </div>
                      <div class="product-details">
                        <span class="product-catagory">{product.categorie}</span>
                        <h4><Link to={path + product.id}>{product.nom_produit}</Link></h4>
                        <p>{product.description}</p>
                        <div class="product-bottom-details">
                          <div class="product-price">{product.prix}$</div>
                          <div class="product-links">
                            <Link to=""><i class="fa-solid fa-pen-to-square"></i></Link>
                            <Link to="#" ><i class="fa-solid fa-trash"></i></Link>
                          </div>
                        </div>
                      </div>

                    </div> 
                  </SwiperSlide>  
                  )
              }) : "........"


             }
          
        </Swiper>

    </div>
    
  </>    
		)
}
export default Offres;