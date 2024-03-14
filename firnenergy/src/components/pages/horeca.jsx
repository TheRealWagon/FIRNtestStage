import React from 'react';
import Navbar from '../Navbar/navbar.jsx'
import Footer from '../../footer.js';
import AfbeeldingHoreca from '../../afbeeldingHoreca.js';
import InteractivePage from '../../middenstukHoreca.js';

function Horeca() {
  return (
    <div>
      <Navbar />
      <AfbeeldingHoreca />
      <InteractivePage/>
      <Footer />
    </div> 
  );
}

export default Horeca;
