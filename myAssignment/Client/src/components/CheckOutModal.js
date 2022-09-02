import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import checkOut from '../Assets/Images/checkOut.png';
import { UilTimes } from '@iconscout/react-unicons';
import Sucess from './Sucess'


const CheckOutModal = (props) => {

  
    let productData = JSON.parse(localStorage.getItem('productsInCart'));
    console.log(productData);
    console.log(productData[0].productName);

    const [modalArea, setModal] = useState();

    const closeModal = () => {
        props.rerender();
      }
      //uniqueId


      const createOrder = (e) => {
  
        e.preventDefault(); 
        console.log("click");

        
    let productData = JSON.parse(localStorage.getItem('productsInCart'));
    console.log(productData);

    for(let i=0; i<productData.length; i++){

        let payload = {
            productName:productData[i].productName,
            // productId:productData.productId,
              price: productData[i].price,
              clientEmail: sessionStorage.getItem("user"),
              quantity: productData[i].quantity,
              productColour: productData[i].productColour,
              size: productData[i].size
          }
  
          
          Axios.post('http://localhost:5000/api/addorder', payload)
          .then((res)=> {
              if(res){
              console.log("Order Successful");
             
                setModal(<Sucess upRender={props.rerender} rerender={setModal}/>)
        

  
  
              }
          })
          .catch(function (error) {
              console.log("Error is:" + error);
          });

          localStorage.clear();

          

    }
 
    

        

    
      }
      




    return (
        <div className='pop-up delete'>
            {modalArea}
            <div className='deleteProductModal check'>
                <button onClick={closeModal} className='closeDeleteProd'><UilTimes size="35"/></button>
                <img src={checkOut} className="deleteScrib"/>
                <h1>Place<b> order</b></h1>
                <h3>Whoop whoop! You won't regret this!</h3>

                <div className='buy-form'>
                    <h3>Billing Details</h3>
                    <form>
                        <div className='adress'>
                            <h2>Shipping</h2>
                            <h6>Full Name</h6>
                            <input type="text" placeholder='Jay Doe'></input>
                            <h6>Country</h6>
                            <input type="text" placeholder='South Africa'></input>
                            <h6>City</h6>
                            <input type="text" placeholder='Port Elizabth'></input>
                            <h6>Address</h6>
                            <input type="text" placeholder='Type Adress here'></input>
                            <h6>Zip Code</h6>
                            <input type="text" placeholder='0000'></input>
                        </div>

                        <div className='adress'>
                            <h2>Payment Information</h2>
                            <h6>Card Number</h6>
                            <input type="number" placeholder='4123 56854 45845'></input>
                            <h6>Expiration Date</h6>
                            <input type="text" placeholder='mm / yyyy'></input>
                            <h6>Security / CVV</h6>
                            <input type="text" placeholder='123'></input>
                            <button className='primary-btn' onClick={createOrder}>Purchase!</button>
                <button className='secondary-btn' onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                </div>
              
            </div>
            
        </div>
    );
};

export default CheckOutModal;