import { useState } from 'react';
import Menu from"../../Menu/Menu"
import MenuMobile from"../../Menu/menu-mobile"
import Cube1 from "../../../assets/cube1.svg"
import Ae from "../../../assets/ae-logo.svg"
import Figma from "../../../assets/figma-logo.svg"
import Unity from "../../../assets/unity-logo.svg"
import Ui from "../../../assets/ui-logo.svg"
import Flutter from "../../../assets/flutter-logo.svg"
import React from "../../../assets/react-logo.svg"
import Vue from "../../../assets/vue-logo.svg"
import Js from "../../../assets/js-logo.svg"
import Cube2 from "../../../assets/cube2.svg"
   
function HeroS ()
{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex flex-col   min-h-max w-full h-screen mx-auto " style={{ background:"linear-gradient(251.55deg, rgba(119, 23, 194, 0.84) 13.25%, rgba(82, 22, 160, 0.891418) 45.83%, rgba(31, 21, 140, 0.92) 90.55%)"}}>
                <Menu toggle={toggle} />
                <MenuMobile isOpen={isOpen} toggle={toggle} />
                {/*waves*/}
                <div className="flex flex-col">
                    <div className="flex flex-col items-start justify-center  mx-auto  max-w-7xl h-full space-y-2 w-72 sm:w-96  md:mx-16 xl:mx-36 ">
                        <img className="" src={Cube1}/>
                        <h1 className="text-white text-2xl font-bold md:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
                        <p className="text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sagittis sagittis massa molestie in posuere bibendum. Diam sit aliquet congue eget suscipit tincidunt. Sapien, iaculis tempor facilisis diam aliquam. Fringilla orci, sollicitudin nec condimentum. Gravida nibh ut arcu ridiculus. Massa interdum sagittis senectus donec elementum, magna mus imperdiet.</p>
                    </div>
                    <div className=" flex flex-row items-center justify-center mx-auto max-w-7xl h-full space-x-3 py-10 md:flex-row-reverse md:mx-16 xl:mx-36 md:items-end md:justify-start">
                        <img className="w-24 md:w-32 sm:block hidden" src={Cube2}/>                   
                        <img  className="sm:block hidden md:w-14"src={Ae}/>
                        <img className="sm:block hidden md:w-14"src={Figma}/>
                        <img  className="sm:block hidden md:w-14"src={Unity}/>
                        <img className="sm:block hidden md:w-14" src={Ui}/>
                        <img  className="w-14 md:w-14" src={Flutter}/>
                        <img className="w-14 md:w-14" src={React}/>
                        <img  className="w-14 md:w-14"src={Vue}/>
                        <img  className="w-14 md:w-14" src={Js}/>   
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroS