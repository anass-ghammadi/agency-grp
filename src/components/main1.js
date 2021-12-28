import '../styles/main1.css';
import Icone from '../assets/icone.svg'
import Image from '../assets/Swift.svg'
import IconS from '../assets/swiftui-logo.svg'
import Etoile from '../assets/etoile.svg'
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
                    <div>
                        <img src={Icone}></img>
                    </div>
                </div>
                <div className="main-content-1">
                    
                        <div>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum d</p>
                        </div>
                        <div className="main-content-1-image">
                            <div className="container">
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
                    
                </div>
            </div>
            
        </>
    )
    
}


export default Main1