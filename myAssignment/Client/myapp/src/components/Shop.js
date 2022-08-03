import React from 'react';
import Navigation from './Navigation';
import Helmet from "react-helmet";
import girlGroup from "../Assets/Images/girlGroup.png";
import girls from "../Assets/Images/girls.jpg";
import shoeOne from "../Assets/Products/ShoeOne.jpg";
import shoeTwo from "../Assets/Products/ShoeTwo.jpg";
import shoeThree from "../Assets/Products/ShoeThree.jpg";
import shoeFour from "../Assets/Products/ShoeFour.jpg";
import cart from "../Assets/Images/Cart.png"
import { UilFacebookF, UilInstagram, UilWhatsapp, UilTwitter   } from '@iconscout/react-unicons';


const Shop = () => {
    console.log("Ho");
    return (
        <div>
             <Helmet>
                <title>Shop</title>
                {/* <link rel="icon" href={Logo}/> */}
            </Helmet>
            <Navigation/>

            <div className='headerOne'>
                <div className='header-text'>
                     <h1>Lets get <br/> <div className="highlight"> shopping. </div></h1>
                </div>

                <img src={girlGroup} className="girlGroup"/>
            </div>


            <div className='headerTwo'>
                <h1>The Time Is Now.</h1>
                   {/* <img src={girls} className="girls"/> */}
            </div>

            <div className='headerThree'>
                <div className='productCard'>
                    <div className='hoverOption'>
                        <div className='buy'>
                            <img src={cart} className="cart"/>
                        </div>
                    </div>
                    <div className='productImg'>
                        <img src={shoeOne} className="cardShoe"/>
                    </div>
                    <div className='shoeName'>
                        <h4>Impala First Green</h4>
                    </div>
                    <div className='shoePrice'>
                        <h6>R2500</h6>
                    </div>
                </div>

                <div className='productCard'>
                <div className='hoverOption'>
                        <div className='buy'>
                            <img src={cart} className="cart"/>
                        </div>
                    </div>
                    <div className='productImg'>
                        <img src={shoeTwo} className="cardShoe"/>
                    </div>
                    <div className='shoeName'>
                        <h4>Impala First Green</h4>
                    </div>
                    <div className='shoePrice'>
                        <h6>R2500</h6>
                    </div>
                </div>

                <div className='productCard'>
                <div className='hoverOption'>
                        <div className='buy'>
                            <img src={cart} className="cart"/>
                        </div>
                    </div>
                    <div className='productImg'>
                        <img src={shoeThree} className="cardShoe"/>
                    </div>
                    <div className='shoeName'>
                        <h4>Impala First Green</h4>
                    </div>
                    <div className='shoePrice'>
                        <h6>R2500</h6>
                    </div>
                </div>
                <div className='productCard'>
                <div className='hoverOption'>
                        <div className='buy'>
                            <img src={cart} className="cart"/>
                        </div>
                    </div>
                    <div className='productImg'>
                        <img src={shoeFour} className="cardShoe"/>
                    </div>
                    <div className='shoeName'>
                        <h4>Impala First Green</h4>
                    </div>
                    <div className='shoePrice'>
                        <h6>R2500</h6>
                    </div>
                </div>
            </div>


            <div className='headerFour'>
                <div className='header-text'>
                     <h1>Like What You See?</h1>
                </div>

                
            </div>




            <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="row-long">
            <h6>About</h6>
            <p class="text-justify">SKY SKATES is for everyone. Our mission is to help support a positive and encouraging community for skaters of all levels that is welcoming and celebrates diversity in all walks of life.</p>
          </div>

          <div class="rowOne">
            <h6>Categories</h6>
            <ul class="footer-links">
            <li><a href="http://scanfcode.com/category/c-language/">RollerSkates</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Competitions</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Chat To Teams</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">MeetUps</a></li>
 
            </ul>
          </div>

          <div class="rowOne">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="extend">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#"> SKY SKATES</a>.
            </p>
          </div>

          <div class="extend">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><UilFacebookF/></a></li>
              <li><a class="twitter" href="#"><UilTwitter/></a></li>
              <li><a class="dribbble" href="#"><UilWhatsapp/></a></li>
              <li><a class="linkedin" href="#"><UilInstagram/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
                            
            
        </div>
    );
};

export default Shop;