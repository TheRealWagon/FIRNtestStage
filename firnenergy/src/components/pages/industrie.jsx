import React from 'react';
import Navbar from '../Navbar/navbar.jsx'
import Footer from '../../footer.js';
import AfbeeldingIndustrieel from '../../afbeeldingIndustrieel.js';
import MiddenstukIndustrieel from '../../middenstukIndustrieel.js';


function Industrieel() {
  return (
    <div>
      <Navbar />
      <AfbeeldingIndustrieel/>
      <MiddenstukIndustrieel/>
      <Footer />
    </div> 
  );
}

export default Industrieel;
