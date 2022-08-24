import React from 'react';
import shoeOne from "../Assets/Products/ShoeOne.jpg";

const Orders = (props) => {
    return (
        <div>
                <tr>
                    <td className='picRow'><img src={shoeOne} className="tableShoe"/></td>
                    <td>{props.productPrice}</td>
                    <td>{props.productPrice}</td>
                    <td>{props.quantity}</td>
                    <td>R5000</td>
                    <td><UilTimes/></td>
                </tr>
            
        </div>
    );
};

export default Orders;