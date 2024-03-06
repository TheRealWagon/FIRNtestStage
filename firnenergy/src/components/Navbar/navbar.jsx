import './navbar.css'
import FirnLogoHorWhite from '../../images/firn-hor-white 1.png';
import LanguageSelector from "../../languageSelector"

const Navbar = () => {
    
    
    return (
        <div className="HomePage-Navbar">
            <div className="HomePage-Navbar-Logo"><img className="HomePage-Navbar-Logo" src={FirnLogoHorWhite} alt="FirnLogoWhiteHor" /></div>
            <div className="HomePage-Navbar-Items">
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
                    </div>
                </div>
                <div style={{width:"2px", height:"45%", backgroundColor:"white", marginRight:"-5%", marginLeft:"-5%"}}></div>
                <LanguageSelector/>
            </div>
        </div>

    )
}

export default Navbar;