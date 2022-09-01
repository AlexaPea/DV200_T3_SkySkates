import React from 'react';
import Navigation from './Navigation';
import Helmet from "react-helmet";
import girlGroup from "../Assets/Images/girlGroup.png";
import lines1 from "../Assets/Images/lines1.png";
import lines2 from "../Assets/Images/lines2.png";
import girls from "../Assets/Images/girls.jpg";
import shoeOne from "../Assets/Products/ShoeOne.jpg";
import shoeTwo from "../Assets/Products/ShoeTwo.jpg";
import shoeThree from "../Assets/Products/ShoeThree.jpg";
import shoeFour from "../Assets/Products/ShoeFour.jpg";
import cart from "../Assets/Images/Cart.png";
import qr from "../Assets/Images/qr.png";
import underline from "../Assets/Images/underline.png";
import ProductCard from './ProductCard';
import Logo from '../Assets/Images/scribble2.png';
import { UilFacebookF, UilInstagram, UilWhatsapp, UilTwitter   } from '@iconscout/react-unicons';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';


const Shop = () => {

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

//=============================================
//Read products

//read products
const [products, setProducts] = useState();
const [updateProducts, setUpdateProducts] = useState();

useEffect(()=>{

  Axios.get('http://localhost:5000/api/readproducts')
  .then(res =>{

    let productData = res.data;
    console.log(productData);
    let renderProducts = productData.map((item) => <ProductCard key={item._id} productId={item._id} productName={item.productName} productPrice={item.productPrice} discount={item.productDiscount} editRender={setUpdateProducts}/>)
    setProducts(renderProducts);
    setUpdateProducts(false);

  })
  .catch(err => console.log(err));

},[updateProducts]);




    
    return (
        <div>
             <Helmet>
                <title>Shop</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            <Navigation/>

            <div className='headerOne'>
                <div className='header-text'>
                  <div className='decor1'><img src={lines1}/></div>
                  <div className='decor2'><img src={lines2}/></div>
                     <h1>Lets get <br/> <div className="highlight"> shopping. </div></h1>
                </div>

                <img src={girlGroup} className="girlGroup"/>
            </div>


            <div className='headerTwo'>
                <h1>The Time Is Now.</h1>
                   {/* <img src={girls} className="girls"/> */}
            </div>

            <div className='headerThree'>
                {products}
            </div>


            <div className='headerFour'>
                <div className='header-text'>
                     <h1>Like What You See?</h1>
                     <p>Be sure to not miss out! Scan the QR code to be directed to our instagram - where we post all the latest releases, awesome pics of you in our products and more!</p>
                </div>

                <img src={underline} className="underline"/>

                <div className='header-img'>
                    <img src={qr} className="qr-code"/>
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