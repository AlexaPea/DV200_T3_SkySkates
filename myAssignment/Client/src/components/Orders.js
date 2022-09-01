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
    
        if(window.confirm("Are you sure you want to delete this order? ") === true){
          //console.log("deleted item");

            }
          
         
          
        }
     




    const finalPrice = props.price * props.quantity;

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