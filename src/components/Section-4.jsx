
import Carte1 from '../components/molecule/atoms/carte-1'
import Carte2 from '../components/molecule/atoms/Carte-2'
import Carte3 from '../components/molecule/atoms/Carte-3'


function Main4() {
    return (
        <>
            <div className="flex flex-col justify-between sm:flex-row p-5">
                <div className="max-w-2xl flex relative">
                    {/* <div className="transform translate-x-[155%] translate-y-16 z-0"><Carte3 /></div>
                    <div className="transform translate-x-[75%] translate-y-8 z-10"><Carte2 /></div> */}
                    <div className=" absolute top-20 left-20 z-0"><Carte3 /></div>
                    <div className=" absolute top-10 left-10 z-10"><Carte2 /></div>
                    <div className=" absolute z-20 "><Carte1 /></div>
                </div>

                <div className="flex flex-col flex-1 justify-center space-y-2 p-5 container max-w-xl">
                    <p className="text-sm text-center font-semibold text-gray-500 lg:text-left">CREATE A PROFILE</p>
                    <h4 className="text-xl font-bold text-center lg:text-left">Get certificates</h4>
                    <p className="text-md text-center lg:text-left ">After passing a test, we’ll award you with an online certificate. You can add them to your profile after completing the courses.</p>
                </div>
            </div>
        </>
    )
}
export default Main4;
