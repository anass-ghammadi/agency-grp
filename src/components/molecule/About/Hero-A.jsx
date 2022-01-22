import { useState } from 'react';
import Menu from "../../Menu/Menu"
import MenuMobile from "../../Menu/menu-mobile"
import Cover1 from "../../../assets/Build.png";
import Etoile from "../../../assets/etoile.svg";

function HeroA() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className=" flex flex-col items-center justify-center" style={{ background: "linear-gradient(270.28deg, rgba(14, 150, 169, 0.65) 23.98%, rgba(71, 30, 158, 0.81) 88.03%)" }}>
                <Menu toggle={toggle} />
                <MenuMobile isOpen={isOpen} toggle={toggle} />
                <div className=" flex flex-col justify-center mx-auto  max-w-7xl  w-full h-full py-10 md:flex-row  md:justify-around">
                    <div className="h-full flex translate-y-12">

                        <h1 className="text-2xl text-white font-semibold flex items-center space-x-4"><span className="w-4 border h-min"></span> <div>A propos de l'agence</div></h1>
                    </div>
                    <div className="flex flex-col items-center justify-between p-3 rounded-2xl max-w-[270px] lg:w-64 h-[24rem] drop-shadow-lg hover:scale-125  duration-700 " style={{ background: "linear-gradient(185.55deg, rgba(141, 23, 15, 0.49) 3.08%, #640685 80.27%)" }}>
                        <img src={Cover1} />
                        <h2 className="text-xl text-center font-bold text-white">Advanced Development </h2>
                        <p className="text-white text-center">Des Architectes du web, des Réalisateurs d'idées.</p>
                        <img src={Etoile} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroA