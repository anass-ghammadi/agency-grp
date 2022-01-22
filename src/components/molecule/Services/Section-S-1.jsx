import Cover1 from "../../../assets/cover2.png";
import Cover2 from "../../../assets/cover.png";
import Cover3 from "../../../assets/cover3.png";
import Etoile from "../../../assets/etoile.svg";

function Section1 ()
{
    return (
        <div className="flex items-center justify-start section-scroll py-16 px-4 md:justify-center space-x-8">
            <div className="flex flex-col items-center justify-between p-3 rounded-2xl min-w-[200px] lg:w-64 h-[24rem] drop-shadow-lg hover:scale-125  duration-700 " style={{background:"linear-gradient(185.55deg, rgba(141, 23, 15, 0.49) 3.08%, #640685 80.27%)"}}>
                <img src={Cover2}/>
                <h2 className="text-xl text-center font-bold text-white">Advanced Development </h2>
                <p className="text-white text-center">Des Architectes du web, des Réalisateurs d'idées.</p>
                <img src={Etoile}/>
            </div>

            <div className="flex flex-col items-center justify-between p-3 rounded-2xl min-w-[200px] lg:w-64 h-[24rem] drop-shadow-lg hover:scale-125  duration-700" style={{background:"linear-gradient(201.27deg, rgba(87, 15, 141, 0.69) 2.14%, rgba(98, 14, 138, 0.713396) 33.33%, #E80069 82.13%)"}}>
                <img src={Cover3}/>
                <h2 className="text-xl text-center font-bold text-white">Web Designers</h2>
                <p className="text-white text-center">Des Concepteurs, Des Créateurs d'expérience.</p>
                <img src={Etoile}/>
            </div>

            <div className="flex flex-col items-center justify-between p-3 rounded-2xl min-w-[200px] lg:w-64 h-[24rem] drop-shadow-lg hover:scale-125  duration-700" style={{background:"linear-gradient(185.55deg, #7453E3 3.08%, #18204D 92.41%)"}}>
                <img src={Cover1}/>
                <h2 className="text-xl text-center font-bold text-white">Business Intelligence</h2>
                <p className="text-white text-center">Des Stratéges techniques, des Tacticiens de génies.</p>
                <img src={Etoile}/>
            </div>
        </div>
    )
}
export default Section1;