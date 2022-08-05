import React from 'react';
import loginPic from '../Assets/Images/loginHeadedr.png';
import Navigation from './Navigation';
import Helmet from "react-helmet";
// import Logo from "../Assets/Images/logo.png";
import Logo from '../Assets/Images/scribble2.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Login = (props) => {

    
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
            <title>Login</title>
            
            <link rel="icon" href={Logo}/>
         </Helmet>

         <Navigation/>
            <div className='login-text'>
                <form>
                    <h1>SKY SKATES.</h1>

                    <label>Email
                        <input type="email" placeholder='beyonce@gmail.com'/>
                    </label>

                    <label>Password
                        <input type="Password" placeholder='******'/>
                    </label>

                    <input type="submit" id='login-submit'></input>

                </form>

            </div>

            <div className='login-pic'>

                <img src={loginPic} className="loginPic"/>
                
            </div>
            
        </div>
    );
};

export default Login;