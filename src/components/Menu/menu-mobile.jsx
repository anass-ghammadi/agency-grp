import { AboutSVG, AccountSVG, ContactSVG, HomeSVG, SearchSVG, ServicesSVG } from '../../assets/Svgs';

import { Outlet, Link } from "react-router-dom";
function MenuMobile({ isOpen, toggle}) {
    return (

        <>
            <header className="absolute z-50 left-0 right-0 bg-neutral-900/25 backdrop-blur-md  ">
                <nav className={isOpen ? "flex flex-col w-full items-center justify-between p-8 text-white ": "hidden"} onClick={toggle}>
                    <div className="">
                        <div className=" flex flex-col items-center justify-center space-y-8  ">
                            <div className="">
                                <ul className=" flex flex-col space-y-4 ">
                                    <li>
                                    <Link to="/"><a className="flex flex-row items-center justify-center"><div className="mr-1"><HomeSVG /></div>Accueil</a></Link >

                                    </li>
                                    <li>
                                        <Link to="/services"><a className="flex flex-row items-center justify-center"><div className="mr-1"><ServicesSVG /></div> Services</a></Link >

                                    </li>
                                    <li>
                                        <Link to="/About"><a className="flex flex-row items-center justify-center"><div className="mr-1"><AboutSVG /></div>About</a></Link >

                                    </li>
                                    <li>
                                        <Link to="/contact"><a className="flex flex-row items-center justify-center"><div className="mr-1"><ContactSVG /></div>Contact</a></Link>

                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <ul className="flex flex-row space-x-14">
                                    <div>
                                        <li >
                                            <SearchSVG />
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <AccountSVG />
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )

}


export default MenuMobile;
