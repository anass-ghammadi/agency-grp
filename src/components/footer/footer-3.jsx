
import Square from '../../assets/square.svg'
import Apple from '../../assets/apple1.svg'
import Google from '../../assets/google.svg'
import Amazon from '../../assets/amazon-2.svg'
import Shopify from '../../assets/shopify.svg'


function Footer3 () 
{
    return (
        <>
            <div className="flex flex-row items-center justify-start px-4 py-10 space-x-10  section-scroll md:justify-center ">
                
                    <img src={Square} />
                    <img src={Apple} />  
                    <img src={Google} />
                    <img className="w-28 pt-3"src={Amazon} />
                    <img className="w-28"src={Shopify} />
            </div>
        </>
    )
}

export default Footer3;