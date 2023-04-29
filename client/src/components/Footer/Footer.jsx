import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="wrapper">
        <div className="top">
          <div className="item">
              <h1>Categories</h1>
              <span>Women</span>
              <span>Men</span>
              <span>Children</span>
          </div>
              
          <div className="item">
              <h1>Links</h1>
              <span>FAQ</span>
              <span>Stores</span>
              <span>Cookies</span>
          </div>

          <div className="item">
              <h1>About</h1>
              <span>Discover stylish clothing for men and women at our online store. Our collection includes casual and formal wear, carefully curated to make sure you look your best. Elevate your fashion game today!




</span>
          </div>

          <div className="item">
              <h1>Contacts</h1>
              <span>Need help or have questions? Our friendly customer service team is here for you. Contact us via email, phone, or live chat for exceptional service and a seamless shopping experience. Get in touch today!</span>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <span className='logo'>MORMULSTORE</span>
            <span className="copyright">© Copyright 2023. All Rights Reserved</span>
          </div>

          <div className="right">
            <img src='/img/payment.png' alt='payments'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer