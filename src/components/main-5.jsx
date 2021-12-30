import '../styles/main-5.css';
import Apple from '../assets/apple.svg'
import IA from '../assets/Group76.png'

function Main5 () 
{
    return (
        <>
            <div className="main-5-global">
                <div className="main-5-txt">
                    <p>NEW RELEASE</p>
                    <h4>Available on iPhone and iPad</h4>
                    <p>Our iOS app has been 100% developed with SwiftUI. If you have an M1 Mac, you can even use it as a desktop app.</p>
                </div>
                <div className="main-5-btn">
                    <button type="submit" className="btn-submit-1">
                        <img src={Apple}/>
                        <div className="btn-flex">
                        <p>Download on the</p>
                        <h4>App Store</h4>
                        </div>
                    </button>
                </div>
                <div className="main-5-img">
                    <img src={IA}/>
                </div>
            </div>

        </>
    )
    
}
export default Main5;