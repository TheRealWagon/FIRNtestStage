import "./homePage.css"
import React, { useRef, useEffect, useState } from 'react';

import User from '../../api/user';
import FirnLogoHorWhite from '../../Images/firn-hor-white 1.png';
import FirnController from '../../Images/finis-removebg-preview.png';
import ShapeOne from '../../Images/shape1.png';
import ShapeTwo from "../../Images/shape2.png";
import ShapeThree from "../../Images/shape3.png";
import IndustiralIcon from "../../Images/icons8-industrial-64 1.png"
import ResidentialIcon from "../../Images/icons8-house-100 1.png"
import AgricultureIcon from "../../Images/icons8-tractor-100.png"
import HospitalityIcon from "../../Images/icons8-service-bell-100.png"
import ShapeFour from "../../Images/shape4.png"
import {useNavigate} from "react-router-dom";
import DayAheadPriceChart from "./dayAheadPrice/dayAheadPriceChart";

const WebHomePage = () => {

    
    const navigate = useNavigate();
    //##########PLANS##########//
    const [isIndustrialHovered, setIsIndustrialHovered] = useState(false)
    const [isResidentialHovered, setIsResidentialHovered] = useState(false)
    const [isAgricultureHovered, setIsAgricultureHovered] = useState(false)
    const [isHospitalityHoverd, setIsHospitalityHoverd] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState("Residential")
    const PlanOrder = ["Industrial", "Residential", "Agriculture", "Hospitality"]
    const KeypointsPerPlan = {
        "Industrial": ["Multiple battery solutions", "Large scale energy savings", "Optimized energy circuit"],
        "Residential": ["Flexible energy storage options", "Efficient power consumption", "Customized energy management"],
        "Agriculture": ["Enhanced farm productivity", "Energy cost reduction", "Optimized irrigation systems"],
        "Hospitality": ["Improved guest experience", "Efficient energy utilization", "Sustainable resource management"]
    };

    //gets the selected plan index from PlanOrder
    const getPlanOrder = () => {
        let currentPlanIndex = 0
        PlanOrder.forEach((element, index) => {
            if (selectedPlan == element) {
                currentPlanIndex = index;
            }
        });

        return currentPlanIndex;
    }

    const navigateToProfile = () => {

        switch (selectedPlan) {
            case "Industrial": {
                navigate("/Industrie");
                break;
            };
            case "Residential": {
                navigate("/Residentieel");
                break;
            };
            case "Agriculture": {
                navigate("/Landbouw");
                break;
            };
            case "Hospitality": {
                navigate("/Horeca");
                break;
            }
        }
    }

    //##########LOGIN##########//

    return (
        <div style={{overflowX: "hidden"}}>
            <div className="HomePage-Overlay">
                <div className="HomePage-Navbar">
                    <div className="HomePage-Navbar-Logo"><img className="HomePage-Navbar-Logo" src={FirnLogoHorWhite} alt="FirnLogoWhiteHor" /></div>
                    <div className="HomePage-Navbar-Items">
                        <div className="HomePage-Navbar-Items-About HomePage-Navbar-Pointer"><a href="#HomePage-AboutUs-id">About</a></div>
                        <div className="HomePage-Navbar-Items-Plans HomePage-Navbar-Pointer"><a href="#HomePage-Plans-id">Plans</a></div>
                        <div className="HomePage-Navbar-Items-Contact HomePage-Navbar-Pointer"><a href="#HomePage-Contanct-Id">Contact</a></div>
                        <div className="HomePage-Navbar-Items-Dashboard HomePage-Navbar-Pointer">
                            <div className="HomePage-Navbar-Items-Dashboard-Button">
                                <div className="HomePage-Navbar-Items-Dashboard-Text">Dashboard</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="HomePage-Overlay-Content">
                    <div className="HomePage-Overlay-Content-Element">
                        <div className="HomePage-Overlay-Text">
                            <div className="HomePage-Overlay-Text-Title"> Firn <span className="HomePage-Overlay-Text-Title-Color">Energy</span></div>
                            <div className="HomePage-Overlay-Text-Desc">Smart energy saving technologie. Maximize your savings thanks to the smartgridOne controller</div>
                            <div className="HomePage-Overlay-Text-Button-Container">
                                <div><button className="HomePage-Overlay-text-Button">Contact us</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="HomePage-Overlay-Content-Element">
                        <img className="HomePage-Overlay-Picture" src={FirnController} alt="" />
                    </div>
                </div>
                <div class="scroll-indicator">
                    <span class="arrow"></span>
                </div>
            </div>
            <div className="HomePage-Plans" id="HomePage-AboutUs-id">
                <div className="HomePage-Plans-Top">
                    <div className="HomePage-Plans-ShapeOne">
                        <img className="HomePage-Plans-ShapeOne-img" src={ShapeOne} alt="" />
                        <div className="HomePage-Plans-ShapeOne-Text">
                            <div className="HomePage-Plans-ShapeOne-Text-Title">
                                <p className="HomePage-Plans-ShapeOne-Text-Title-Text">What is FirnEnergy?</p>
                            </div>
                            <div className="HomePage-Plans-ShapeOne-Text-Desc">
                                <p>FIRN Energy is a leading company focusing on developing advanced battery solutions and energy management systems. We believe in the power of energy storage and the impact it can have on the way we consume and manage energy. Our mission is to provide sustainable and reliable energy storage solutions that support the transition to a greener future.</p>
                            </div>
                        </div>
                    </div>
                    <div className="HomePage-Plans-ShapeTwo">
                        <img width={"75%"} height={"auto"} src={ShapeTwo} alt="" />
                    </div>
                    <div className="HomePage-Plans-ShapeThree">
                        <img className="HomePage-Plans-ShapeThree-img" src={ShapeThree} alt="" />
                        <div className="HomePage-Plans-ShapeThree-Buttons">
                            <div>
                                <button onClick={() => {if (PlanOrder.includes(selectedPlan)) {let order = getPlanOrder(); if (order - 1 < 0) {order = PlanOrder.length}; setSelectedPlan(PlanOrder[order - 1])}}} className="HomePage-Plans-ShapeThree-Button HomePage-Plans-ShapeThree-Buttons-Left">
                                    <span className="arrow-left"></span>
                                </button>
                            </div>
                            <div>
                                <button onClick={() => {if (PlanOrder.includes(selectedPlan)) {let order = getPlanOrder(); if (order + 1 > PlanOrder.length - 1) {order = -1}; setSelectedPlan(PlanOrder[order + 1])}}} className="HomePage-Plans-ShapeThree-Button HomePage-Plans-ShapeThree-Buttons-Right">
                                    <span className="arrow-right"></span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="HomePage-Plans-Bot" id="HomePage-Plans-id">
                    {/*Industrial*/}
                    <div style={isIndustrialHovered || selectedPlan == "Industrial" ? {background:"#3b2515", transition: "background 0.5s"} : {background:"none", transition: "background 0.5s"}} className={selectedPlan == "Industrial" ? "HomePage-Plans-Industrial-Selected" : "HomePage-Plans-Industrial"}  onClick={() => {setSelectedPlan("Industrial")}} onMouseEnter={() => {setIsIndustrialHovered(true)}} onMouseLeave={() => {setIsIndustrialHovered(false)}}>
                        <div className="HomePage-Plans-Industrial-Icon">
                            <img width={"60%"} src={IndustiralIcon} alt="" />
                        </div>
                        <div className="HomePage-Plans-Industrial-Text-Titel">Industrial</div>
                        <div style={isIndustrialHovered || selectedPlan == "Industrial" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Text-desc">Maximize your company’s energy by controlling your energy-flow.</div>
                        <div onClick={() => navigate("/Industrie")} style={isIndustrialHovered || selectedPlan == "Industrial" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Button">{"Learn more ->"}</div>
                    </div>
                    {/*Residential*/}
                    <div style={isResidentialHovered || selectedPlan == "Residential" ? {background:"#3b2515", transition: "background 0.5s"} : {background:"none", transition: "background 0.5s"}} className={selectedPlan == "Residential" ? "HomePage-Plans-Industrial-Selected" : "HomePage-Plans-Industrial"}  onClick={() => {setSelectedPlan("Residential")}} onMouseEnter={() => {setIsResidentialHovered(true)}} onMouseLeave={() => {setIsResidentialHovered(false)}}>
                        <div className="HomePage-Plans-Industrial-Icon">
                            <img width={"70%"} src={ResidentialIcon} alt="" />
                        </div>
                        <div className="HomePage-Plans-Industrial-Text-Titel">Residential</div>
                        <div style={isResidentialHovered || selectedPlan == "Residential" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Text-desc">Optimize your battery setup by importing and exporting at the right time.</div>
                        <div onClick={() => navigate("/Residentieel")} style={isResidentialHovered || selectedPlan == "Residential" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Button">{"Learn more ->"}</div>
                    </div>
                    {/*landbouw*/}
                    <div style={isAgricultureHovered || selectedPlan == "Agriculture" ? {background:"#3b2515", transition: "background 0.5s"} : {background:"none", transition: "background 0.5s"}} className={selectedPlan == "Agriculture" ? "HomePage-Plans-Industrial-Selected" : "HomePage-Plans-Industrial"} onClick={() => {setSelectedPlan("Agriculture")}} onMouseEnter={() => {setIsAgricultureHovered(true)}} onMouseLeave={() => {setIsAgricultureHovered(false)}}>
                        <div className="HomePage-Plans-Industrial-Icon">
                            <img width={"60%"} src={AgricultureIcon} alt="" />
                        </div>
                        <div className="HomePage-Plans-Industrial-Text-Titel">Agriculture</div>
                        <div style={isAgricultureHovered || selectedPlan == "Agriculture" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Text-desc">Avoid significant energy costs thanks to VLIF and increase your energy storage.</div>
                        <div onClick={() => navigate("/Horeca")} style={isAgricultureHovered || selectedPlan == "Agriculture" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Button">{"Learn more ->"}</div>
                    </div>
                    {/*horeca*/}
                    <div style={isHospitalityHoverd || selectedPlan == "Hospitality" ? {background:"#3b2515", transition: "background 0.5s"} : {background:"none", transition: "background 0.5s"}} className={selectedPlan == "Hospitality" ? "HomePage-Plans-Industrial-Selected" : "HomePage-Plans-Industrial"} onClick={() => {setSelectedPlan("Hospitality")}} onMouseEnter={() => {setIsHospitalityHoverd(true)}} onMouseLeave={() => {setIsHospitalityHoverd(false)}}>
                        <div className="HomePage-Plans-Industrial-Icon">
                            <img style={{marginTop:"-5px"}} width={"60%"} src={HospitalityIcon} alt="" />
                        </div>
                        <div className="HomePage-Plans-Industrial-Text-Titel">Hospitality</div>
                        <div style={isHospitalityHoverd || selectedPlan == "Hospitality" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Text-desc">Work with the help of day-ahead hourly prices to efficiently run your hospitality business.</div>
                        <div onClick={() => navigate("/Landbouw")} style={isHospitalityHoverd || selectedPlan == "Hospitality" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Button">{"Learn more ->"}</div>
                    </div>
                    {/*Keypoints*/}
                    <div className="HomePage-Plans-Keypoints">
                        <div className="HomePage-Plans-Keypoints-Title">Plan Keypoints</div>
                        <div className="HomePage-Plans-Keypoints-Text-Container">
                            <div className="HomePage-Plans-Keypoints-Text"><div className="HomePage-Plans-Keypoints-bullet"></div> <div>{KeypointsPerPlan[selectedPlan][0]}</div></div>
                            <div className="HomePage-Plans-Keypoints-Text"><div className="HomePage-Plans-Keypoints-bullet"></div> <div>{KeypointsPerPlan[selectedPlan][1]}</div></div>
                            <div className="HomePage-Plans-Keypoints-Text"><div className="HomePage-Plans-Keypoints-bullet"></div> <div>{KeypointsPerPlan[selectedPlan][2]}</div></div>
                        </div>
                        <div><button onClick={navigateToProfile} className="HomePage-Plans-Keypoints-Button">View details</button></div>
                    </div>
                </div>
                
            </div>
            <div className="HomePage-DayAhead">
                <div className="HomePage-DayAhead-Graph">
                    <DayAheadPriceChart dateToday={new Date()}/>
                </div>
                <div className="HomePage-DayAhead-Text">
                    <img width={"100%"} height={"110%"} src={ShapeFour} alt="" />
                    <div className="HomePage-DayAhead-Text-Container">
                        <div className="HomePage-DayAhead-Text-Title">Price based decisions</div>
                        <div className="HomePage-DayAhead-Text-Desc">The Firncontroller makes decisions based on real-time price data by utilizing the day-ahead price. Therefor it knows when it is best to sell or to buy energy, so that you get the most out of your solar-installation without having to micromanage everything.</div>
                    </div>
                </div>
            </div>

            <div className="HomePage-Contact" id="HomePage-Contanct-Id">
                <div style={{visibility:"hidden"}}>--------------</div>
                <div className="HomePage-Contact-Item">+32 56 19 88 77</div>
                <div className="HomePage-Contact-Item">sales@firnenergy.com</div>
                <div className="HomePage-Contact-Item">Parkstraat 23, 8930 Menen</div>
                <div style={{visibility:"hidden"}}>--------------</div>
            </div>
        

        </div>
        
            
    )

}

export default WebHomePage;