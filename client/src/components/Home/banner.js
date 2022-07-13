import { Link } from "react-router-dom";

function Banner(){
	return(
     <div class="banners">
	    <div class="row">
         <div class="col-4">
            <div class="banner">
            	<img src="/images/Banner_02.jpg"/>
            	<div class="banner-content">
                  <h4>Lorem ipsum dolor<br/> sit amet, consectetur</h4>
                  <button class="btn btn-outline-warning"><Link to="">Shop Now</Link></button>
                </div>
            </div>
         </div> 
         <div class="col-4">
            <div class="banner">
            	<img src="/images/Banner_03.jpg"/>
            	<div class="banner-content">
                  <h4>Lorem ipsum dolor<br/> sit amet, consectetur</h4>
                  <button class="btn btn-outline-warning"><Link to="">Shop Now</Link></button>
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="banner">
              <img src="/images/Banner_02.jpg"/>
              <div class="banner-content">
                  <h4>Lorem ipsum dolor<br/> sit amet, consectetur</h4>
                  <button class="btn btn-outline-warning"><Link to="">Shop Now</Link></button>
                </div>
            </div>
          </div>
        </div>
     </div>
		)
}
export default Banner;