
import Carte1 from '../../components/molecule/atoms/carte-1'
import Carte2 from '../../components/molecule/atoms/Carte-2'
import Carte3 from '../../components/molecule/atoms/Carte-3'


function Main4() {
    return (
        <>
            <div className="flex flex-col-reverse lg:justify-between lg:flex-row py-32">
                <div className="max-w-2xl flex relative hover:scale-110  duration-700 justify-center lg:justify-start self-center">
                    <div className=" absolute top-20 left-32 z-0 lg:block hidden backdrop-blur-sm hover:scale-110  duration-700"><Carte3 /></div>
                    <div className=" absolute top-10 left-16 z-10 lg:block hidden backdrop-blur-sm hover:scale-110  duration-700"><Carte2 /></div>
                    <div className=" lg:absolute  z-20 backdrop-blur-sm hover:scale-110  duration-700"><Carte1 /></div>
                </div>

                <div className="flex flex-col flex-1 justify-center space-y-2 p-5 container max-w-xl self-center">
                    <p className="text-sm text-center font-semibold text-gray-500 lg:text-left">CREATE A PROFILE</p>
                    <h4 className="text-2xl font-bold text-center lg:text-left">Get certificates</h4>
                    <p className="text-md text-center lg:text-left ">After passing a test, we’ll award you with an online certificate. You can add them to your profile after completing the courses.</p>
                </div>
            </div>
        </>
    )
}
export default Main4;
