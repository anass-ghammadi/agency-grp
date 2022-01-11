import '../../styles/slide.css';
import Group from '../../assets/Header-Illustration.svg';
import { PrixSVG } from '../../assets/Svgs';

function HeroSection() {
    return (
        <>
            <div className="containerBody">
                <div className="body">
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
                    <div className="body-containt">
                        <div className="flex">
                            <h1 className="body-title">
                                Design <br />
                                and code<br />
                                react apps
                            </h1>
                            <div className="body-ss-title">
                                <p>Don’t skip design. Learn design and code,<br /> by building real apps with React and Swift.<br /> Complete courses about the best tools.</p>
                            </div>
                            <div className="btn-submit">
                                <button type="submit" className="submit">
                                    <div className="btn-submit">
                                        <PrixSVG className="svg" />
                                        <p>GET PRO ACCESS <br /> $19 per month</p>

                                    </div>
                                </button>
                            </div>
                            <div className="body-t">
                                <p>Purchase includes access to 30+ courses,<br /> 100+ premium tutorials, 120+ hours of videos, <br />source files and certificates.</p>
                            </div>
                        </div>
                        <div className="image">
                            <img src={Group}></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}


export default HeroSection