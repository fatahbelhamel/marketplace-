import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Articles(props){
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
          <SwiperSlide>
            <div class="product-card" style={{width:"300px",background:"white !important"}}>
              <div class="badge">Hot</div>
              <div class="product-tumb">
                <img src="/images/phone.webp" alt=""/>
              </div>
              <div class="product-details">
                <span class="product-catagory">Women,bag</span>
                <h4><Link to="/product">Neque porro quis</Link></h4>
                <p>Google – Nest Hub Max With Google Assistant</p>
                <div class="product-bottom-details">
                  <div class="product-price"><small>$96.00</small>$200.00</div>
                  <div class="product-links">
                    <a href=""><i class="fa fa-heart"></i></a>
                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="product-card" style={{width:"300px",background:"white !important"}}>
              <div class="badge">Hot</div>
              <div class="product-tumb">
                <img src="/images/watch.webp" alt=""/>
              </div>
              <div class="product-details">
                <span class="product-catagory">Women,bag</span>
                <h4><Link to="/product">Neque porro quis</Link></h4>
                <p>Google – Nest Hub Max With Google Assistant</p>
                <div class="product-bottom-details">
                  <div class="product-price"><small>$96.00</small>$200.00</div>
                  <div class="product-links">
                    <a href=""><i class="fa fa-heart"></i></a>
                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="product-card" style={{width:"300px",background:"white !important"}}>
              <div class="badge">Hot</div>
              <div class="product-tumb">
                <img src="/images/tv.webp" alt=""/>
              </div>
              <div class="product-details">
                <span class="product-catagory">Women,bag</span>
                <h4><Link to="/product">Neque porro quis</Link></h4>
                <p>Google – Nest Hub Max With Google Assistant</p>
                <div class="product-bottom-details">
                  <div class="product-price"><small>$96.00</small>$200.00</div>
                  <div class="product-links">
                    <a href=""><i class="fa fa-heart"></i></a>
                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="product-card" style={{width:"300px",background:"white !important"}}>
              <div class="badge">Hot</div>
              <div class="product-tumb">
                <img src="/images/laptop.jpg" alt=""/>
              </div>
              <div class="product-details">
                <span class="product-catagory">Women,bag</span>
                <h4><Link to="/product">Neque porro quis</Link></h4>
                <p>Google – Nest Hub Max With Google Assistant</p>
                <div class="product-bottom-details">
                  <div class="product-price"><small>$96.00</small>$200.00</div>
                  <div class="product-links">
                    <a href=""><i class="fa fa-heart"></i></a>
                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="product-card" style={{width:"300px",background:"white !important"}}>
              <div class="badge">Hot</div>
              <div class="product-tumb">
                <img src="/images/laptop.jpg" alt=""/>
              </div>
              <div class="product-details">
                <span class="product-catagory">Women,bag</span>
                <h4><Link to="/product">Neque porro quis</Link></h4>
                <p>Google – Nest Hub Max With Google Assistant</p>
                <div class="product-bottom-details">
                  <div class="product-price"><small>$96.00</small>$200.00</div>
                  <div class="product-links">
                    <a href=""><i class="fa fa-heart"></i></a>
                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          ...
        </Swiper>

    </div>
    
  </>    
		)
}
export default Articles;