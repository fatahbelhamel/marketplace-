import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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



function Articles(){

  const [products, setProducts] = useState("");
  const history = useHistory();
  const imagePath = "/images/";
  const path = "/product/";

  const getProducts = async()=>{
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data.products);
    //console.log(response.data.products);
  }
   
  getProducts();


  const addToCart = async(id)=>{
      try{
         console.log(id);
         await axios.post(`http://localhost:5000/cart/add_product/${id}`);
         history.push('/cart');
      }catch(error){
         console.log(error);
      }
      
   }

 
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
                    <div class="product-card" style={{width:"250px",height:"400px",background:"white !important"}} key={index}>
                      <div class="product-tumb">
                        <img src={imagePath + product.Img_prod} alt=""/>
                      </div>
                      <div class="product-details">
                        <span class="product-catagory">{product.Cat_prod}</span>
                        <h4><Link to={path + product.id}>{product.Nom_prod}</Link></h4>
                        <div class="review" style={{display:"flex"}}>
                           <p style={{display:"flex",color:"orange",fontSize:"10px"}}>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                            </p>
                            <p style={{marginTop:"-7px", marginLeft:"10px"}}>(3 review)</p>
                        </div>
                        <div class="product-bottom-details">
                          <div class="product-price">{product.Prix}$</div>
                          <div class="product-links">
                            <Link to=""><FavoriteIcon/></Link>
                            <Link to="#" onClick={()=>addToCart(product.id)}><ShoppingCartIcon/></Link>
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