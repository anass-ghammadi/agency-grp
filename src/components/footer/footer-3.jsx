import '../../styles/footer-styles/footer-3.css';
import Square from '../../assets/square.svg'
import Apple from '../../assets/apple1.svg'
import Google from '../../assets/google.svg'
import Amazon from '../../assets/amazon.svg'


function Footer3 () 
{
    return (
        <>
            <div className="footer-3-global">
                <div className="footer-3-1">
                    <img src={Square} />
                    <img src={Apple} />
                </div>
                <div className="footer-3-2">
                    <img src={Google} />
                    <img src={Amazon} />
                </div>
            </div>
        </>
    )
}

export default Footer3;