import React from 'react';
import { UilTruck } from '@iconscout/react-unicons';
import Axios from 'axios';
import DispatchModal from './DispatchModal';
import { useState, useEffect } from 'react';

const ProcessOrder = (props) => {


//==================================================
//delete order
//delete order

const [dispatch, setDispatch] = useState();
    const deleteProcessOrder = () => {
        // console.log(props.userId);
    
       
        setDispatch(<DispatchModal upRender={props.rerender} orderId={props.orderId} rerender={setDispatch}/>)
         
    
   
        }
      

      



    const finalPrice = props.price * props.quantity;

    const date = (props.date).slice(0,10);
    return (
        <tr>
          {dispatch}
        <td>{date}</td>
        <td>{props.clientEmail}</td>
        <td>{props.productName}</td>
        <td>{props.size}</td>
        <td>{props.productColour}</td>
        <td>{props.quantity}</td>
        <td>{finalPrice}</td>
        <td><UilTruck className="dispatch" onClick={deleteProcessOrder}/></td>
      </tr>
    );
};

export default ProcessOrder;