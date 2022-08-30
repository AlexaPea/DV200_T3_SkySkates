import React from 'react';
import loginPic from '../Assets/Images/loginHeadedr.png';
import Navigation from './Navigation';
import Helmet from "react-helmet";
// import Logo from "../Assets/Images/logo.png";
import Logo from '../Assets/Images/scribble2.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';


const Register = (props) => {

    
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

//=================================================================
//Register
let formVals = ["username", "password"];

const [formValues, setFormValues] = useState(formVals);

const getValues = (e) =>{
const { name, value } = e.target;
setFormValues({ ...formValues, [name]: value });
}

const addNewUser = (e) => {
    e.preventDefault(); 

    let payload = {
        username: formValues['username'],
        password: formValues['password']
    }

    console.log(payload);

    Axios.post('http://localhost:5000/api/addclient', payload)
    .then((res)=> {
        if(res){
        console.log("User Added");
        navigate("/Home"); 
        }
    })
    .catch(function (error) {
        console.log("Error is:" + error);
    });
} 


//============================================
//To login
const toLogin = () =>{
    navigate('/')
}


    return (
        <div className='loginPage Register'>

        <Helmet>
            <title>Register</title>
            <link rel="icon" href={Logo}/>
         </Helmet>

         <Navigation/>
            <div className='login-text'>
                <form onSubmit={addNewUser}>
                    <h1>SKY SKATES.</h1>

                    <label>Email
                        <input type="email" placeholder='beyonce@gmail.com' name="username" onChange={getValues}/>
                    </label>

                    <label>Password
                        <input type="Password" name="password" placeholder='******'onChange={getValues}/>
                    </label>

                    <input type="submit" id='login-submit' ></input>

                </form>
                <button className='primary-btn' onClick={toLogin}>Login</button>

            </div>

            <div className='login-pic'>

                <img src={loginPic} className="loginPic"/>
                
            </div>
            
        </div>
    );
};

export default Register;