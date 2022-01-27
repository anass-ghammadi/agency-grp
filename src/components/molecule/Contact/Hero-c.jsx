import { useState } from 'react';
import Menu from"../../Menu/Menu"
import MenuMobile from"../../Menu/menu-mobile"
import Cover1 from "../../../assets/Build.png";
import Etoile from "../../../assets/etoile.svg";

function Heroc ()
{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <div className=" flex flex-col items-center justify-center" style={{ background:"linear-gradient(270.28deg, rgba(14, 150, 169, 0.65) 23.98%, rgba(71, 30, 158, 0.81) 88.03%)"}}>
                <Menu toggle={toggle} />
                <MenuMobile isOpen={isOpen} toggle={toggle} />
                <div className=" flex flex-col items-center justify-center mx-auto  max-w-7xl h-full space-y-8 py-10 md:flex-row  md:justify-around">
                    <h1 className="text-2xl text-white font-semibold">Nous Contacter</h1>
                    <div className="flex flex-col items-center justify-between p-3 rounded-2xl max-w-[270px] lg:w-64 h-[24rem] drop-shadow-lg hover:scale-125  duration-700 " style={{background:"linear-gradient(185.55deg, rgba(141, 23, 15, 0.49) 3.08%, #640685 80.27%)"}}>
                        <img src={Cover1}/>
                        <p className="text-white text-center"><span className="font-bold">Tel:</span>&nbsp;000000000</p>
                        <p className="text-white text-center"><span className="font-bold">Email:</span>&nbsp;xxxxxxx@gmail.com</p>
                        <p className="text-white text-center"><span className="font-bold">Adresse:</span>&nbsp;Casablanca</p>
                        <img src={Etoile}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Heroc