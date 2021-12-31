import '../../styles/footer-styles/footer-2.css';
import Img from '../../assets/Roy1.png';

function Footer2 ()
{
    return (
        <>
            <div className="footer-2-global">
                <div className="footer-2-cart">
                    <div className="footer-2-cart-1">
                        <img src={Img}/>
                        <h5>Roy van Rooijen</h5>
                        <p>Design+Code 1 got me fully into using Sketch and I’m amped to discover what’s new in this sequel. Thanks so much for creating it and keep up the great work!</p>
                    </div>
                    <div className="footer-2-cart-2">
                    <img src={Img}/>
                        <h5>Roy van Rooijen</h5>
                        <p>Design+Code 1 got me fully into using Sketch and I’m amped to discover what’s new in this sequel. Thanks so much for creating it and keep up the great work!</p>
                    </div>
                </div>
                <div className="footer-2-txt">
                    <p>TRUSTED BY TEAMS</p>
                    <h4>80,000 people</h4>
                    <p>Many startups look for designers who code and developers who design. They use our courses to help train new hires and expand skill sets.</p>
                </div>
            </div>
        </>
    )
}
export default Footer2;