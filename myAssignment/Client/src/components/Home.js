import React from 'react';
import Navigation from './Navigation';
import Helmet from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import headerImg from '../Assets/Images/headerImg.png';
import scribble from '../Assets/Images/headerScribble.png';
import scribble2 from '../Assets/Images/scribble2.png';
import scribble3 from '../Assets/Images/scribble3.png';
import video from '../Assets/Video/ManSkateboarding.mp4';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import shoeOne from "../Assets/Products/ShoeOne.jpg";
import shoeTwo from "../Assets/Products/ShoeTwo.jpg";
import shoeThree from "../Assets/Products/ShoeThree.jpg";
import skateGirl from "../Assets/Images/skateGirl.jpg";
import pattern from "../Assets/Images/pattern2.png";
import shoes from "../Assets/Images/shoes.jpg";
import { UilFacebookF, UilInstagram, UilWhatsapp, UilTwitter   } from '@iconscout/react-unicons';
import Logo from '../Assets/Images/scribble2.png';
import Axios from 'axios';
import { Fade} from "react-awesome-reveal";
import SliderItem from './SliderItem'

// import ReactFullpage from '@fullpage/react-fullpage';


const Home = () => {
    console.log(sessionStorage.getItem('token'));

        
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


//============================================
//verify User
useEffect(()=>{

  let verifyUser = {token: sessionStorage.getItem('token')};
  if(!verifyUser.token){
    navigate('/');
    sessionStorage.clear();
  }else{
    Axios.post('http://localhost:5000/api/verifytoken', verifyUser)
    .then(res =>{
      console.log(res.data);
      if(res.data.verified === false){
        navigate('/');
        sessionStorage.clear();

      }
    })
  }

}, []);

//read products
const [products, setProducts] = useState();
const [updateProducts, setUpdateProducts] = useState();

useEffect(()=>{

  Axios.get('http://localhost:5000/api/readproducts')
  .then(res =>{

    let productData = res.data;
    console.log(productData);
    let newArray =[];
    for (let i = Math.max(0,productData.length-3); i < productData.length; i++) { 
        newArray.push(productData[i])

    }
console.log(newArray);

    let renderProducts = newArray.map((item) => <SliderItem key={item._id} productId={item._id} productName={item.productName} productPrice={item.productPrice} discount={item.productDiscount} editRender={setUpdateProducts} image={item.image}/>)
    setProducts(renderProducts);
    setUpdateProducts(false);

  })
  .catch(err => console.log(err));

},[updateProducts]);




    return (
       
      
          <div>
            
        <Helmet>
            <title>Home</title> 
            <link rel="icon" href={Logo}/>
         </Helmet>

         <Navigation/>




              
             


         <Fade direction='up' casecade triggerOnce='true' duration={2000}>
                      <div className='first-header original'>
                          <h1>LET'S GET <div className="physical">PHYSICAL.</div></h1>
                          <div className='headerImg'>
                              <img src={headerImg}></img>
                          </div>
                      </div>
              </Fade>       
           
                      <Fade direction='up' casecade triggerOnce='true'>
                        <div className='second-header'>
                            <video autoPlay loop muted playsInline className='backVideo'>
                                <source src={video}/>
                            </video>
                            
                            <div className='content'>
                              <h1 class="text2">#GetShopping</h1>
                              <img className='second-scribble' src={scribble2}/>
                            </div>
                        </div>
                      </Fade> 
                     

                      
                      <Fade direction='up' casecade triggerOnce='true'>
                        <div className='third-header'>
                            <Carousel>
                                    {products}
                            </Carousel> 
                        </div>
                      </Fade>

                    

                      <Fade direction='up' casecade triggerOnce='true'>
                        <div className='info-header'>

                            <div className='content-img'>
                                <img src={skateGirl}></img>
                            </div>
                    
                            <div className='content-text'>
                            <img className='third-scribble' src={scribble3}/>
                                <small>SKY SKATES IS FOR EVERYONE</small>
                                <h2>Join the Squad</h2>
                                <p>Sky Skates is a worldwide community for those who love to skate. Take your pick from our roller skates, inline skates or skateboards - there is something for everyone.</p>
                            </div>

                        </div>
                      </Fade>

             
                 
                      <Fade direction='up' casecade triggerOnce='true'>
                          <div className='fourth-header'>
                            <form>
                                  <h1>Pssst, hey, you <br/> (yeah, you)</h1>
                                  <p>Want in on new arrivals, exclusive collabs, sales and more? <br/> Well, you know what to do.</p>
                                  <input type="text" placeholder='Your email, please'></input>
                                  <input type="submit"></input>
                                  <br/>
                                  <small>To see how we may use your information, take a look at our privacy policiy.</small>        
                              </form> 
                          </div>
                      </Fade>
                    
                     
          
                      
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

export default Home;