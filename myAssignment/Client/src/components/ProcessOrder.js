import React from 'react';
import { UilTruck } from '@iconscout/react-unicons';
import Axios from 'axios';

const ProcessOrder = (props) => {


//==================================================
//delete order
//delete order
    const deleteProcessOrder = () => {
        // console.log(props.userId);
    
        if(window.confirm("Are you sure you want to delete this order? ") === true){
          //console.log("deleted item");
    
          Axios.delete('http://localhost:5000/api/deleteorder/' + props.orderId)
          .then((res) => {
            if(res){
              console.log("Deleted order ");
              props.editRender(true);
            }
          
          })
          .catch(function (error) { console.log(error)});  
        }
      }



    const finalPrice = props.price * props.quantity;

    const date = (props.date).slice(0,10);
    return (
        <tr>
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