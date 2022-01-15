
import Protopie from '../assets/icone-1.svg'
import Webflow from '../assets/webflow-logo.svg'
import Framer from '../assets/framer-logo.svg'
import Figma from '../assets/figma-logo.svg'
import Sketch from '../assets/sketch-logo.svg'
import Reactlogo from '../assets/react-logo.svg'
import Image from '../assets/Swift.svg'
import IconS from '../assets/swiftui-logo.svg'
import Etoile from '../assets/etoile.svg'
import ImageS from '../assets/SwiftUI_L.svg'
function Main1 () { 
    return (
        <>
            <div className="flex flex-col items-center justify-center py-20 md:flex-row md:items-end md:space-x-4 lg:space-x-24 xl:space-x-38">
                <div className=" flex flex-col space-y-3 w-80 py-5 md:py-0 ">
                    <p className="text-gray-400 text-xs text-center md:text-left">120 HOURS OF COURSES</p>
                    <h2 className="text-lg font-medium text-center md:text-left">Learn the best tools and platforms</h2>
                    <p className="text-center md:text-left">We focus on industry leading platforms so thatyou can be prepared for your next job. Then we teach all we can about them.</p>
                </div>
                <div className="flex flex-row items-center justify-center flex-start space-x-4  ml-0">
                    
                    <img className="sm:block hidden" src={Protopie}></img>
                    <img  className="ml-0" src={Webflow}></img>
                    <img className="sm:block hidden" src={Framer}></img>
                    <img src={IconS}></img>
                    <img src={Figma}></img>
                    <img src={Sketch}></img>
                    <img src={Reactlogo}></img>
                    
                </div>
            </div>
            <div className="flex flex-row  items-center  space-x-12  lg:justify-center px-6  section-scroll py-10">
                    <div className="bg-white rounded-3xl flex flex-row w-96 h-80 p-3 drop-shadow-lg space-x-2 ">
                        <div className=" w-52">
                            <h3 className="text-lg font-medium">Title ipsum</h3>
                            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum d</p>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-2xl hover:scale-105  duration-700 drop-shadow-lg"style={{ background: "linear-gradient(185.55deg, rgba(87, 15, 141, 0.69) 3.08%, #F35BA0 92.41%)" }}>
                                
                                <div className="absolute right-2 top-2 ">
                                    <img className="w-8" src={IconS}></img>
                                </div>
                                <div className="content-img">
                                    <img src={Image}></img>
                                </div>
                                
                                <div className="text-center text-white font-bold w-32">
                                    <h2>Advanced Development in SwiftUI</h2>
                                </div>
                                <div className="absolute bottom-2">
                                    <img src={Etoile}></img>
                                </div>
                            
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl flex flex-row w-96 h-80 p-3 drop-shadow-lg space-x-2">
                        <div className="flex flex-col items-center justify-center rounded-2xl hover:scale-105  duration-700  drop-shadow-lg"style={{ background: "linear-gradient(200.41deg, #4316DB 2.46%, #9076E7 94.91%)" }}>
                                <div className="absolute right-2 top-2">
                                    <img className="w-8" src={Reactlogo} ></img>
                                </div>
                                <div className="content-img">
                                    <img src={ImageS}></img>
                                </div>
                               
                                <div className="text-center text-white font-bold w-32">
                                    <h2>Advanced Development in SwiftUI</h2>
                                </div>
                                <div className="absolute bottom-2">
                                    <img src={Etoile}></img>
                                </div>
                            
                        </div>
                        <div className="w-52">
                            <h3 className="text-lg font-medium">Title ipsum </h3>
                            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum d</p>
                        </div>
                    </div>
            </div>
        </>
    )
    
}


export default Main1