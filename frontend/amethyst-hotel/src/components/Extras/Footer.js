import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


function Footer() {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Our Amazing Hotel. All rights reserved.</p>
      <div className="social-media-links">
        <a href="https://www.facebook.com/hotel.example" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} className="social-icon" />
        </a>
        <a href="https://twitter.com/hotel_example" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} className="social-icon" />
        </a>
        <a href="https://www.instagram.com/hotelexample/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
