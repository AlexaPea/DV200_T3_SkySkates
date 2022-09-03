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
import Axios from 'axios';
import CheckOutModal from './CheckOutModal'
import Orders from './Orders';
import { motion, useAnimation } from "framer-motion";

const Cart = (props) => {

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


//=================================
//=============================================
//Read orders


// const [orders, setOrders] = useState();
// const [updateOrders, setUpdateOrders] = useState();

// useEffect(()=>{

//   Axios.get('http://localhost:5000/api/readorders')
//   .then(res =>{

//     let productData = res.data;
//     console.log(productData);
//     // if(productData.clientEmail === sessionStorage.getItem("user")){}
//     let renderOrders = productData.map((item) => <Orders key={item._id} orderId={item._id} productColour={item.productColour} quantity={item.quantity} price={item.price}  editRender={setUpdateOrders}/>)
//     setOrders(renderOrders);
//     setUpdateOrders(false);

//   })
//   .catch(err => console.log(err));

// },[updateOrders]);


//read orders from local storage

const [orders, setOrders] = useState();
const [total, setTotal] = useState();
const [shipping, setShipping] = useState();
const [final, setFinal] = useState();
const [updateOrders, setUpdateOrders] = useState();

useEffect(()=>{
  
 let cartData =[];
    let productData = (localStorage.getItem('productsInCart'));
    if(productData){
      console.log(productData);
      cartData.push(productData);
  
      // console.log(productData);
      // console.log(cartData);
      let displayData = JSON.parse(cartData);
    // console.log(displayData);
      
      let renderOrders = displayData.map((item, index) => <Orders id={index} productColour={item.productColour} quantity={item.quantity} price={item.price}  editRender={setUpdateOrders}/>)
      setOrders(renderOrders);
      setUpdateOrders(false);
  
      let final = 0;
  
      let prices = displayData.map(function(item){
        final = item.price * item.quantity;
        return final;
    });
  
       // Creating variable to store the sum
       var sum = 0;
    
       // Calculation the sum using forEach
       prices.forEach(x => {
           sum += x;
       }); 
    console.log(sum);
    
    setTotal(sum);
    setShipping(Math.ceil((sum/100)*15));
    setFinal(sum+ Math.ceil((sum/100)*15));
  


    }else{
      setTotal("0");
      setShipping("0");
      setFinal("0");

    }
  

  },[updateOrders]);

// },[]);

  // // setTotal(productData.price)
    // setShipping(Math.ceil((productData.price/100)*15));
    // console.log(productData);
    // console.log(productData.productName);

//==========================================================
//add product modal

    // Handle Modal
    const [checkOutModalArea, setCheckOutModal] = useState();

    const checkout = (event) => {

      setCheckOutModal(<CheckOutModal upRender={props.rerender} rerender={setCheckOutModal}/>)
        

    };

    return (
        <div>
             <Helmet>
                <title>Cart</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            <Navigation/>
{checkOutModalArea}

<div className='body'>

<div className='header'>
                <h1>Items in my cart.</h1>
                <img src={scribble5} className="cartScribble"/>
        </div>

        <div className='table'>

            <table>
                <tr>
                    <th>ITEM</th>
                    <th>COLOUR</th>
                    <th>UNIT PRICE</th>
                    <th>QUANTITY</th>
                    <th>FINAL PRICE</th>
                    <th>REMOVE</th>
                </tr>
                {orders}
            </table>
               
        </div>

        <div className='summary'>
            <h2>Summary</h2>

            <table>
                <tr>
                    <th>SUBTOTAL</th>
                    <td>R{total}</td>
                </tr>     
                <tr>
                    <th>SHIPPING EST</th>
                    <td>R{shipping}</td>
                </tr>         
            </table>
            <input type="text" placeholder='Enter Gift Code'></input>

            <table>
                <tr>
                    <th>TOTAL</th>
                    <td>R{final}</td>
                </tr>            
            </table>

            <motion.button whileHover={{ scale: 1.05 }} onClick={checkout}>Proceed to checkout</motion.button>

        </div>







</div>


<footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="row-long">
            <h6>About</h6>
            <p className="text-justify">SKY SKATES is for everyone. Our mission is to help support a positive and encouraging community for skaters of all levels that is welcoming and celebrates diversity in all walks of life.</p>
          </div>

          <div className="rowOne">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">RollerSkates</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Competitions</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Chat To Teams</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">MeetUps</a></li>
 
            </ul>
          </div>

          <div className="rowOne">
            <h6>Quick Links</h6>
            <ul className="footer-links">
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
      <div className="container">
        <div className="row">
          <div className="extend">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#"> SKY SKATES</a>.
            </p>
          </div>

          <div className="extend">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><UilFacebookF/></a></li>
              <li><a className="twitter" href="#"><UilTwitter/></a></li>
              <li><a className="dribbble" href="#"><UilWhatsapp/></a></li>
              <li><a className="linkedin" href="#"><UilInstagram/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
            
        
            
        </div>
    );
};

export default Cart;