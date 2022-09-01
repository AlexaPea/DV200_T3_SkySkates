import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import deleteScrib from '../Assets/Images/deleteMod.png';
import { UilTimes } from '@iconscout/react-unicons';

const DeleteProductModal = (props) => {

 
    const closeModal = () => {
        props.rerender();
      }
      //uniqueId


      const deleteVet = (event) => {
  
          Axios.delete('http://localhost:5000/api/deleteproduct/' + props.productId)
          .then((res) => {
            if(res){
              console.log("Deleted: " + props.productName);
              props.editRender(true);
            }
          
          })
          .catch(function (error) { console.log(error)});  
        
   

        props.rerender();
      }
      




    return (
        <div className='pop-up delete'>
            <div className='deleteProductModal'>
                <button onClick={closeModal} className='closeDeleteProd'><UilTimes size="35"/></button>
                <img src={deleteScrib} className="deleteScrib"/>
                <h1>Are you <div className='sure'>sure?</div></h1>
                <h3>Once you have deleted the item it will be gone for good...</h3>
                <button className='primary-btn' onClick={deleteVet}>Delete Product</button>
                <button className='secondary-btn' onClick={closeModal}>Cancel</button>
            </div>
            
        </div>
    );
};

export default DeleteProductModal;