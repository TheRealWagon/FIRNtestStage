import React from 'react';
import Navbar from '../Navbar/navbar.jsx'
import Footer from '../../footer.js';
import AfbeeldingLandbouw from '../../afbeeldingLandbouw.js';
import MiddenstukLandbouw from '../../middenstukLandbouw.js';

function Landbouw() {
  return (
    <div>
      <Navbar />
      <AfbeeldingLandbouw />
      <MiddenstukLandbouw/>
      <Footer />
    </div> 
  );
}

export default Landbouw;
