import React from 'react';
import Navigation from './Navigation';
import Helmet from "react-helmet";

const ProductPage = () => {
    return (
        <div>
             <Helmet>
                <title>Product</title>
                {/* <link rel="icon" href={Logo}/> */}
            </Helmet>
            <Navigation/>
            
        </div>
    );
};

export default ProductPage;