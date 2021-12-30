import '../styles/main-1.css';
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
            <div className="main">
                <div className="main-text">
                    <p>120 HOURS OF COURSES</p>
                    <h2>Learn the best tools and platforms</h2>
                    <p>We focus on industry leading platforms so thatyou can be prepared for your next job. Then we teach all we can about them.</p>
                </div>
                <div className="main-icon">
                    
                    <img src={Protopie}></img>
                    <img src={Webflow}></img>
                    <img src={Framer}></img>
                    <img src={IconS}></img>
                    <img src={Figma}></img>
                    <img src={Sketch}></img>
                    <img src={Reactlogo}></img>
                    
                </div>
            </div>
            <div className="main-1">
                    <div className="container-1">
                        <div>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum d</p>
                        </div>
                        <div className="main-content-1-image">
                            
                                <div className="content-img">
                                    <img src={Image}></img>
                                </div>
                                <div className="content-icon-1">
                                    <img src={IconS}></img>
                                </div>
                                <div className="content-txt"><h2>Advanced Development in SwiftUI</h2></div>
                                <div className="content-icon-2">
                                    <img src={Etoile}></img>
                                </div>
                            
                        </div>
                    </div>
                    <div className="container-2">
                        <div className="main-content-2-image">
                            
                                <div className="content-img">
                                    <img src={ImageS}></img>
                                </div>
                                <div className="content-icon-1">
                                    <img src={Reactlogo} ></img>
                                </div>
                                <div className="content-txt"><h2>Advanced Development in SwiftUI</h2></div>
                                <div className="content-icon-2">
                                    <img src={Etoile}></img>
                                </div>
                            
                        </div>
                        <div>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum d</p>
                        </div>
                    </div>
            </div>
        </>
    )
    
}


export default Main1