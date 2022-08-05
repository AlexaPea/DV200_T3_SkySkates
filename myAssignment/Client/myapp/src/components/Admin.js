import React from 'react';
import Navigation from './Navigation';
import Helmet from "react-helmet";
import Logo from '../Assets/Images/scribble2.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


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

            <div className='header-One'>
                <h1>Hey Boss!</h1>
            </div>
            
        </div>
    );
};

export default Admin;