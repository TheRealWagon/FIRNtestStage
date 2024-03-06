import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { GrLanguage } from "react-icons/gr";
import { HiMenu } from 'react-icons/hi';
import {slide} from 'react-burger-menu'
import classNames from 'classnames'
import { hasFlag } from 'country-flag-icons'
import { GB, FR, BE } from 'country-flag-icons/react/3x2'

import "./languageSelector.css"

let countries = [
  {
    code: "fr",
    name: "Français",
    country_code: "FR",
    flag: <FR/>
  },
  {
    code: "en",
    name: "English",
    country_code: "EN",
    flag: <GB/>
  },
  {
    code: "nl",
    name: "Nederlands",
    country_code: "NL",
    flag: <BE/>
  }
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log(i18n.language);
    console.log("this runs");
  })

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
        <div className="Language-Burger-Menu" onClick={toggleMenu} style={{width:"62.5px", height:"25px", display:"flex", alignItems:"center", justifyContent: "space-between"}}>
            <div style={{width:"25px", display:"flex", alignItems:"center"}}>{countries.find((lng) => lng.code === i18n.language).flag}</div><div style={{fontSize:"1.2rem", color:"white"}}>{countries.find((lng) => lng.code === i18n.language).country_code}</div>
        </div>
        {isOpen && (
            <div
                className="Language-Burger-Menu-DropDown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {countries.map((lng) => (
                    <div className="Language-Burger-Menu-DropDown-Item" onClick={() => {
                        i18n.changeLanguage(lng.code);
                        setIsOpen(false);
                    }}>
                        <div style={{width:"25px", marginRight:"10px", display:"flex", alignItems:"center"}}>{lng.flag}</div>
                        <div style={{fontSize:"1.2rem", color:"black"}}>{lng.country_code}</div>
                    </div>
                ))}
            </div>
        )}
    </>
  );
};

export default LanguageSelector;