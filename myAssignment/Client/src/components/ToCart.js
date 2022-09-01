import React from 'react';
import cartMod from '../Assets/Images/toCart.png'
import { UilTimes } from '@iconscout/react-unicons';
import { useNavigate } from 'react-router-dom';


const ToCart = (props) => {

    const navigate = useNavigate();

    const closeModal = () => {
        props.rerender();
      }
      //uniqueId

      const toCart = () => {
        navigate('/Cart');
      }

      const toShop = () => {
        navigate('/Shop');
      }
      //uniqueId



    return (
        <div className='pop-up delete'>
            <div className='deleteProductModal'>
                <button onClick={closeModal} className='closeDeleteProd'><UilTimes size="35"/></button>
                <img src={cartMod} className="toCartScrib"/>
                <h1>One step<div className='sure'>closer!</div></h1>
                <h3>This item has been added to your cart!</h3>
                <button className='primary-btn' onClick={toCart}>To Cart!</button>
                <button className='secondary-btn' onClick={toShop}>Keep Shopping!</button>
            </div>
            
        </div>
    );
};

export default ToCart;