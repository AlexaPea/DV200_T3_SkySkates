import React from 'react';
import Navigation from './Navigation';
import Helmet from "react-helmet";
import Logo from '../Assets/Images/scribble2.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import scribble3 from '../Assets/Images/scribble3.png';
import { UilTimes } from '@iconscout/react-unicons'


const Admin = () => {

//=============================================================================
// Dynamically load favicon
//=============================================================================

useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = {Logo};
  }, []);

  const navigate = useNavigate();

  const [userId, setUserId] = useState({
    activeUser: sessionStorage.getItem('activeUser'),
});

    return (
        <div>
            <Helmet>
                <title>Admin</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            <Navigation/>

            <div className='header-One admin'>
                <h1>Hey Boss!</h1>
            </div>
            <div className='contain-products'>

            </div>
            <div className='add-products'>
                <form>
                    <img src={scribble3} className="addFormScrib"/>
                    <UilTimes size="45" className="close"/>
                    
                    <h1>Add New Skate</h1>
                    <h3>For more to love!</h3>

                    <div className='col-One'>
                    <h4>Item Information</h4>
                            
                                <input type="text" placeholder='Product Name' name="skate-name"/>
                            

                         
                                <input type="text" placeholder='Collection name' name="skate-collection"/>
                         

                           
                                <textarea placeholder='Description'/>
                           


                         
                                <input type="number" name="skate-price" placeholder='Price' className ="half one"/>
                          

                      
                                <input type="number" placeholder='Rating' className ="half" name="skate-rating"/>
                          

                                <h5 className='vegan'>Vegan?</h5>
                            <input type="checkbox" placeholder='Rating' className ="css-checkbox" value="true" name="skate-rating"/>
                            
                    </div>
                    <div className='col-Two'>
                            <h4>Available Stock</h4>

                            <h5 className='option-label'>Colors</h5>
                            <div className='optionList'>
                                <input className='color-option' type="text" name="skate-color-1"/>
                                <input className='color-option' type="text" name="skate-color-2"/>
                                <input className='color-option' type="text" name="skate-color-3"/>
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
                    <button className='primary-btn'>Add Skates!</button>
                </form>
                
            </div>
            
        </div>
    );
};

export default Admin;