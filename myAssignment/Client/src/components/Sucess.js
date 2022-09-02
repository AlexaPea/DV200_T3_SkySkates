import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import deleteScrib from '../Assets/Images/success.png';
import { UilTimes } from '@iconscout/react-unicons';
import { useNavigate } from 'react-router-dom';

const Sucess = (props) => {

  
    const navigate = useNavigate();
    const closeModal = () => {
        props.rerender();
      }
      //uniqueId


      const backHome = (event) => {
  
    navigate('/Home');

        props.rerender();
      }
      




    return (
        <div className='pop-up delete'>
            <div className='deleteProductModal'>
                <button onClick={closeModal} className='closeDeleteProd'><UilTimes size="35"/></button>
                <img src={deleteScrib} className="deleteScrib"/>
                <h1>Whoop <div className='sure'>Whoop!</div></h1>
                <h3>Your order has been placed!</h3>
                <button className='primary-btn' onClick={backHome}>Back To Home</button>
            </div>
            
        </div>
    );
};

export default Sucess;