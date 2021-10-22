import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='text-center bg text-gray'>
            <img className='footer-img' src="/images/logo2.png" alt="" />
            <h3>Cosmic Bliss Yoga Studio</h3>
            <span className='m-3'>term</span><span>policy</span><span  className='m-3'>libarities</span>
            
            <p>© 2021 all right reserves</p>
            
        </div>
    );
};

export default Footer;