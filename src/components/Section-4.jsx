
import Carte1 from '../components/molecule/atoms/carte-1'
import Carte2 from '../components/molecule/atoms/Carte-2'
import Carte3 from '../components/molecule/atoms/Carte-3'


function Main4 () 
{
    return (
        <>
            <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center  py-20  ">
                <div className=" flex relative   ">
                    <div className="absolute  z-20"><Carte1  /></div>    
                    <div className="absolute sm:block hidden top-16 left-16 z-10"><Carte2  /></div>    
                    <div className="absolute sm:block hidden top-28 left-32 "><Carte3 /></div>    
                </div>
                    
                <div className="flex flex-col  justify-center space-y-2 p-5 w-96 ">
                    <p className="text-sm text-center font-semibold text-gray-500 lg:text-left">CREATE A PROFILE</p>
                    <h4 className="text-xl font-bold text-center lg:text-left">Get certificates</h4>
                    <p className="text-md text-center lg:text-left ">After passing a test, we’ll award you with an online certificate. You can add them to your profile after completing the courses.</p>
                </div>
            </div>
        </>
    )
}
export default Main4;
