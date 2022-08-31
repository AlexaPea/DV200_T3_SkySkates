import React from 'react';
import Navigation from './Navigation';
import Helmet from "react-helmet";
import Logo from '../Assets/Images/scribble2.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import scribble3 from '../Assets/Images/scribble3.png';
import { UilTimes } from '@iconscout/react-unicons'
import AdminProductCard from './AdminProductCard';
import Axios from 'axios';
import { UilPlus } from '@iconscout/react-unicons';
import { UilFacebookF, UilInstagram, UilWhatsapp, UilTwitter   } from '@iconscout/react-unicons';
import AddProduct from './AddProduct';
import guySkates from '../Assets/Images/guySkates.png';
import orderCircle from '../Assets/Images/order-circle.png';
import { UilTruck } from '@iconscout/react-unicons'
import ProcessOrder from './ProcessOrder';


const Admin = (props) => {

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

//read products
const [products, setProducts] = useState();
const [updateProducts, setUpdateProducts] = useState();

useEffect(()=>{

  Axios.get('http://localhost:5000/api/readproducts')
  .then(res =>{

 
    let productData = res.data;
    console.log(productData);
    let keys = Object.keys(productData[0].availStock);
    // console.log(keys);
    let renderProducts = productData.map((item) => <AdminProductCard key={item._id} productId={item._id} availStock={item.availStock} productName={item.productName} productPrice={item.productPrice} productCollection={item.productCollection} productDescription={item.productDescription} productRating={item.productRating} veganFriendly={item.veganFriendly} editRender={setUpdateProducts}/>)
    setProducts(renderProducts);
    setUpdateProducts(false);

  })
  .catch(err => console.log(err));

},[updateProducts]);

//==========================================================
//add product modal

    // Handle Modal
    const [modalArea, setModal] = useState();

    const add = (event) => {

        setModal(<AddProduct upRender={props.rerender} rerender={setModal}/>)
        

    };

//=================================
//=============================================
//Read orders


const [orders, setOrders] = useState();
const [updateOrders, setUpdateOrders] = useState();

useEffect(()=>{

  Axios.get('http://localhost:5000/api/readorders')
  .then(res =>{

    let productData = res.data;
    console.log(productData);
    // if(productData.clientEmail === sessionStorage.getItem("user")){}
    let renderOrders = productData.map((item) => <ProcessOrder key={item._id} orderId={item._id} productName={item.productName} productColour={item.productColour} clientEmail={item.clientEmail} size={item.size} quantity={item.quantity} price={item.price} date={item.Date} editRender={setUpdateOrders}/>)
    setOrders(renderOrders);
    setUpdateOrders(false);

  })
  .catch(err => console.log(err));
 
},[updateOrders]);


 

    return (
        <div>
          <div  className='adminPage'>
            <Helmet>
                <title>Admin</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            <Navigation/>

            <div className='addBtn'>
                <button onClick={add}><UilPlus/></button>
            </div>

            <div className='header-One admin'>
                <img src={guySkates} className="guy-header"/>
                <div className='admin-text'>
                <h1>Hey Boss!</h1>
                <h3>Need to make some changes, make space for the new and improved? We can help!</h3>
                <a href='#products'><button className='primary-btn'>Go To Products</button></a>
                </div>
                
            </div>
            <div className='contain-products' id="products">
                {products}

            </div>
            </div>
            <div className='processcontainer'>
              <h1>Orders in Process</h1>
              <img src={orderCircle} className="order-circle"/>
         
                <table className='proccess-orders'>
                  <tr className='heading-row'>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Product Name</th>
                    <th>Size</th>
                    <th>Colour</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Dispatch</th>
                  </tr>

                  {orders}
                </table>

            </div>
            {modalArea}
           



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

export default Admin;