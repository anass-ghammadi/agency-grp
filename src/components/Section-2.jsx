import Image1 from '../assets/Build.png'
import Image2 from '../assets/cover.png'
import Image3 from '../assets/cover2.png'
import Image4 from '../assets/cover2.png'
import Reactlogo from '../assets/react-logo.svg'
import Etoile from '../assets/etoile.svg'

function Main2()  {
    return (
        <>
        <div className="  flex flex-row items-center  py-10 space-x-4 overflow-x-scroll lg:justify-center">
            <div className="relative flex flex-col justify-center items-center rounded-3xl w-52 h-[21rem] drop-shadow-lg  " style={{ background:"linear-gradient(185.55deg, rgba(141, 23, 15, 0.49) 3.08%, #640685 80.27%)"}}>
                
                <div className="absolute top-3 right-3">
                    <img className="w-8" src={Reactlogo} ></img>
                </div>           
                <div className="main-2-img-1">
                    <img src={Image1}></img>
                </div>
               
                    <div className="text-center text-white font-bold w-32"><h2>Advanced Development in SwiftUI</h2></div>
                <div className="absolute bottom-2">
                    <img src={Etoile}></img>
                </div>               
            </div>

            <div className=" relative flex flex-col justify-center items-center rounded-3xl w-52 h-[21rem] drop-shadow-lg " style={{ background:"linear-gradient(201.27deg, rgba(87, 15, 141, 0.69) 2.14%, rgba(98, 14, 138, 0.713396) 33.33%, #E80069 82.13%)"}}>
                            
                <div className="">
                    <img src={Image2}></img>
                </div>
                <div className="absolute top-3 right-3">
                    <img className="w-8"src={Reactlogo} ></img>
                </div>
                    <div className="text-white text-center font-bold w-32"><h2>Advanced Development in SwiftUI</h2></div>
                <div className="absolute bottom-2">
                    <img src={Etoile}></img>
                </div>               
            </div>

            <div className=" relative flex flex-col justify-center items-center rounded-3xl w-52 h-[21rem] drop-shadow-lg  " style={{ background:"linear-gradient(185.55deg, #7453E3 3.08%, #18204D 92.41%)"}}>
                            
                <div className="content-img">
                    <img src={Image3}></img>
                </div>
                <div className="absolute top-3 right-3">
                    <img className="w-8"src={Reactlogo} ></img>
                </div>
                    <div className="text-white  text-center font-bold w-32"><h2>Advanced Development in SwiftUI</h2></div>
                <div className="absolute bottom-2">
                    <img src={Etoile}></img>
                </div>               
            </div>

            <div className=" relative flex flex-col justify-center items-center rounded-3xl w-52 h-[21rem] drop-shadow-lg " style={{ background:"linear-gradient(185.55deg, rgba(87, 15, 141, 0.69) 3.08%, #F35BA0 92.41%)"}}>
                
                <div className="absolute top-3 right-3">
                    <img className="w-8 "src={Reactlogo} ></img>
                </div> 

                <div className="content-img">
                    <img src={Image4}></img>
                </div>
                
                    <div className="text-white text-center font-bold w-32"><h2>Advanced Development in SwiftUI</h2></div>
                <div className="absolute bottom-2 ">
                    <img src={Etoile}></img>
                </div>               
            </div>
        </div>
        </>
    )
    
}
export default Main2;