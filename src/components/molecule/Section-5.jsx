
import Apple from '../../assets/apple.svg'
import IA from '../../assets/Group76.png'

function Main5 () 
{
    return (
        <>
            <div className="flex flex-col items-center justify-center py-36">
                <div className="flex flex-col items-center justify-center px-1 space-y-2">
                    <p className="text-gray-400">NEW RELEASE</p>
                    <h4 className="text-xl font-bold">Available on iPhone and iPad</h4>
                    <p className="text-center">Our iOS app has been 100% developed with SwiftUI. If you have an M1 Mac, you can even use it as a desktop app.</p>
                </div>
                <div className="flex items-center pt-10 hover:scale-125  duration-700">
                    <button type="submit" className=" flex flex-row items-center justify-center  w-48 h-18 rounded-md gap-x-1 z-10" style={{background:"rgba(0, 0, 0, 0.795)"}}>
                        <img className="p-1 w-10" src={Apple}/>
                        <div className="text-white p-1 text-sm">
                        <p>Download on the</p>
                        <h4 className="text-2xl">App Store</h4>
                        </div>
                    </button>
                </div>
                <div className="mt-[-18px]">
                    <img src={IA}/>
                </div>
            </div>

        </>
    )
    
}
export default Main5;