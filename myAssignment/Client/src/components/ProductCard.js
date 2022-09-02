import React from 'react';
import shoeOne from "../Assets/Products/ShoeOne.jpg";
import cart from "../Assets/Images/Cart.png";
import { useNavigate } from 'react-router-dom';


const ProductCard = (props) => {

    //=======================================================
//individual product

let URL = 'http://localhost:5000/productImages/' + props.image;
console.log(URL);


let navigate = useNavigate();

const toProduct = () => { 
  sessionStorage.setItem('productId', props.productId);
  navigate('/ProductPage');
}

if(props.discount > 0){
    var discount = props.discount + "% Off";
}else{
    var discount = "";
}

    return (
        <div>
                <div className='productCard' onClick={toProduct}>
                    <div className='hoverOption'>
                        <div className='buy'>
                            <img src={cart} className="cart"/>
                        </div>
                    </div>
                    <div className='productImg'>
                        <img src={URL} className="cardShoe"/>
                    </div>
                    <div className='shoeName'>
                        <h4>{props.productName}</h4>
                    </div>
                    <div className='shoePrice'>
                        <h6>R {props.productPrice} </h6>
                        <div className='discount'>{discount}</div>
                    </div>
                </div>
            
        </div>
    );
};

export default ProductCard;