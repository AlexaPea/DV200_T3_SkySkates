import React from 'react';
import Navigation from './Navigation';
import Helmet from "react-helmet";
import { UilTimes } from '@iconscout/react-unicons';
import shoeOne from "../Assets/Products/ShoeOne.jpg";
import Logo from '../Assets/Images/scribble2.png';
import scribble5 from '../Assets/Images/scribble5.png';
import { UilFacebookF, UilInstagram, UilWhatsapp, UilTwitter   } from '@iconscout/react-unicons';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Cart = () => {

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
                <title>Cart</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            <Navigation/>


<div className='body'>

<div className='header'>
                <h1>Items in my cart.</h1>
                <img src={scribble5} className="cartScribble"/>
        </div>

        <div className='table'>

            <table>
                <tr>
                    <th>ITEM</th>
                    <th>UNIT PRICE</th>
                    <th>QUANTITY</th>
                    <th>FINAL PRICE</th>
                    <th>REMOVE</th>
                </tr>

                <tr>
                    <td className='picRow'><img src={shoeOne} className="tableShoe"/></td>
                    <td>R2500</td>
                    <td>2</td>
                    <td>R5000</td>
                    <td><UilTimes/></td>
                </tr>
            </table>
               
        </div>

        <div className='summary'>
            <h2>Summary</h2>

            <table>
                <tr>
                    <th>SUBTOTAL</th>
                    <td>R5000</td>
                </tr>     
                <tr>
                    <th>SHIPPING EST</th>
                    <td>R500</td>
                </tr>         
            </table>
            <input type="text" placeholder='Enter Gift Code'></input>

            <table>
                <tr>
                    <th>TOTAL</th>
                    <td>R5500</td>
                </tr>            
            </table>

            <button>Proceed to checkout</button>

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

export default Cart;