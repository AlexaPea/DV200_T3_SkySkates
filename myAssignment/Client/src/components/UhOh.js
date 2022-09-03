import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import deleteScrib from '../Assets/Images/uhoh.png';
import { UilTimes } from '@iconscout/react-unicons';

const UhOh = (props) => {

 
    const closeModal = () => {
        props.close();
      }
      //uniqueId




    return (
        <div className='pop-up delete'>
            <div className='deleteProductModal uhOh'>
                <button onClick={closeModal} className='closeDeleteProd'><UilTimes size="35"/></button>
                <img src={deleteScrib} className="deleteScrib"/>
                <h1>Uh Oh!</h1>
                <h3>Either your email or password is wrong! Please try again.</h3>
                <button className='primary-btn' onClick={closeModal}>Try Again</button>
            </div>
            
        </div>
    );
};

export default UhOh;