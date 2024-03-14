import React from 'react';
import './opmaak.css'; 
import afbeelding2 from './Images/finis-removebg-preview.png';
import afbeelding from './Images/Runway.jpg';
import towerImg from './Images/tower.png'; 

const Kadertje2 = () => {
  return (
    <div className="kadertje">
      <div className="tekstContainer">
        <h1>FIRN Energie Storage</h1>
        <p>
          De energie opslag is het buffervat om op de variabele energieprijzen te kunnen inwerken en het eigen verbruik te optimaliseren.
          De grotere opslagcapaciteit dan standaard thuisbatterijen zorgt dat u altijd optimaal goedkoop kunt aankopen of duur verkopen. Voldoende capaciteit voor EV’s en andere grotere verbruikers, maar aan een veel lagere kost dan een standaard thuisbatterij.
        </p>
        <h1>FIRN omvormers</h1>
        <p>
          Retrofit of hybride omvormers. Indien u al zonnepanelen hebt kunnen we naadloos alles integreren in uw bestaande installatie via een retrofit omvormer.Met een hybride omvormer kan alles in 1 systeem.
        </p>
      </div>
      <div className="afbeeldingContainer">
        <img src={afbeelding2} alt="Omschrijving" />
      </div>
    </div>
  );
}

const LargePanel = () => {
  return (
    <div className="large-panel">
      <div className="image-container">
        <img src={afbeelding} alt="Voorbeeld" />
      </div>
      <div className="text-container">
        <h1>FIRN laadpalen</h1>
        <p>
          De elektrische wagens worden in sneltempo de grootste energieverbruikers in de woning. De TellToCharge laadpalen integreren in het totaal systeem is een evidentie.
        </p>
        <h1>FIRN energiemetingen</h1>
        <p>
          Energie productie en verbruiken meten en visualiseren blijft altijd een basis van een energie management systeem.
        </p>
        <h1>FIRN visualisatie</h1>
        <p>
          Energie productie en verbruiken meten en visualiseren, besparingen in kaart brengen zijn mogelijk via een app en Website.
        </p>
      </div>
    </div>
  );
}

const Kadertje = () => {
  return (
    <div id="s1" className="kadertje">
      <div className="tekstContainer">
        <h1>FIRN Energie Storage</h1>
        <p>
          De energie opslag is het buffervat om op de variabele energieprijzen te kunnen inwerken en het eigen verbruik te optimaliseren.
          De grotere opslagcapaciteit dan standaard thuisbatterijen zorgt dat u altijd optimaal goedkoop kunt aankopen of duur verkopen. Voldoende capaciteit voor EV’s en andere grotere verbruikers, maar aan een veel lagere kost dan een standaard thuisbatterij.
        </p>
        <h1>FIRN omvormers</h1>
        <p>
          Retrofit of hybride omvormers. Indien u al zonnepanelen hebt kunnen we naadloos alles integreren in uw bestaande installatie via een retrofit omvormer. Met een hybride omvormer kan alles in 1 systeem.
        </p>
      </div>
      <div className="afbeeldingContainer">
        <img src={towerImg} alt="Omschrijving" />
      </div>
    </div>
  );
}

const MiddenstukResidentieel = () => {
  return (
    <div>
      <Kadertje2 />
      <LargePanel />
      <Kadertje />
    </div>
  );
}

export default MiddenstukResidentieel;
