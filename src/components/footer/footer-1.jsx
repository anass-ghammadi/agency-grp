import '../../styles/footer-styles/footer-1.css';
import Icone from '../../assets/Group80.svg'; 
import Icone2 from '../../assets/Group82.svg';
import Icone3 from '../../assets/Group83.svg'; 
import Icone4 from '../../assets/Group84.svg'; 
function Footer1 ()
{
    return (
        <>
            <div className="footer-1-global">
                <div className="footer-1-txt">
                    <p>START WITH MORE</p>
                    <h4>Get discounts</h4>
                    <p>We’ve partnered with the biggest design tools on the market to help you get started.</p>
                </div>
                <div className="footer-1-img">
                    <img src={Icone}/>
                    <img src={Icone2}/>
                    <img src={Icone3}/>
                    <img src={Icone4}/>
                </div>
            </div>
        </>
    )
}
export default Footer1;