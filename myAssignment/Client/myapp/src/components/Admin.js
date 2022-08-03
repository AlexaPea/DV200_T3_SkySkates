import React from 'react';
import Navigation from './Navigation';
import Helmet from "react-helmet";

const Admin = () => {
    return (
        <div>
            <Helmet>
                <title>Admin</title>
                {/* <link rel="icon" href={Logo}/> */}
            </Helmet>
            <Navigation/>
            
        </div>
    );
};

export default Admin;