import Tems from "../molecule/atoms/Carte-teams"

function Footer2 ()
{
    return (
        <>
            <div className="flex flex-col-reverse items-center justify-center xl:flex-row py-36 xl:items-start">
                <div className="footer-2-cart">
                    <div className="flex flex-col items-center justify-center lg:flex-row">
                       <Tems />
                       <Tems /> 
                    </div>
                </div>
                <div className="flex flex-col itmes-center justify-center space-y-4 p-4">
                    <p className="text-center text-sm text-gray-400 xl:text-left">TRUSTED BY TEAMS</p>
                    <h4 className="text-center text-3xl font-extrabold xl:text-left">80,000 people</h4>
                    <p className="text-center md:w-96 xl:text-left">Many startups look for designers who code and developers who design. They use our courses to help train new hires and expand skill sets.</p>
                </div>
            </div>
        </>
    )
}
export default Footer2;