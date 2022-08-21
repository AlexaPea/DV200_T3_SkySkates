import React from 'react';
import shoeOne from "../Assets/Products/ShoeOne.jpg";
import cart from "../Assets/Images/Cart.png";

const ProductCard = (props) => {
    return (
        <div>
                <div className='productCard'>
                    <div className='hoverOption'>
                        <div className='buy'>
                            <img src={cart} className="cart"/>
                        </div>
                    </div>
                    <div className='productImg'>
                        <img src={shoeOne} className="cardShoe"/>
                    </div>
                    <div className='shoeName'>
                        <h4>Impala First Green</h4>
                    </div>
                    <div className='shoePrice'>
                        <h6>R2500</h6>
                    </div>
                </div>
            
        </div>
    );
};

export default ProductCard;