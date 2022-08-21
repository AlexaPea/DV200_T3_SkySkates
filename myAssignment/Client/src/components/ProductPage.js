import React from 'react';
import Navigation from './Navigation';
import Helmet from "react-helmet";
import shoeOne from "../Assets/Products/ShoeOne.jpg";
import { UilFacebookF, UilInstagram, UilWhatsapp, UilTwitter   } from '@iconscout/react-unicons';
import Logo from '../Assets/Images/scribble2.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductPage = () => {

//=============================================================================
// Dynamically load favicon
//=============================================================================

useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = {Logo};
  }, []);

  const navigate = useNavigate();

  const [userId, setUserId] = useState({
    activeUser: sessionStorage.getItem('activeUser'),
});


    return (
        <div>
             <Helmet>
                <title>Product</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            <Navigation/>

          

<div className='productInfo-Head'>
            <div className='customDiv'>
                <label className='labelOne'> Select Size (US)
                    <select>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </label>
                <br/>

                <label> Select Colour
                    <div className='colorOp One'></div>
                    <div className='colorOp Two'></div>
                    <div className='colorOp Three'></div>
                    
                </label>
                <br/>
                <label> Quantity
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>

                    </select>
                </label>
            </div>
            
            <div className='productBuyImg'>
                <img src={shoeOne} className="buyImg"/>
            </div>

            <div className='productBuyInfo'>
                <h3>IMPLALA premium</h3>
                <h1>Implala Skates</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h4>R 2500</h4>
                <button className='primaryBtn buy'>Add to cart</button>
                <br/>
                <small>size chart</small>
                <small>product measurements</small>
            </div>

            </div>
        {/*  ProductInfo Div */}

        <div className='furtherInfo-div'>

                <div class="wrapper">
                <div class="tabs">
                    <div class="tab">
                    <input type="radio" name="css-tabs" id="tab-1"  class="tab-switch"/>
                    <label for="tab-1" class="tab-label">Shipping</label>
                    <div class="tab-content">My father had a small estate in Nottinghamshire: I was the third of five sons. He sent me to Emanuel College in Cambridge at fourteen years old, where I resided three years, and applied myself close to my studies; but the charge of maintaining me, although I had a very scanty allowance, being too great for a narrow fortune, I was bound apprentice to Mr. James Bates, an eminent surgeon in London, with whom I continued four years. </div>
                    </div>
                    <div class="tab">
                    <input type="radio" name="css-tabs" id="tab-2" class="tab-switch"/>
                    <label for="tab-2" class="tab-label">Returns</label>
                    <div class="tab-content">My father now and then sending me small sums of money, I laid them out in learning navigation, and other parts of the mathematics, useful to those who intend to travel, as I always believed it would be, some time or other, my fortune to do. </div>
                    </div>
                    <div class="tab">
                    <input type="radio" name="css-tabs" id="tab-3" class="tab-switch"/>
                    <label for="tab-3" class="tab-label">Reviews</label>
                    <div class="tab-content">When I left Mr. Bates, I went down to my father: where, by the assistance of him and my uncle John, and some other relations, I got forty pounds, and a promise of thirty pounds a year to maintain me at Leyden: there I studied physic two years and seven months, knowing it would be useful in long voyages.</div>
                    </div>
                </div>
       
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

export default ProductPage;