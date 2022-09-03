import React from 'react';
import scribble3 from '../Assets/Images/scribble3.png';
import { useState, useEffect } from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import Axios from 'axios';

const UpdateForm = (props) => {

  // console.log(this.props);
  
  var key = Object.keys(props.availStock[0].variations);
  console.log(key);
  let colourOne = key[0];
  let colourSecond = key[1];
  let colourThird = key[2];


  //get quantites for first colour
  let colourOneVal=[];
  for(let i = 0; i<(key.length +1 ); i++ ){
      let value = props.availStock[i].variations[colourOne]
      colourOneVal.push(value);
  }

  console.log(colourOneVal);

    //get quantites for first colour
    let colourTwoVal=[];
    for(let i = 0; i<(key.length +1 ); i++ ){
        let value = props.availStock[i].variations[colourSecond]
        colourTwoVal.push(value);
    }
  
    console.log(colourTwoVal);

      //get quantites for first colour
  let colourThreeVal=[];
  for(let i = 0; i<(key.length +1 ); i++ ){
      let value = props.availStock[i].variations[colourThird]
      colourThreeVal.push(value);
  }

  console.log(colourThreeVal);


  // let FiveValFirst = props.availStock[0].variations[colourFirst];
  // let FiveValSecond = props.availStock[0].variations[colourSecond];
  // let FiveValThird = props.availStock[0].variations[colourThird];

  
  // const payloadData = new FormData();
console.log(props.availStock);
//original
    let firstVals = {
        productName: props.productName,
        productCollection: props.productCollection,
        productDescription: props.productDescription,
        productPrice: props.productPrice,
        productRating: props.productRating,
        productDiscount: props.productDiscount,

        availStock: props.availStock
              
   
      };

      console.log(firstVals);

  //   const [editValues, setEditValues] = useState(editFormValues);

  //   const updateValues = (e) => {
  //     const {name, value} = e.target;
  //     setEditValues({...editValues, [name]: value});
  //     // console.log(editValues);

  // }

  //new attempt
  
  const [formValues, setFormValues] = useState(firstVals);

 
const updateValues = (e) =>{
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
}


  const updateProd = (e) => {
    e.preventDefault();


    const payloadData = new FormData();

    

    // var inStock = +formValues[''] + +formValues[''] + +formValues[''];

 
    console.log(formValues['colourThree']);
    console.log(formValues['Five-valOne']);
    let stock = [
      { 
        size: 5,
        variations:{
          [formValues['colourOne']]: +formValues['Five-ValOne'],
          [formValues['colourTwo']]: +formValues['Five-ValTwo'],
          [formValues['colourThree']]: +formValues['Five-ValThree']
        }
      },
      { 
        size: 6,
        variations:{
          [formValues['colourOne']]: +formValues['Six-ValOne'],
         [formValues['colourTwo']]: +formValues['Six-ValTwo'],
          [formValues['colourThree']]: +formValues['Six-ValThree']
        }
      },
      { 
        size: 7,
        variations:{
          [formValues['colourOne']]: +formValues['Seven-ValOne'],
          [formValues['colourTwo']]: +formValues['Seven-ValTwo'],
          [formValues['colourThree']]: +formValues['Seven-ValThree']
        }
      },
      { 
        size: 8,
        variations:{
          [formValues['colourOne']]: +formValues['Eight-ValOne'],
          [formValues['colourTwo']]: +formValues['Eight-ValTwo'],
          [formValues['colourThree']]: +formValues['Eight-ValThree']
        }
      }


    ];
  
console.log(stock);

    let payload = {
        productName: formValues['productName'],
        productPrice: +formValues['productPrice'],
        productCollection: formValues['productCollection'],
        productDiscount: +formValues['productDiscount'],
        productDescription: formValues['productDescription'],
        productRating: +formValues['productRating'],
        inStock: '',
        availStock: stock
       
  }

    let productId = props.productId;
    // let payload = editValues; 
    console.log(payload);
    console.log(productId);

    Axios.patch('http://localhost:5000/api/updateproduct/' + productId, payload)
    .then((res)=> {
        if(res){
        console.log("Item Updated"); 
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
                            
                                <input type="text" placeholder='Product Name'  defaultValue={props.productName} name="productName" onChange={updateValues}/>
                            

                         
                                <input type="text" placeholder='Collection name'  defaultValue={props.productCollection} name="productCollection" onChange={updateValues}/>
                         

                           
                                <textarea placeholder='Description' defaultValue={props.productDescription} name="productDescription" onChange={updateValues}/>
                           


                         
                                <input type="number" defaultValue={props.productPrice} name="productPrice" placeholder='Price' className ="half one" onChange={updateValues}/>
                          
                                <input type="number" name="productDiscount" placeholder='Discount' className ="half one" defaultValue={props.productDiscount} onChange={updateValues}/>
                      
                                <input type="number" placeholder='Rating' className ="half" defaultValue={props.productRating} name="productRating" onChange={updateValues}/>
                          

                          
                    </div>
                    <div className='col-Two'>
                            <h4>Available Stock</h4>

                            <h5 className='option-label'>Colors</h5>
                            <div className='optionList'>
                                <input className='color-option'  defaultValue={key[0]} type="text" name="colourOne" onBlur={updateValues}/>
                                <input className='color-option' defaultValue={key[1]}  type="text" name="colourTwo" onBlur={updateValues}/>
                                <input className='color-option' defaultValue={key[2]}  type="text" name="colourThree" onBlur={updateValues}/>
                          </div>

                                <h5 className='option-label'>Size 5</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="Five-ValOne" defaultValue={+colourOneVal[0]} onBlur={updateValues}/>
                                <input className='qty-option' type="Number" name="Five-ValTwo" defaultValue={+colourTwoVal[0]} onBlur={updateValues} />
                                <input className='qty-option' type="Number" name="Five-ValThree" defaultValue={+colourThreeVal[0]} onBlur={updateValues} />
                                </div>

                                <h5 className='option-label'>Size 6</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="Six-ValOne"  defaultValue={+colourOneVal[1]} onBlur={updateValues}/>
                                <input className='qty-option' type="Number" name="Six-ValTwo"  defaultValue={+colourTwoVal[1]} onBlur={updateValues} />
                                <input className='qty-option' type="Number" name="Six-ValThree" defaultValue={+colourThreeVal[1]} onBlur={updateValues}/>
                         </div>

                                <h5 className='option-label'>Size 7</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="Seven-ValOne"  defaultValue={+colourOneVal[2]} onBlur={updateValues}/>
                                <input className='qty-option' type="Number" name="Seven-ValTwo"  defaultValue={+colourTwoVal[2]} onBlur={updateValues}/>
                                <input className='qty-option' type="Number" name="Seven-ValThree" defaultValue={+colourThreeVal[2]} onBlur={updateValues}/>
                                </div>

                                <h5 className='option-label'>Size 8</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="Eight-ValOne"  defaultValue={+colourOneVal[3]} onBlur={updateValues}/>
                                <input className='qty-option' type="Number" name="Eight-ValTwo"  defaultValue={+colourTwoVal[3]} onBlur={updateValues}/>
                                <input className='qty-option' type="Number" name="Eight-ValThree" defaultValue={+colourThreeVal[3]} onBlur={updateValues}/>
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