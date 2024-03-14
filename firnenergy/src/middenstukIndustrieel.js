import React, { useState } from 'react';
import './opmaak.css';
import afbeelding from './Images/LightmodeSlanted.png';
import afbeelding1 from './Images/coin.png'
import afbeelding2 from './Images/bolt.png';
import afbeelding3 from './Images/cash.png';
import tower from './Images/tower.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faSun, faBatteryFull } from '@fortawesome/free-solid-svg-icons';

const MiddenstukIndustrieel = () => {
  const images = [
    { src: afbeelding1, title: 'Geldbesparingen', description: 'goed voor de portomonee'  },
    { src: afbeelding3, title: 'Stroomverbruik', description: 'blbalablabalbabaa'  },
    { src: afbeelding2, title: 'Nogmaals geld', description: 'balbalbalabalbaba'  },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='kleur'>
      <div className="vierkanten-container">
        <div className="vierkant donker">
          <FontAwesomeIcon icon={faHandshake} size="3x" />
          <h2>Altijd een akkoord</h2>
          <p>alles is beter hier</p>
        </div>
        <div className="vierkant licht">
          <FontAwesomeIcon icon={faSun} size="3x" />
          <h2>Zonneenergie</h2>
          <p>goed voor milieu</p>
        </div>
        <div className="vierkant donker">
          <FontAwesomeIcon icon={faBatteryFull} size="3x" />
          <h2>Goeie storage</h2>
          <p>storageeeeee</p>
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel-images">
          <button onClick={goToPrev}>&lt;</button>
          <img src={images[currentIndex].src} alt={`Afbeelding ${currentIndex + 1}`} />
          <button onClick={goToNext}>&gt;</button>
        </div>
        <div className="carousel-description">
          <p>{images[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default MiddenstukIndustrieel;
