import './navbar.css'
import React, { useState } from 'react';
import FirnLogoHorWhite from '../../Images/firn-hor-white 1.png';
import LanguageSelector from "../../languageSelector";

const Navbar = () => {
    
    
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State om bij te houden of het menu open is

    // Functie om de menu status te toggelen
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="HomePage-Navbar">
            <div className="HomePage-Navbar-Logo">
                <img src={FirnLogoHorWhite} alt="FirnLogoWhiteHor" />
            </div>
            <div className="HomePage-Navbar-Items-Dashboard HomePage-Navbar-Pointer">
                <div className="HomePage-Navbar-Items-Dashboard-Button">
                    <div className="HomePage-Navbar-Items-Dashboard-Text">Dashboard</div>
                </div>
            </div>

            <div className="burger-menu-icon" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {isMenuOpen && (
                <div className="dropdown">
                    <a href="#HomePage-AboutUs-id">About</a>
                    <a href="#HomePage-Plans-id">Plans</a>
                    <a href="#HomePage-Contanct-Id">Contact</a>
                </div>
            )}

            <div className="HomePage-Navbar-Items">
                <div className="HomePage-Navbar-Items-About HomePage-Navbar-Pointer"><a href="#HomePage-AboutUs-id">About</a></div>
            <div className="HomePage-Navbar-Items-About HomePage-Navbar-Pointer"><a href="#HomePage-AboutUs-id">About</a></div>
                <div className="HomePage-Navbar-Items-Plans HomePage-Navbar-Pointer"><a href="#HomePage-Plans-id">Plans</a></div>
                <div className="HomePage-Navbar-Items-Contact HomePage-Navbar-Pointer"><a href="#HomePage-Contanct-Id">Contact</a></div>
                <div className="HomePage-Navbar-Items-Dashboard HomePage-Navbar-Pointer">
                    <div className="HomePage-Navbar-Items-Dashboard-Button">
                        <div onClick={() => loginWithRedirect({
                            appState: {
                                returnTo: "/HomePage"
                            }
                        })} className="HomePage-Navbar-Items-Dashboard-Text">Dashboard</div>
                        <div className="HomePage-Navbar-Items-Dashboard-Text">Dashboard</div>
                    </div>
                </div>
                <div style={{width:"2px", height:"45%", backgroundColor:"white", marginRight:"-5%", marginLeft:"-5%"}}></div>
                <LanguageSelector/>
            </div>
        </div>
    );
};

    

export default Navbar;
