import Reactlogo from"../../../assets/react-logo.svg"

function Section2 ()
{
    return (
        <div className=" flex flex-col items-center justify-center  md:flex-row md:justify-around  py-20">
            <div className="flex flex-col items-center justify-center space-y-2 py-10 md:items-start">
                <p className="text-sm text-gray-400">A propos de l'agence</p>
                <h2 className="text-xl font-bold">Chiffres Importants</h2>
                <div className="flex items-center justify-center lg:space-x-8">
                    <div className="flex flex-col items-center justify-center" >
                        <p className="text-2xl font-bold text-blue-500">63+</p>
                        <p className="text-sm text-gray-400">Projet terminés</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-blue-500">1,000,000+</p>
                        <p className="text-sm text-gray-400">Lignes de codes</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-blue-500">10+</p>
                        <p className="text-sm text-gray-400">Certifications</p>
                    </div>
                </div>
            
            </div>
            <div className=" flex items-center justify-center ">
                        <div className="flex relative top-8 w-64  right-[15px] h-[265px] drop-shadow-2xl  rounded-b-3xl skew-y-6" style={{ background: "linear-gradient(180deg, #048BD7 0%, rgba(255, 0, 0, 0.53) 81.77%)" }}></div>
                        <div className="absolute flex flex-col justify-center   w-72 h-[300px] p-5 backdrop-blur-xl bg-white/30 rounded-b-3xl rounded-tr-3xl">
                            <img className="w-12 absolute top-3 right-3 " src={Reactlogo}></img>
                            <h4 className="font-bold text-lg text-left">SwiftUI Handbook</h4>
                            <p>A comprehensive series of tutorials covering Xcode, SwiftUI and all the layout and development techniques</p>
                        </div>
            </div>
        </div>
    )
}
export default Section2