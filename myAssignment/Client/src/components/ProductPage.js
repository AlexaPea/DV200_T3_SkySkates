import React from 'react';
import Navigation from './Navigation';
import Helmet from "react-helmet";
import shoeOne from "../Assets/Products/ShoeOne.jpg";
import { UilFacebookF, UilInstagram, UilWhatsapp, UilTwitter   } from '@iconscout/react-unicons';
import Logo from '../Assets/Images/scribble2.png';
import success from '../Assets/Images/success.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { UilArrowLeft } from '@iconscout/react-unicons';
import ToCart from './ToCart';

const ProductPage = (props) => {

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



//==============================================================================
//

const navigate = useNavigate();

let productId = sessionStorage.getItem("productId");
// console.log(productId);

const [imgUrl, setImgUrl] = useState();
const [newPrice, setNewPrice] = useState();
const [showNewPrice, setShowNewPrice] = useState();
const [avail, setAvail] = useState();

const [productData, setProductData] = useState({
    productName: "",
    // productId: "",
    productPrice: "",
    productDescription: "",
    productCollection: "",
    productDiscount: "",
    productRating: "",
    veganFriendly: "",
    colorOne: "",
    colorTwo: "",
    colorThree: "",
    size: [],
    // valOne: "",
    // valTwo: "",
    // valThree: "",
    image:""
});

const backHome = () =>{
    sessionStorage.clear();
    navigate("/Shop");
}

//counter

useEffect(()=>{

  // localStorage.clear();
    Axios.get('http://localhost:5000/api/oneproduct/' + productId)
    .then(res => {
        let data = res.data;
        // console.log(data);
        var keys = Object.keys(data.availStock[0].variations);

        //get sizes

        let sizes=[];
        for(let i=0; i<data.availStock.length; i++){

          sizes.push(data.availStock[i].size)
        }
       
        if(data.productDiscount>0){
          let dicountNum = (data.productPrice/100) * data.productDiscount;
          setNewPrice(data.productPrice - dicountNum);
          setShowNewPrice("R" + (data.productPrice - dicountNum));
          const element = document.querySelector('.displayPrice');
          element.style.textDecoration  = 'line-through';
        }else{
          setNewPrice(data.productPrice);
          setShowNewPrice("");
        
        }

      console.log(data.availStock);
        let sumNum =[]
        for(let i=0; i<4;i++){
            const values = Object.values(data.availStock[i].variations);

            const sum = values.reduce((accumulator, value) => {
                return accumulator + value;
              }, 0);
              

              sumNum.push(sum);
              
        }
        console.log(sumNum);

        var total = 0;
        for (var i = 0; i < sumNum.length; i++) {
            total += sumNum[i] << 0;
        }
        setAvail(total);


        setProductData({
      
            productName: data.productName,
            // productId: data._id,
            productPrice: data.productPrice,
            productDescription: data.productDescription,
            productCollection: data.productCollection,
            productDiscount: data.productDiscount,
            productRating: data.productRating,
            veganFriendly: data.veganFriendly,
            colorOne: keys[0],
            colorTwo: keys[1],
            colorThree: keys[2],
            size: sizes,
            // valOne: data,
            // valTwo: "",
            // valThree: "",
            
        })
        let URL = 'http://localhost:5000/productImages/' + data.image;
        console.log(URL);
        setImgUrl(URL);
    })
}, []);


//====================================================================================
//Place Order

const [array, setArray] =useState();

let formVals = ["productName", "price", "quantity", "productColor", "size", "clientEmail"];

const [formValues, setFormValues] = useState(formVals);

const getValues = (e) =>{
const { name, value } = e.target;
setFormValues({ ...formValues, [name]: value });
}
const [addedToCart, setAddedToCart] = useState();

const addOrder = (e) => {
    e.preventDefault(); 
    console.log("click");

    let payload = {
      productName:productData.productName,
      // productId:productData.productId,
        price: +newPrice,
        clientEmail: sessionStorage.getItem("user"),
        quantity: +formValues['quantity'],
        productColour: formValues['productColor'],
        size: +formValues['size']
    }


    let cart = JSON.parse(localStorage.getItem('productsInCart'));

    if(!cart){
      console.log("Cart is empty");
    
      let array = [payload];
      let string = JSON.stringify(array);
      localStorage.setItem('productsInCart', string);
    }else{
      console.log("item in cart");
      console.log(cart);
    
      let newArray = [...cart, payload];
      let string = JSON.stringify(newArray);
      localStorage.setItem('productsInCart',string);
    
      console.log( localStorage.getItem('productsInCart'));
    }

    //==========================================================
//add product modal

    // Handle Modal
    

   

    setAddedToCart(<ToCart upRender={props.rerender} rerender={setAddedToCart}/>)
        

 


} 

useEffect(() => {
  window.scrollTo(0, 0)
}, [])
    return (
        <div id="top">
          {addedToCart}
             <Helmet>
                <title>Product</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            <Navigation/>

            <UilArrowLeft onClick={backHome} className="backArrow" size="45"/>

          

<div className='productInfo-Head'>
  <form onSubmit={addOrder}>


            <div className='customDiv'>
                <label className='labelOne'> Select Size (US)
                    <select name="size" onChange={getValues}>
                        <option value="5">{productData.size[0]}</option>
                        <option value="6">{productData.size[1]}</option>
                        <option value="7">{productData.size[2]}</option>
                        <option value="8">{productData.size[3]}</option>
                    </select>
                </label>
                <br/>
           
                <label> Select Colour
                <div class="color-choices">
                    <div>
                      <input id="choice-1" name="productColor" type="radio" value={productData.colorOne} onClick={getValues}
                      style={{
                      backgroundColor: productData.colorOne,
                      appearance: 'none',
                      /* create custom radiobutton appearance */
                      display: 'inline-block',
                      width: '29px',
                      height: '29px',
                      borderRadius: "50px",
                      padding: '6px'}}/>
                      <label for="choice-1"></label>
                    </div>
                    
                    <div>
                      <input id="choice-2" name="productColor" type="radio" value={productData.colorTwo} onClick={getValues}
                       style={{
                        backgroundColor:productData.colorTwo,
                        appearance: 'none',
                        /* create custom radiobutton appearance */
                        display: 'inline-block',
                        width: '29px',
                        height: '29px',
                        borderRadius: "50px",
                        padding: '6px'}}/>
                      <label for="choice-2"></label>
                    </div>
                    
                    <div>
                      <input id="choice-3" name="productColor" type="radio" value={productData.colorThree} onClick={getValues}
                       style={{
                        backgroundColor:productData.colorThree,
                        appearance: 'none',
                        /* create custom radiobutton appearance */
                        display: 'inline-block',
                        width: '29px',
                        height: '29px',
                        borderRadius: "50px",
                        padding: '6px'}}/>
                      <label for="choice-3"></label>
                    </div>
                  </div>
                    
                </label>
                <br/>
                <label> Quantity
                    <select name="quantity" onChange={getValues}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>

                    </select>
                </label>
            </div>
         
            
            <div className='productBuyImg'>
               <img src={imgUrl} className="buyImg"/>
            </div>

            <div className='productBuyInfo'>
                <h3>{productData.productCollection}</h3>
                <h1>{productData.productName}</h1>
                <p>{productData.productDescription}</p>
                <h4 className="displayPrice">R {productData.productPrice}</h4>
                <div className='newPrice'>{showNewPrice}</div>
                <button type="submit" className='primaryBtn buy'>Add to cart</button>
                <p className='availableDisplay'>Available Skates: {avail}</p>
                <br/>
                <small>size chart</small>
                <small>product measurements</small>
            </div>
            </form>
            </div>
        {/*  ProductInfo Div */}

        <div className='furtherInfo-div'>

                <div class="wrapper">
                <div class="tabs">
                    <div class="tab">
                    <input type="radio" name="css-tabs" id="tab-1"  class="tab-switch" checked/>
                    <label for="tab-1" class="tab-label">Shipping</label>
                    <div class="tab-content">
                      <h2>Shipping Details</h2>
                      <h3>Standard Delivery</h3>
                      <ul>
                        <li>Delivery to main centres within 2 to 4 working days (Cape Town, Johannesburg, Pretoria).</li>
                        <li>Delivery to regional and outlying areas could take up to 5 to 7 working days</li>
                        <li>Shipping Fee is 15% of your purchase - this is calculated upon checkout.</li>
                      </ul>

                      <h3>Expedited Delivery</h3>
                      <ul>
                        <li>Delivery to main centres within 2 to 3 working days (Cape Town, Johannesburg, Pretoria).</li>
                        <li>Delivery to regional and outlying areas could take up to 3 to 5 working days</li>
                        <li>Shipping Fee remains 15% of your purchase - this is calculated upon checkout.</li>
                      </ul>


                    </div>
                    </div>
                    <div class="tab">
                    <input type="radio" name="css-tabs" id="tab-2" class="tab-switch"/>
                    <label for="tab-2" class="tab-label">Returns</label>
                    <div class="tab-content">
                       <h2>Return Details</h2>
                       <h4>If you are unhappy with your purchase for any reasons, you can return it to us in one of 3 ways:</h4>
                       <ul>
                        <li>Return it to one of our stores.</li>
                        <li>Log a return online and we will arrange collection with our couriers.</li>
                        <li>Contact Us if you need assistance processing a return.</li>
                       </ul>
                    </div>
                    </div>
                    <div class="tab">
                    <input type="radio" name="css-tabs" id="tab-3" class="tab-switch"/>
                    <label for="tab-3" class="tab-label">Reviews</label>
                    <div class="tab-content">
                        <h2>Reviews</h2>
                        <p>Leave a review! We'd love to know your thoughts!</p>
                        <h4>Be The first to leave a review for {productData.productName}</h4>
                        <div className='review'>
                          <input type="textArea" className="reviewText" placeholder="Type your review here!"/>
                          <div className="primary-btn">Submit Review</div>


                        
                        </div>
                    </div>
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