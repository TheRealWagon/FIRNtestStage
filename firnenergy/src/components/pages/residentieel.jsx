import React from 'react';
import '../../opmaak.css';
import Navbar from '../Navbar/navbar.jsx'
import AfbeeldingResidentieel from '../../afbeeldingResidentieel.js';
import MiddenstukResidentieel from '../../middenstukResidentieel.js';
import Footer from '../../footer.js';

function Residentieel() {
  return (
    <div>
      <Navbar />
      <AfbeeldingResidentieel />
      <MiddenstukResidentieel />
      <Footer />
    </div> 
  );
}

export default Residentieel;
