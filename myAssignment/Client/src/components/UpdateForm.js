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
  let colourSecond = key[1];
  let colourThird = key[2];
  console.log(props.availStock[0].variations[colourFirst]);

  //get quantites for first colour
  let colourOneVal=[];
  for(let i = 0; i<(key.length +1 ); i++ ){
      let value = props.availStock[i].variations[colourFirst]
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

    let editFormValues = {
        productName: props.productName,
        productCollection: props.productCollection,
        productDescription: props.productDescription,
        productPrice: props.productPrice,
        productRating: props.productRating,
        colourOne: key[0],
        colourTwo: key[1],
        colourThree: key[2],

        FiveValOne: colourOneVal[0],
        FiveValTwo: colourTwoVal[0],
        FiveValThree: colourThreeVal[0],

        SixValOne: colourOneVal[1],
        SixValTwo: colourTwoVal[1],
        SixValThree: colourThreeVal[1],

        SevenValOne: colourOneVal[2],
        SevenValTwo: colourTwoVal[2],
        SevenValThree: colourThreeVal[2],

        EightValOne: colourOneVal[3],
        EightValTwo: colourTwoVal[3],
        EightValThree: colourThreeVal[3],
       
   
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
                                <input className='color-option'  defaultValue={key[0]} type="text" name="colourOne" onChange={updateValues}/>
                                <input className='color-option' defaultValue={key[1]}  type="text" name="colourTwo" onChange={updateValues}/>
                                <input className='color-option' defaultValue={key[2]}  type="text" name="colourThree" onChange={updateValues}/>
                          </div>

                                <h5 className='option-label'>Size 5</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="FiveValOne" defaultValue={colourOneVal[0]} onChange={updateValues}/>
                                <input className='qty-option' type="Number" name="FiveValTwo" defaultValue={colourTwoVal[0]} onChange={updateValues} />
                                <input className='qty-option' type="Number" name="FiveValThree" defaultValue={colourThreeVal[0]} onChange={updateValues} />
                                </div>

                                <h5 className='option-label'>Size 6</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="SixValOne"  defaultValue={colourOneVal[1]} onChange={updateValues}/>
                                <input className='qty-option' type="Number" name="SixValTwo"  defaultValue={colourTwoVal[1]} onChange={updateValues} />
                                <input className='qty-option' type="Number" name="SixValThree" defaultValue={colourThreeVal[1]} onChange={updateValues}/>
                         </div>

                                <h5 className='option-label'>Size 7</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="SevenValOne"  defaultValue={colourOneVal[2]} onChange={updateValues}/>
                                <input className='qty-option' type="Number" name="SevenValTwo"  defaultValue={colourTwoVal[2]} onChange={updateValues}/>
                                <input className='qty-option' type="Number" name="SevenValThree" defaultValue={colourThreeVal[2]} onChange={updateValues}/>
                                </div>

                                <h5 className='option-label'>Size 8</h5>
                                <div className='optionList'>
                                <input className='qty-option' type="Number" name="EightValOne"  defaultValue={colourOneVal[3]} onChange={updateValues}/>
                                <input className='qty-option' type="Number" name="EightValTwo"  defaultValue={colourTwoVal[3]} onChange={updateValues}/>
                                <input className='qty-option' type="Number" name="EightValThree" defaultValue={colourThreeVal[3]} onChange={updateValues}/>
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