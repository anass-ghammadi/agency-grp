
import Linkedin from '../../assets/icons_linkedin.svg';
import Facebook from '../../assets/brandico_facebook.svg';
import Github from '../../assets/github.svg';


function Footer4 ()
{
    return(
        <>
            <div className="flex flex-col items-center justify-center h-[750px] " style={{background:"linear-gradient(253.15deg, #5A007A -0.35%, rgba(143, 36, 87, 0.81) 101.1%)"}}>
                <div className="flex flex-col items-center justify-center space-y-20">
                    <div className="text-white text-4xl font-bold">
                        <h1>LOGO</h1>
                    </div>
                    <div className="text-white text-center">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ornare posuere. Sed erat massa, dictum consequat fermentum sit amet, imperdiet at erat.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-white md:flex-row md:space-x-6">
                        <p>lorem ipsum dolor sit am</p>
                        <p><strong>Phone&nbsp;:&nbsp;</strong>0 3 33 33 33 33</p>
                        <p><strong>Email&nbsp;:&nbsp;</strong>Contact@agency-grp.com</p>
                    </div>
                    <div className="flex  items-center justify-center space-x-10">
                        <img src={Linkedin}/>
                        <img src={Facebook}/>
                        <img src={Github}/>
                    </div>
                    <div className="text-white">
                        <p>Copyright @All Right recovered By Agency</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer4;