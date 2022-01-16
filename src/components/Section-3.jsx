import Reactlogo from '../assets/react-logo.svg'

function Main3() {
    return (
        <>
            <div className="flex flex-col items-center justify-between lg:flex-row lg:py-12 ">
                <div className="flex flex-col  justify-center w-80 space-y-2 py-10 pl-4 ">
                    <p className="text-xs text-gray-400 ">PREMIUM TUTORIALS</p>
                    <h3 className="text-lg font-bold ">Tutorials to guide you beyond</h3>
                    <p>Once you’ve completed the courses, learn from our quick design and code tutorials to strengthen your knowledge</p>

                </div>
                <div className=" flex items-center justify-center p-12 ">
                    <div className="flex relative top-8 w-64  right-[15px] h-[265px] drop-shadow-2xl  rounded-b-3xl skew-y-6" style={{ background: "linear-gradient(180deg, rgba(64, 141, 213, 0.37) 17.9%, #630B8C 100%)" }}></div>
                    <div className=" absolute flex flex-col justify-center   w-72 h-[300px] p-5 backdrop-blur-xl bg-white/30 rounded-b-3xl rounded-tr-3xl">

                        <img className="w-12 absolute top-3 right-3 " src={Reactlogo}></img>
                        <h4 className="font-bold text-lg text-left">SwiftUI Handbook</h4>
                        <p>A comprehensive series of tutorials covering Xcode, SwiftUI and all the layout and development techniques</p>

                    </div>

                </div>

                <div className=" flex items-center justify-center p-12">
                    <div className="flex relative top-8 w-64  right-[15px] h-[265px] drop-shadow-2xl  rounded-b-3xl skew-y-6" style={{ background: "linear-gradient(180deg, #048BD7 0%, rgba(255, 0, 0, 0.53) 81.77%)" }}></div>
                    <div className="absolute flex flex-col justify-center   w-72 h-[300px] p-5 backdrop-blur-xl bg-white/30 rounded-b-3xl rounded-tr-3xl">
                        <img className="w-12 absolute top-3 right-3 " src={Reactlogo}></img>
                        <h4 className="font-bold text-lg text-left">SwiftUI Handbook</h4>
                        <p>A comprehensive series of tutorials covering Xcode, SwiftUI and all the layout and development techniques</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main3;