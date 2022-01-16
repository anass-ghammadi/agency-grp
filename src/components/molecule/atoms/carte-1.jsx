import Reactlogo from '../../../assets/react-logo.svg'

function Carte ()
{
    return (
        <>
            <div className="flex flex-col w-56 h-36 lg:w-96 lg:h-56 rounded-3xl justify-between p-4 shadow-lg "style={{ background:"linear-gradient(116.56deg, #4C00C8 2.59%, rgba(212, 48, 75, 0.622976) 21.96%, rgba(149, 26, 111, 0.612323) 63.6%, rgba(253, 63, 51, 0.63) 99.5%, rgba(76, 0, 153, 0.6) 99.5%)"}}>
                <div className=" flex  items-center justify-between  ">
                    <p>UI Design<p>Certificate</p></p>
                    <img className="" src={Reactlogo}></img>
                </div>
                <div className=" flex flex-col content-end space-y-2 ">
                    <div className="w-20 h-[3px] bg-gray-400"></div>
                    <div className="w-36 h-1 bg-gray-400"></div>
                    <div className="w-28 h-1 bg-gray-400"></div>
                    <div className="w-32 h-1 bg-gray-400"></div>
                </div>
            </div>
        </>
    )
}
export default Carte 