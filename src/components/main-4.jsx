import '../styles/main-4.css';
import Carte1 from '../assets/Group26.svg';
import Carte2 from '../assets/Group28.svg';
import Carte3 from '../assets/Group29.svg';

function Main4 () 
{
    return (
        <>
            <div className="main-4-global">
                <div className="main-4-carte">
                    <img className="img-1" src={Carte1}></img>
                    <img className="img-2" src={Carte2}></img>
                    <img className="img-3" src={Carte3}></img>
                </div>
                <div className="main-4-txt">
                    <p>CREATE A PROFILE</p>
                    <h4>Get certificates</h4>
                    <p>After passing a test, we’ll award you with an online certificate. You can add them to your profile after completing the courses.</p>
                </div>
            </div>
        </>
    )
}
export default Main4;
