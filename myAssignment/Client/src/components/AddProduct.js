import React from 'react';
import scribble3 from '../Assets/Images/scribble3.png';
import { UilTimes } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react';
import Axios from 'axios';

const AddProduct = (props) => {

          //close
          const closeModal = (event) =>{
            event.preventDefault();
            props.rerender();
          }

//functionality
  // Read all the DB Items 

  const [readProducts, setReadProducts] = useState();
  const [renderProducts, setRenderProducts] = useState(false);

let defaultFormVals = ["productName", "productPrice", "productDescription", "productCollection", "productRating", "productDiscount" , "productImg", "veganFriendly", "availStock"];

const [formValues, setFormValues] = useState(defaultFormVals);
const [imageName, setImageName] = useState("Name of file will appear here");

const [productImage, setProductImage] = useState();
 
const getValues = (e) =>{
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
}

//
const getImage = (e) =>{
  
  console.log("click add image");
//where multer comes in
let imageFile = e.target.files[0];
setProductImage(imageFile);
console.log(e.target.files);


let value = e.target.value;
let imgName = value.substring(12);
setImageName(imgName);
console.log(imgName);
let reader = new FileReader();
reader.onload = () => {
  let output = document.getElementById('imgPrev');
  output.src = reader.result;

};

reader.readAsDataURL(e.target.files[0]);

};

const addProduct = (e) => {
    e.preventDefault();

    const payloadData = new FormData();

    // var inStock = +formValues[''] + +formValues[''] + +formValues[''];

    let colourOne = formValues['colorOne'];
    let colourTwo = formValues['colorTwo'];
    let colourThree = formValues['colorThree'];
    let payload = {
        productName: formValues['productName'],
        productPrice: +formValues['productPrice'],
        productCollection: formValues['productCollection'],
        productDiscount: +formValues['productDiscount'],
        productDescription: formValues['productDescription'],
        productRating: +formValues['productRating'],
        inStock: '',
        availStock: [
          { 
            size: 5,
            variations:{
              [colourOne]: +formValues['Five-valOne'],
              [colourTwo]: +formValues['Five-valTwo'],
              [colourThree]: +formValues['Five-valThree']
            }
          },
          { 
            size: 6,
            variations:{
              [colourOne]: +formValues['Six-valOne'],
             [colourTwo]: +formValues['Six-valTwo'],
              [colourThree]: +formValues['Six-valThree']
            }
          },
          { 
            size: 7,
            variations:{
              [colourOne]: +formValues['Seven-valOne'],
              [colourTwo]: +formValues['Seven-valTwo'],
              [colourThree]: +formValues['Seven-valThree']
            }
          },
          { 
            size: 8,
            variations:{
              [colourOne]: +formValues['Eight-valOne'],
              [colourTwo]: +formValues['Eight-valTwo'],
              [colourThree]: +formValues['Eight-valThree']
            }
          }


        ]
      
       
  }
  console.log(payload);

  payloadData.append("information", JSON.stringify(payload));
  payloadData.append("image", productImage);

  Axios.post('http://localhost:5000/api/addproduct', payloadData)
  .then((res)=> {
    if(res){
      console.log("Item Added"); 
      setRenderProducts(true);
    }
  })
  .catch(function (error) {
    console.log(error);
  });

 }

          
    return (
        <div className='opacityBg'>
             <div className='add-products'>
                <form onSubmit={addProduct}>
                    <img src={scribble3} className="addFormScrib"/>
                    <UilTimes size="45" className="close" onClick={closeModal}/>
                    
                    <h1>Add New Skate</h1>
                    <h3>For more to love!</h3>

                    <div className='col-One'>
                    <h4>Item Information</h4>
                    <label className='file-btn'> Upload File <input type="file" hidden onChange={getImage}/></label>
                    <div className='imgPrev'><img id="imgPrev"></img></div>
                    <p className='imgName'>{imageName}</p> 
                            
                                <input type="text" placeholder='Product Name' name="productName" onChange={getValues}/>
                            

                         
                                <input type="text" placeholder='Collection name' name="productCollection" onChange={getValues}/>
                         

                           
                                <textarea placeholder='Description' name="productDescription" onChange={getValues}/>
                           


                         
                                <input type="number" name="productPrice" placeholder='Price' className ="half one" onChange={getValues}/>

                                <input type="number" name="productDiscount" placeholder='Discount' className ="half one" onChange={getValues}/>
                          

                      
                                <input type="number" placeholder='Rating' className ="half" name="productRating" onChange={getValues}/>
                          

                        
                            
                    </div>
                    <div className='col-Two'>
                            <h4>Available Stock</h4>

                            <h5 className='option-label'>Colors</h5>
                            <div className='optionList'>
                                <input className='color-option' type="text" name="colorOne" onChange={getValues}/>
                                <input className='color-option' type="text" name="colorTwo" onChange={getValues}/>
                                <input className='color-option' type="text" name="colorThree" onChange={getValues}/>
                          </div>

                                <h5 className='option-label'>Size 5</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="Five-valOne" onChange={getValues}/>
                                <input className='qty-option' type="Number" name="Five-valTwo" onChange={getValues}/>
                                <input className='qty-option' type="Number" name="Five-valThree" onChange={getValues}/>
                                </div>

                                <h5 className='option-label'>Size 6</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="Six-valOne" onChange={getValues}/>
                                <input className='qty-option' type="Number" name="Six-valTwo" onChange={getValues}/>
                                <input className='qty-option' type="Number" name="Six-valThree" onChange={getValues}/>
                         </div>

                                <h5 className='option-label'>Size 7</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="Seven-valOne" onChange={getValues}/>
                                <input className='qty-option' type="Number" name="Seven-valTwo" onChange={getValues}/>
                                <input className='qty-option' type="Number" name="Seven-valThree" onChange={getValues}/>
                                </div>

                                <h5 className='option-label'>Size 8</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="Eight-valOne" onChange={getValues}/>
                                <input className='qty-option' type="Number" name="Eight-valTwo" onChange={getValues}/>
                                <input className='qty-option' type="Number" name="Eight-valThree" onChange={getValues}/>
                                </div>
                         


                    </div>
                    <button className='primary-btn' type="submit">Add Skates!</button>
                </form>
                
            </div>
            
        </div>
    );
};

export default AddProduct;