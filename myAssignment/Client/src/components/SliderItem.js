import React from 'react';
import { useNavigate } from 'react-router-dom';

const SliderItem = (props) => {

    const navigate=useNavigate();
    let URL = 'http://localhost:5000/productImages/' + props.image;
// console.log(URL);

const toProduct = () => { 
    sessionStorage.setItem('productId', props.productId);
    navigate('/ProductPage');
  }
  


    return (
        <div className='card one'>
        <h3 className='new-price'>R{props.productPrice}</h3>
        <h3 className='new-word'>NEW</h3>
        <div className='image-of-shoe'>
        <img src={URL} className="newShoe" width="20px"/>
        </div>
        <h1>{props.productName}</h1>
        <button className='buy-btn' onClick={toProduct}>Buy Now</button>
    </div>
    );
};

export default SliderItem;