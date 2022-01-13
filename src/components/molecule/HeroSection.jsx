import '../../styles/slide.css';
import Group from '../../assets/Header-Illustration.svg';
import { PrixSVG } from '../../assets/Svgs';

function HeroSection() {
    return (
        <>
            <div className=" flex min-h-max w-full h-screen m-w-screen-xl mx-auto body" style={{background:"linear-gradient(291.24deg, #2A0181 45.58%, rgba(61, 2, 187, 0.69) 100%)"}}>
                <div className="flex-1">
                    <div className="containerWave">
                        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g class="parallax">
                                <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                                <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                <use href="#gentle-wave" x="48" y="7" fill="rgba(247, 248, 254, 1)" />
                            </g>
                        </svg>
                    </div>
                    <div className="flex absolute bottom-0 right-0 top-0 left-5 items-center justify-center  ">
                        <div className=" flex flex-col  ">
                            <h1 className="text-5xl font-bold leading-tight text-transparent  bg-clip-text  bg-gradient-to-r from-yellow-500 via-zinc-300 to-gray-900 " >
                                Design <br />
                                and code<br />
                                react apps
                            </h1>
                            <div className="text-xs text-white my-5">
                                <p>Don’t skip design. Learn design and code,<br /> by building real apps with React and Swift.<br /> Complete courses about the best tools.</p>
                            </div>
                            <div className="flex  items-center  cursor-pointer hover:scale-125 duration-700">
                                <button type="submit" className="submit">
                                    <div className=" flex flex-row items-center justify-center rounded-2xl drop-shadow-2xl p-1 px-4  bg-gradient-to-r from-blue-100 to-gray-300">
                                        <PrixSVG  />
                                        <p className="text-normal p-2">GET PRO ACCESS <br /> <span className="text-sm ">$19 per month</span></p>

                                    </div>
                                </button>
                            </div>
                            <div className="text-sm font-medium text-white py-3">
                                <p>Purchase includes access to 30+ courses,<br /> 100+ premium tutorials, 120+ hours of videos, <br />source files and certificates.</p>
                            </div>
                        </div>
                        <div className="sm:block hidden sm:w-1/2   ">
                            <img className="hover:scale-125  duration-700" src={Group}></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}


export default HeroSection