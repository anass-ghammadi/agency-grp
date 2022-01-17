
import Square from '../../assets/square.svg'
import Apple from '../../assets/apple1.svg'
import Google from '../../assets/google.svg'
import Amazon from '../../assets/amazon.svg'


function Footer3 () 
{
    return (
        <>
            <div className="flex flex-wrap items-end justify-center py-10 space-x-10  space-y-6 md:space-y-0">
                <div className="flex justify-center space-x-10 ">
                    <img src={Square} />
                    <img src={Apple} />
                </div> 
                <div className="flex  itmes-center justify-center space-x-10">   
                    <img src={Google} />
                    <img src={Amazon} />
                </div>
            </div>
        </>
    )
}

export default Footer3;