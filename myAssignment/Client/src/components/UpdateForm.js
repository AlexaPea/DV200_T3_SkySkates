import React from 'react';
import scribble3 from '../Assets/Images/scribble3.png';
import { useState, useEffect } from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import { Axios } from 'axios';

const UpdateForm = (props) => {

  // console.log(this.props);
  
  var key = Object.keys(props.availStock[0].variations);
  console.log(key);
  let colourFirst = key[0];
  console.log(props.availStock[0].variations.colourFirst);

    let editFormValues = {
        productName: props.productName,
        productCollection: props.productCollection,
        productDescription: props.productDescription,
        productPrice: props.productPrice,
        productRating: props.productRating,
        colourOne: key[0],
        colourTwo: key[1],
        colourThree: key[2],
       
   
      };

    const [editValues, setEditValues] = useState(editFormValues);

    const updateValues = (e) => {
      const {name, value} = e.target;
      setEditValues({...editValues, [name]: value});
      // console.log(editValues);

  }

  const updateProd = (e) => {
    e.preventDefault();
    let productId = props.id;
    let payload = editValues; 
    console.log(payload);

    Axios.patch('http://localhost:5000/api/updateproduct/' + productId, payload)
    .then((res)=> {
        if(res){
        console.log("Item Upadted"); 
        props.close();
        props.editRender(true);
        }
    })
    .catch(function (error) {
        console.log(error);
    });

}




//===========================================================
  //close

  const closeModal = () =>{
    props.close();
    }


    console.log(props.availStock);

    return (
      <div className='pop-up'>
        <div className='opacityBg form'>
             <div className='add-products'>
                <form onSubmit={updateProd}>
                    <img src={scribble3} className="addFormScrib"/>
                    <UilTimes size="45" className="close" onClick={closeModal}/>
                    
                    <h1>Edit Skate</h1>
                    <h3>Let's make some changes!</h3>

                    <div className='col-One'>
                    <h4>Item Information</h4>
                            
                                <input type="text" placeholder='Product Name'  defaultValue={props.productName} name="productName"/>
                            

                         
                                <input type="text" placeholder='Collection name'  defaultValue={props.productCollection} name="productCollection"/>
                         

                           
                                <textarea placeholder='Description' defaultValue={props.productDescription} name="productDescription"/>
                           


                         
                                <input type="number" defaultValue={props.productPrice} name="productPrice" placeholder='Price' className ="half one"/>
                          
                                <input type="number" name="productDiscount" placeholder='Discount' className ="half one" defaultValue={props.productDiscount}/>
                      
                                <input type="number" placeholder='Rating' className ="half" defaultValue={props.productRating} name="productRating"/>
                          

                          
                    </div>
                    <div className='col-Two'>
                            <h4>Available Stock</h4>

                            <h5 className='option-label'>Colors</h5>
                            <div className='optionList'>
                                <input className='color-option'  defaultValue={key[0]} type="text" name="skate-color-1"/>
                                <input className='color-option' defaultValue={key[1]}  type="text" name="skate-color-2"/>
                                <input className='color-option' defaultValue={key[2]}  type="text" name="skate-color-3"/>
                          </div>

                                <h5 className='option-label'>Size 5</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="skate-qty-1"/>
                                <input className='qty-option' type="Number" name="skate-qty-2"/>
                                <input className='qty-option' type="Number" name="skate-qty-3"/>
                                </div>

                                <h5 className='option-label'>Size 6</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="skate-qty-1"/>
                                <input className='qty-option' type="Number" name="skate-qty-2"/>
                                <input className='qty-option' type="Number" name="skate-qty-3"/>
                         </div>

                                <h5 className='option-label'>Size 7</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="skate-qty-1"/>
                                <input className='qty-option' type="Number" name="skate-qty-2"/>
                                <input className='qty-option' type="Number" name="skate-qty-3"/>
                                </div>

                                <h5 className='option-label'>Size 8</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="skate-qty-1"/>
                                <input className='qty-option' type="Number" name="skate-qty-2"/>
                                <input className='qty-option' type="Number" name="skate-qty-3"/>
                                </div>
                         


                    </div>
                    <button className='primary-btn' type="submit">Update Skates!</button>
                </form>
                
            </div>
            </div>
            
        </div>
    );
};

export default UpdateForm;