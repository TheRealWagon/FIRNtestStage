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
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../languageSelector.jsx"

const WebHomePage = () => {

    const {t} = useTranslation();

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
                        <div className="HomePage-Navbar-Items-About HomePage-Navbar-Pointer"><a href="#HomePage-AboutUs-id">{t("NavbarOverons")}</a></div>
                        <div className="HomePage-Navbar-Items-Plans HomePage-Navbar-Pointer"><a href="#HomePage-Plans-id">{t("NavbarPlan")}</a></div>
                        <div className="HomePage-Navbar-Items-Contact HomePage-Navbar-Pointer"><a href="#HomePage-Contanct-Id">{t("Contact")}</a></div>
                        <div className="HomePage-Navbar-Items-Dashboard HomePage-Navbar-Pointer">
                            <div className="HomePage-Navbar-Items-Dashboard-Button">
                                <div className="HomePage-Navbar-Items-Dashboard-Text">Dashboard</div>
                            </div>
                        </div>
                        <div style={{height: "30px", width:"2px", backgroundColor: "white", marginRight: "-30px", marginLeft: "-30px"}}></div>
                        <div>
                            <LanguageSelector></LanguageSelector>
                        </div>
                    </div>
                </div>
                <div className="HomePage-Overlay-Content">
                    <div className="HomePage-Overlay-Content-Element">
                        <div className="HomePage-Overlay-Text">
                            <div className="HomePage-Overlay-Text-Title"> Firn <span className="HomePage-Overlay-Text-Title-Color">Energy</span></div>
                            <div className="HomePage-Overlay-Text-Desc">{t("HoofdtekstDesc")}</div>
                            <div className="HomePage-Overlay-Text-Button-Container">
                                <div><button className="HomePage-Overlay-text-Button">{t("HoofdtekstKnop")}</button></div>
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
                                <p className="HomePage-Plans-ShapeOne-Text-Title-Text">{t("TitelMiddenstuk")}</p>
                            </div>
                            <div className="HomePage-Plans-ShapeOne-Text-Desc">
                                <p>{t("DescMiddenstuk")}</p>
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
                        <div className="HomePage-Plans-Industrial-Text-Titel">{t("IndustrieelTitel")}</div>
                        <div style={isIndustrialHovered || selectedPlan == "Industrial" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Text-desc">{t("IndustrieelDesc")}</div>
                        <div onClick={() => navigate("/Industrie")} style={isIndustrialHovered || selectedPlan == "Industrial" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Button">{t("IndustrieelKnop")}</div>
                    </div>
                    {/*Residential*/}
                    <div style={isResidentialHovered || selectedPlan == "Residential" ? {background:"#3b2515", transition: "background 0.5s"} : {background:"none", transition: "background 0.5s"}} className={selectedPlan == "Residential" ? "HomePage-Plans-Industrial-Selected" : "HomePage-Plans-Industrial"}  onClick={() => {setSelectedPlan("Residential")}} onMouseEnter={() => {setIsResidentialHovered(true)}} onMouseLeave={() => {setIsResidentialHovered(false)}}>
                        <div className="HomePage-Plans-Industrial-Icon">
                            <img width={"70%"} src={ResidentialIcon} alt="" />
                        </div>
                        <div className="HomePage-Plans-Industrial-Text-Titel">{t("ResidentieelTitel")}</div>
                        <div style={isResidentialHovered || selectedPlan == "Residential" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Text-desc">{t("ResidentieelDesc")}</div>
                        <div onClick={() => navigate("/Residentieel")} style={isResidentialHovered || selectedPlan == "Residential" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Button">{t("ResidentieelKnop")}</div>
                    </div>
                    {/*landbouw*/}
                    <div style={isAgricultureHovered || selectedPlan == "Agriculture" ? {background:"#3b2515", transition: "background 0.5s"} : {background:"none", transition: "background 0.5s"}} className={selectedPlan == "Agriculture" ? "HomePage-Plans-Industrial-Selected" : "HomePage-Plans-Industrial"} onClick={() => {setSelectedPlan("Agriculture")}} onMouseEnter={() => {setIsAgricultureHovered(true)}} onMouseLeave={() => {setIsAgricultureHovered(false)}}>
                        <div className="HomePage-Plans-Industrial-Icon">
                            <img width={"60%"} src={AgricultureIcon} alt="" />
                        </div>
                        <div className="HomePage-Plans-Industrial-Text-Titel">{t("LandbouwTitel")}</div>
                        <div style={isAgricultureHovered || selectedPlan == "Agriculture" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Text-desc">{t("LandbouwDesc")}</div>
                        <div onClick={() => navigate("/Horeca")} style={isAgricultureHovered || selectedPlan == "Agriculture" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Button">{t("LandbouwKnop")}</div>
                    </div>
                    {/*horeca*/}
                    <div style={isHospitalityHoverd || selectedPlan == "Hospitality" ? {background:"#3b2515", transition: "background 0.5s"} : {background:"none", transition: "background 0.5s"}} className={selectedPlan == "Hospitality" ? "HomePage-Plans-Industrial-Selected" : "HomePage-Plans-Industrial"} onClick={() => {setSelectedPlan("Hospitality")}} onMouseEnter={() => {setIsHospitalityHoverd(true)}} onMouseLeave={() => {setIsHospitalityHoverd(false)}}>
                        <div className="HomePage-Plans-Industrial-Icon">
                            <img style={{marginTop:"-5px"}} width={"60%"} src={HospitalityIcon} alt="" />
                        </div>
                        <div className="HomePage-Plans-Industrial-Text-Titel">{t("GastvrijheidTitel")}</div>
                        <div style={isHospitalityHoverd || selectedPlan == "Hospitality" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Text-desc">{t("GastvrijheidDesc")}</div>
                        <div onClick={() => navigate("/Landbouw")} style={isHospitalityHoverd || selectedPlan == "Hospitality" ? {} : {visibility:"hidden"}} className="HomePage-Plans-Industrial-Button">{t("GastvrijheidKnop")}</div>
                    </div>
                    {/*Keypoints*/}
                    <div className="HomePage-Plans-Keypoints">
                        <div className="HomePage-Plans-Keypoints-Title">{t("LijstTitel")}</div>
                        <div className="HomePage-Plans-Keypoints-Text-Container">
                            <div className="HomePage-Plans-Keypoints-Text"><div className="HomePage-Plans-Keypoints-bullet"></div> <div>{t("LijstGegeven1")}</div></div>
                            <div className="HomePage-Plans-Keypoints-Text"><div className="HomePage-Plans-Keypoints-bullet"></div> <div>{t("LijstGegeven2")}</div></div>
                            <div className="HomePage-Plans-Keypoints-Text"><div className="HomePage-Plans-Keypoints-bullet"></div> <div>{t("LijstGegeven3")}</div></div>
                        </div>
                        <div><button onClick={navigateToProfile} className="HomePage-Plans-Keypoints-Button">{t("LijstKnop")}</button></div>
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
                        <div className="HomePage-DayAhead-Text-Title">{t("OnderstukTitel")}</div>
                        <div className="HomePage-DayAhead-Text-Desc">{t("OnderstukDesc")}</div>
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