import Reactlogo from '../../../assets/react-logo.svg'

function Carte3 ()
{
    return (
        <>
            <div className="flex flex-col w-56 h-36 lg:w-96 lg:h-56 rounded-3xl justify-between p-4 shadow-lg "style={{ background:"linear-gradient(116.56deg, rgba(25, 171, 218, 0.622976) 8.13%, rgba(35, 177, 169, 0.612323) 34.69%, #231F20 99.49%)"}}>
                <div className=" flex  items-center justify-between  ">
                    <p>UI Design<p>Certificate</p></p>
                    <img src={Reactlogo}></img>
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
export default Carte3