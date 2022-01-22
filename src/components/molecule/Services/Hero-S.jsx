import { useState } from 'react';
import Menu from "../../Menu/Menu"
import MenuMobile from "../../Menu/menu-mobile"
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

function HeroS() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex flex-col  w-full  mx-auto " style={{ background: "linear-gradient(251.55deg, rgba(119, 23, 194, 0.84) 13.25%, rgba(82, 22, 160, 0.891418) 45.83%, rgba(31, 21, 140, 0.92) 90.55%)" }}>
                <Menu toggle={toggle} />
                <MenuMobile isOpen={isOpen} toggle={toggle} />
                <div className="mx-auto w-full container max-w-7xl space-y-8">
                    <div className="max-w-lg px-4">
                        <img className="" src={Cube1} />
                        <h1 className="text-white text-2xl font-bold md:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
                        <p className="text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sagittis sagittis massa molestie in posuere bibendum. Diam sit aliquet congue eget suscipit tincidunt. Sapien, iaculis tempor facilisis diam aliquam. Fringilla orci, sollicitudin nec condimentum. Gravida nibh ut arcu ridiculus. Massa interdum sagittis senectus donec elementum, magna mus imperdiet.</p>
                    </div>
                    <div className="flex space-x-4 justify-end items-center flex-col-reverse sm:flex-row  overflow-hidden">
                        <div className="flex space-x-4 p-5 overflow-x-auto sm:overflow-visible">
                            <img className="w-12 sm:w-20" src={Ae} />
                            <img className="w-12 sm:w-20" src={Figma} />
                            <img className="w-12 sm:w-20" src={Unity} />
                            <img className="w-12 sm:w-20" src={Ui} />
                            <img className="w-12 sm:w-20" src={Flutter} />
                            <img className="w-12 sm:w-20" src={React} />
                            <img className="w-12 sm:w-20" src={Vue} />
                            <img className="w-12 sm:w-20 " src={Js} />
                        </div>
                        <div className="w-full justify-end flex">
                            <img className="w-24 md:w-40" src={Cube2} />
                        </div>
                    </div>
                </div>
                {/*waves*/}


            </div>
        </>
    )
}
export default HeroS