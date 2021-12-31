import '../../styles/footer-styles/footer-4.css';
import Linkedin from '../../assets/icons_linkedin.svg';
import Facebook from '../../assets/brandico_facebook.svg';
import Github from '../../assets/github.svg';


function Footer4 ()
{
    return(
        <>
            <div className="footer-4-global">
                <div className="max">
                    <div className="footer-4-logo">
                        <h1>LOGO</h1>
                    </div>
                    <div className="footer-4-txt">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ornare posuere. Sed erat massa, dictum consequat fermentum sit amet, imperdiet at erat.</p>
                    </div>
                    <div className="footer-4-info">
                        <p>lorem ipsum dolor sit am</p>
                        <p><strong>Phone&nbsp;:&nbsp;</strong>0 3 33 33 33 33</p>
                        <p><strong>Email&nbsp;:&nbsp;</strong>Contact@agency-grp.com</p>
                    </div>
                    <div className="footer-4-rs">
                        <img src={Linkedin}/>
                        <img src={Facebook}/>
                        <img src={Github}/>
                    </div>
                    <div className="footer-4-copyright">
                        <p>Copyright @All Right recovered By Agency</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer4;