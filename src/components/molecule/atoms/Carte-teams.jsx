import Tems from "../../../assets/Roy1.png"

function Teams ()
{
    return (
        <>
            <div className="flex flex-col  justify-center rounded-2xl p-4 w-72 md:w-96 h-64 space-y-2 drop-shadow-lg m-4  hover:scale-110  duration-700" style={{ background:"rgba(15, 14, 71, 0.55)"}}>
                <img className="w-14"src={Tems}/>
                <h4 className="text-xl font-semibold text-white ">Roy van Rooijen</h4>
                <p className="text-white">Design+Code 1 got me fully into using Sketch and I’m amped to discover what’s new in this sequel. Thanks so much for creating it and keep up the great work!</p>
            </div>
        </>
    )
}
export default Teams