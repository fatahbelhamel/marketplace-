import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function Articles(props){
const [products, setProducts] = useState("");

  const getProducts = async()=>{
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data.products);
    //console.log(response.data.products);
  }
   
  getProducts();

  const imagePath = "/images/";
  const path = "/product/";
 
  return(
  <>
  <h4 class="title">Les produits</h4>
   <div class="articles">
     <Swiper
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
                    <div class="product-card" style={{width:"250px",background:"white !important"}} key={index}>
                      <div class="product-tumb">
                        <img src={imagePath + product.Img_prod} alt=""/>
                      </div>
                      <div class="product-details">
                        <span class="product-catagory">{product.Cat_prod}</span>
                        <h4><Link to={path + product.id}>{product.Nom_prod}</Link></h4>
                        
                        <div class="product-bottom-details">
                          <div class="product-price">{product.Prix}$</div>
                          <div class="product-links">
                            <Link to=""><FavoriteIcon/></Link>
                            <Link to="#" ><ShoppingCartIcon/></Link>
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
export default Articles;