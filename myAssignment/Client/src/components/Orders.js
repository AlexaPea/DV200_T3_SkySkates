import React from 'react';
import shoeOne from "../Assets/Products/ShoeOne.jpg";
import { UilTimes } from '@iconscout/react-unicons';
import Axios from 'axios';

const Orders = (props) => {

    //==================================================
//delete product
    //delete function
    const deleteOrder = () => {
        // console.log(props.userId);
        let index = props.id;
        let productData=[];
        productData = JSON.parse(localStorage.getItem('productsInCart'));
// console.log(productData);
        productData.splice(index, 1);
        localStorage.setItem('productsInCart', JSON.stringify(productData));
          
         
          
        }
     




    const finalPrice = props.price * props.quantity;

    console.log(props.id);

    return (
       
                <tr>
                    <td className='picRow'><img src={shoeOne} className="tableShoe"/></td>
                    <td><div className='colorBlock' style={{
                      backgroundColor: props.productColour}}></div></td>
                    <td>R{props.price}</td>
                    <td>{props.quantity}</td>
                    <td>R{finalPrice}</td>
                    <td className='deleteOrder'><UilTimes onClick={deleteOrder}/></td>
                </tr>
            
       
    );
};

export default Orders;