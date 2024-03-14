import React from 'react';
import './opmaak.css';
import afbeelding from "./Images/logo.jpg"

const Footer = () => {

    return (
      <div className="footer-container"><div className="image-section">
      <img src={afbeelding} alt="Een mooie afbeelding" />
    </div>
        <div className="left-section">
          <h3>Dashboard</h3>
          <p className='links'>Log in om toegang te krijgen tot uw persoonlijke dashboard en uw gegevens te beheren. </p>
          <button className="footer-btn">Log in</button>
        </div>
        <div className="right-sections">
          <div className="footer-section">
            <h3>Toepassingen</h3>
            <ul>
              <li><a href="/Industrie">Industrieel</a></li>
              <li><a href="/Residentieel">Residentieel</a></li>
              <li><a href="/Landbouw">Landbouw</a></li>
              <li><a href="/Horeca">Horeca</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li><a href="https://www.google.com/maps/place/Parkstraat+23,+8930+Menen/@50.8001322,3.1219031,17z/data=!3m1!4b1!4m6!3m5!1s0x47c32e03c2fef7af:0x2e25962e71be69e8!8m2!3d50.8001322!4d3.124478!16s%2Fg%2F11v0kr1wxm?entry=ttu"target="_blank">Parkstraat 23</a></li>
              <li><a href="https://www.google.com/maps/place/Parkstraat+23,+8930+Menen/@50.8001322,3.1219031,17z/data=!3m1!4b1!4m6!3m5!1s0x47c32e03c2fef7af:0x2e25962e71be69e8!8m2!3d50.8001322!4d3.124478!16s%2Fg%2F11v0kr1wxm?entry=ttu"target="_blank">8930 Menen</a></li>
              <li><a href="callto:+32 56 19 88 77">+32 56 19 88 77</a></li>
              <li><a href="mailto:sales@firnenergy.com">sales@firnenergy.com</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Meer informatie</h3>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="#">Feature</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  

export default Footer;
