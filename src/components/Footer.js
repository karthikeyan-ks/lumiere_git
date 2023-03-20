import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';
import smalllogo from "./smalllogo.png";
import location from "./icons8-location-64.png";
import clglogo from "./Pages/images/college logo Redesigned.png";


const Footer = () => {
  return (
    <footer className="footer-container">
       
      <div className="logo-container">
      <img src={clglogo} alt="College Logo" className="logo" />
      <p className='text'>College of Engineering Kidangoor,<br></br>Kottayam,Kerala<br></br><br></br>Socials</p>
        <div className='socialicons'>
        <a href="https://www.instagram.com/cek_lumiere/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.facebook.com/ceklumiere" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaFacebook className="social-icon" />
        </a>
        </div>
        
      </div>
      <div className='address-container'>
        <img src={smalllogo} alt="College Logo" className="logo1" />
        <p>Lumiere’23</p>
        
      </div>
      <div className='contactus'>
        <p className="contact-info">Contact Us:<br></br> ceklumiere18@gmail.com | 123-456-7890</p>
        <a href="https://goo.gl/maps/NxdNWtFpu7hPsa3V7"> <img src={location} alt="College Logo" className="logo2" /></a>
        <a className='location' href="https://goo.gl/maps/NxdNWtFpu7hPsa3V7">Click to see event location</a>
      </div>
    </footer>
  );
}

export default Footer;
