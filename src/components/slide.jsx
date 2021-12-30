import '../styles/slide.css';
import Group from '../assets/Group7.svg';


function Slide () 
{
    return (
        <>
            
            <div className="body">
                <div className="vector">
                    <div className="vector2"></div>
                    <div className="vector1"> </div>
                </div>
                <div className="body-containt">
                    <div className="flex">
                        <h1 className="body-title">
                            Design <br/>
                            and code<br/>
                            react apps
                        </h1>
                        <div className="body-ss-title">
                            <p>Don’t skip design. Learn design and code,<br/> by building real apps with React and Swift.<br/> Complete courses about the best tools.</p>
                        </div>
                        <div className="btn-submit">
                            <button type="submit" className="submit"> 
                            <div className="btn-submit">
                                <Prix className="svg" />
                                <p>GET PRO ACCESS <br/> $19 per month</p>
                            
                            </div>
                            </button>
                        </div>
                        <div className="body-t">
                            <p>Purchase includes access to 30+ courses,<br/> 100+ premium tutorials, 120+ hours of videos, <br/>source files and certificates.</p>
                        </div>
                    </div>   
                    <div className="image">
                        <img src={Group}></img>
                    </div>
                </div>    
            </div>
             
        </>
    )
}

export const Prix = () => {
    return (
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" className="svg" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_344_2)">
            <circle cx="32.5" cy="28.5" r="26.5" fill="url(#paint0_linear_344_2)" shape-rendering="crispEdges"/>
            <circle cx="32.5" cy="28.5" r="27.5" stroke="#982E00" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel" stroke-dasharray="3 20 8 1 10 8" shape-rendering="crispEdges"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.1659 43.7916H17.8325C16.4492 43.7916 15.3325 42.4238 15.3325 40.7291V18.2708C15.3325 16.5763 16.4492 15.2083 17.8325 15.2083H46.1659C47.5492 15.2083 48.6659 16.5763 48.6659 18.2708V40.7291C48.6659 42.4238 47.5492 43.7916 46.1659 43.7916Z" fill="white" fill-opacity="0.3"/>
            <path d="M48.6659 23.375H15.3325V25.4166H48.6659V23.375Z" fill="white" fill-opacity="0.6"/>
            <defs>
            <filter id="filter0_d_344_2" x="0" y="0" width="65" height="65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_2"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_2" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_344_2" x1="49" y1="7.5" x2="11" y2="55" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9076E7" stop-opacity="0.12"/>
            <stop offset="0.541667" stop-color="#1B16DB" stop-opacity="0.77"/>
            </linearGradient>
            </defs>
        </svg>
    )
}


export default Slide;