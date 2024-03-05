import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
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

  const [isOpen, setIsOpen] = useState(false);
  const [activeLng, setActiveLng] = useState("en"); //use cookies to save lng state

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
            <div style={{width:"25px", display:"flex", alignItems:"center"}}>{countries.find((lng) => lng.code === activeLng).flag}</div><div style={{fontSize:"1.2rem", color:"white"}}>{countries.find((lng) => lng.code === activeLng).country_code}</div>
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
                        setActiveLng(lng.code);
                        setIsOpen(false);
                    }}>
                        <div style={{width:"25px", marginRight:"10px", display:"flex", alignItems:"center"}}>{lng.flag}</div>
                        <div style={{fontSize:"1.2rem", color:"black"}}>{lng.country_code}</div>
                    </div>
                ))}
            </div>
        )}
    </>
    
    // <div className="relative">
    //   <Menu as="div" className="relative inline-block text-left">
    //     <Menu.Button
    //       className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
    //       onClick={() => setIsOpen(!isOpen)}
    //     >
    //       <GlobeAltIcon className="h-5 w-5 mr-2" />
    //     </Menu.Button>
    //     <Transition
    //       show={isOpen}
    //       as={Fragment}
    //       enter="transition ease-out duration-100"
    //       enterFrom="transform opacity-0 scale-95"
    //       enterTo="transform opacity-100 scale-100"
    //       leave="transition ease-in duration-75"
    //       leaveFrom="transform opacity-100 scale-100"
    //       leaveTo="transform opacity-0 scale-95"
    //     >
    //       <Menu.Items
    //         static
    //         className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    //       >
    //         <div className="py-1">
    //           {countries.map((lng) => (
    //             <Menu.Item key={lng.code}>
    //               {({ active }) => (
    //                 <button
    //                   className={classNames(
    //                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                     'block w-full text-left px-4 py-2 text-sm'
    //                   )}
    //                   onClick={() => {
    //                     i18n.changeLanguage(lng.code);
    //                     setIsOpen(false);
    //                   }}
    //                   disabled={i18n.language === lng.code}
    //                 >
    //                   <span className={`fi fi-${lng.country_code} mr-2`}></span>
    //                   {lng.name}
    //                 </button>
    //               )}
    //             </Menu.Item>
    //           ))}
    //         </div>
    //       </Menu.Items>
    //     </Transition>
    //   </Menu>
    // </div>
  );
};

export default LanguageSelector;