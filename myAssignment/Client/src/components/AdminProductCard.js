import React from 'react';
import shoeOne from "../Assets/Products/ShoeOne.jpg";
import cart from "../Assets/Images/Cart.png";
import { UilTrashAlt } from '@iconscout/react-unicons';
import Axios from 'axios';
import UpdateForm from './UpdateForm';
import { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import DeleteProductModal from './DeleteProductModal';



const AdminProductCard = (props) => {

    
let URL = 'http://localhost:5000/productImages/' + props.image;
// console.log(URL);

//==================================================
    const [deleteProductMod, setDeleteProductMod] = useState(); 
    const deleteProduct = () => {
        // console.log(props.userId);


        setDeleteProductMod(<DeleteProductModal upRender={props.rerender} rerender={setDeleteProductMod} productId={props.productId} />);
        //  props.rerender();
      }
    

//==================================================================
  //edit functionality

    // Handle Modal
    const [editModal, setEditModal] = useState();


  const editProduct = (event) => {
    event.preventDefault();
    console.log("click");
    setEditModal(<UpdateForm
      close={setEditModal}
      productId = {props.productId}
      productName = {props.productName}
      productPrice = {props.productPrice}
      productDiscount = {props.productDiscount}
      productCollection = {props.productCollection}
      productDescription = {props.productDescription}
      productRating = {props.productRating}
      availStock = {props.availStock}
      // Five-One = {props.valOne}
    />)

    // setEditModal(<AddProduct rerender={setEditModal}/>)
  } 

  if(props.discount > 0){
    var discount =" | " +props.discount + "%";
}else{
    var discount = "";
}

let sumNum =[]
for(let i=0; i<4;i++){
    const values = Object.values(props.availStock[i].variations);

    const sum = values.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
      

      sumNum.push(sum);
      
}


var total = 0;
for (var i = 0; i < sumNum.length; i++) {
    total += sumNum[i] << 0;
}

    return (
        <div> 
         {editModal}
         {deleteProductMod}
        <div className='adminCard'>
        
            <div className='productCard'>
                    {/* <div className='hoverOption'>
                        
                        <div className='buy'>
                            <img src={cart} className="cart"/>
                        </div>
                    </div> */}
                    <UilTrashAlt className="bin" onClick={deleteProduct}/>
                    <div className='productImg'>
                        <img src={URL} className="cardShoe"/>
                    </div>
                    <div className='shoeName'>
                        <h4>{props.productName}</h4>
                    </div>
                    <div className='shoeStock'>
                        <h6>Available Stock: {total}</h6>
                    </div>
                    <div className='shoePrice'>
                        <h6>R {props.productPrice} {discount}</h6>
                    </div>

                    <button className='primary-btn' onClick={editProduct}>Edit</button>
                </div>
            
                
        </div>

       
        </div>
    );
};

export default AdminProductCard;