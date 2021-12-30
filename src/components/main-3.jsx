import Reactlogo from '../assets/react-logo.svg'
import '../styles/main-3.css';
function Main3 () {
    return (
        <>
            <div className="main-global">
                <div className="main-global-txt">
                    <p>PREMIUM TUTORIALS</p>
                    <h3>Tutorials to guide you beyond</h3>
                    <p>Once you’ve completed the courses, learn from our quick design and code tutorials to strengthen your knowledge</p>

                </div>
                <div className="main-global-image">
                    <div className="main-global-img-1"></div>
                    <div className="main-global-image-1">
                        
                        <img src={Reactlogo}></img>
                        <h4>SwiftUI Handbook</h4>
                        <p>A comprehensive series of tutorials covering Xcode, SwiftUI and all the layout and development techniques</p> 
   
                    </div> 
                      
                </div>

                <div className="main-global-image">
                    <div className="main-global-img-2"></div>
                    <div className="main-global-image-1">
                        <img src={Reactlogo}></img>
                        <h4>SwiftUI Handbook</h4>
                        <p>A comprehensive series of tutorials covering Xcode, SwiftUI and all the layout and development techniques</p>  
                    </div>   
                </div>
            </div>
        </>
    )
}
export default Main3;