import Reactlogo from '../../../assets/react-logo.svg'

function Discounts ()
{
    return (
        <>
            <div className=" flex flex-col items-center justify-center p-4 hover:scale-110  duration-700">
                <div className="z-10">
                    <img src={Reactlogo}></img>
                </div>
                <div className="rounded-full w-32 h-32 mt-[-30px] drop-shadow-lg" style={{ background:"linear-gradient(180deg, rgba(24, 32, 255, 0.19) 0%, rgba(24, 32, 79, 0.74) 100%)"}}> 
                    <p className="text-center font-semibold text-white mt-10">50% OFF <br/>Agency</p>
                </div>

            </div>
        </>
    )
}
export default Discounts