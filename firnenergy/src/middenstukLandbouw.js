import React, { useState } from 'react';
import './opmaak.css'; // Zorg ervoor dat je het pad naar je CSS-bestand aanpast
import afbeelding1 from './Images/tower.png';
import afbeelding2 from './Images/tower.png';
import afbeelding3 from './Images/tower.png';

const imageData = [
  { src: afbeelding1, title: "De Toren", text: "Dit is de toren" },
  { src: afbeelding2, title: "Het Bos", text: "Dit is het bos" },
  { src: afbeelding3, title: "De Stad", text: "Dit is de stad" },
];

const MiddenstukLandbouw = () => {
  const [activeText, setActiveText] = useState("");
  const [activeTitle, setActiveTitle] = useState("");

  return (
    <>
      <div className="title"><h1 id='s1'>Ontdek Onze Collectie</h1></div>
      <div className="wrapper">
        {imageData.map((image, index) => (
          <div
            className="container"
            key={index}
            onMouseEnter={() => {
              setActiveText(image.text);
              setActiveTitle(image.title);
            }}
          >
            <img src={image.src} alt="Speciale afbeelding" className="image"/>
          </div>
        ))}
      </div>
      {activeText && ( // Deze sectie wordt alleen weergegeven als activeText een waarde heeft
        <div className="infoSection">
          <h2>{activeTitle}</h2>
          <p>{activeText}</p>
        </div>
      )}
    </>
  );
}

export default MiddenstukLandbouw;
