import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import deleteScrib from '../Assets/Images/dispatch.png';
import { UilTimes } from '@iconscout/react-unicons';

const DispatchModal = (props) => {

 
    const closeModal = () => {
        props.rerender();
      }
      //uniqueId


      const deleteVet = (event) => {
  
        Axios.delete('http://localhost:5000/api/deleteorder/' + props.orderId)
        .then((res) => {
          if(res){
            console.log("Deleted order ");
            props.editRender(true);
          }
        
        })
        .catch(function (error) { console.log(error)});  
        
   

        props.rerender();
      }
      

    return (
        <div className='pop-up delete'>
            <div className='deleteProductModal dispatchCont'>
                <button onClick={closeModal} className='closeDeleteProd'><UilTimes size="35"/></button>
                <img src={deleteScrib} className="deleteScrib"/>
                <h1>Signed, sealed, <div className='sure'>deliver?</div></h1>
                <h3>Are you sure this order is ready to be dispatched?</h3>
                <button className='primary-btn' onClick={deleteVet}>Dispatch Oredr</button>
                <button className='secondary-btn' onClick={closeModal}>Cancel</button>
            </div>
            
        </div>
    );
};

export default DispatchModal;