import Image1 from '../assets/Build.png'
import Image2 from '../assets/cover.png'
import Image3 from '../assets/cover2.png'
import Image4 from '../assets/cover2.png'
import Reactlogo from '../assets/react-logo.svg'
import Etoile from '../assets/etoile.svg'
import '../styles/main-2.css'
function Main2()  {
    return (
        <>
        <div className="container-m2">
            <div className="main-2-image-1">
                            
                <div className="main-2-img-1">
                    <img src={Image1}></img>
                </div>
                <div className="content-icon-1">
                    <img src={Reactlogo} ></img>
                </div>
                    <div className="content-txt"><h2>Advanced Development in SwiftUI</h2></div>
                <div className="content-icon-2">
                    <img src={Etoile}></img>
                </div>               
            </div>

            <div className="main-2-image-2">
                            
                <div className="content-img">
                    <img src={Image2}></img>
                </div>
                <div className="content-icon-1">
                    <img src={Reactlogo} ></img>
                </div>
                    <div className="content-txt"><h2>Advanced Development in SwiftUI</h2></div>
                <div className="content-icon-2">
                    <img src={Etoile}></img>
                </div>               
            </div>

            <div className="main-2-image-3">
                            
                <div className="content-img">
                    <img src={Image3}></img>
                </div>
                <div className="content-icon-1">
                    <img src={Reactlogo} ></img>
                </div>
                    <div className="content-txt"><h2>Advanced Development in SwiftUI</h2></div>
                <div className="content-icon-2">
                    <img src={Etoile}></img>
                </div>               
            </div>

            <div className="main-2-image-4">
                            
                <div className="content-img">
                    <img src={Image4}></img>
                </div>
                <div className="content-icon-1">
                    <img src={Reactlogo} ></img>
                </div>
                    <div className="content-txt"><h2>Advanced Development in SwiftUI</h2></div>
                <div className="content-icon-2">
                    <img src={Etoile}></img>
                </div>               
            </div>
        </div>
        </>
    )
    
}
export default Main2;