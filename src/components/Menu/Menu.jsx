import { AboutSVG, AccountSVG, ContactSVG, HomeSVG, SearchSVG, ServicesSVG } from '../../assets/Svgs';

import { Outlet, Link } from "react-router-dom";
function Menu({ toggle }) {
    return (

        <>
            <header className="flex max-w-screen-xl mx-auto absolute  left-0 right-0 z-50">
                <nav className="flex flex-row w-full items-center justify-between p-8 text-white ">
                     
                    <div className="text-2xl font-bold">
                        <a href="#">LOGO</a>
                    </div>
                    
                    <div className="md:block hidden ">
                        <div className=" flex flex-row items-center justify-center">
                            <div className="mr-20">
                                <ul className=" flex flex-row space-x-8 ">
                                    <li>
                                    <Link to="/"><a className="flex flex-row items-center justify-center hover:scale-125  duration-700 "><div className="mr-1"><HomeSVG /></div>Accueil</a></Link >

                                    </li>
                                    <li>
                                        <Link to="/services"><a className="flex flex-row items-center justify-center hover:scale-125  duration-700"><div className="mr-1"><ServicesSVG /></div> Services</a></Link >

                                    </li>
                                    <li>
                                        <Link to="/About"><a className="flex flex-row items-center justify-center hover:scale-125  duration-700"><div className="mr-1"><AboutSVG /></div>About</a></Link >

                                    </li>
                                    <li>
                                        <Link to="/contact"><a className="flex flex-row items-center justify-center hover:scale-125  duration-700"><div className="mr-1"><ContactSVG /></div>Contact</a></Link>

                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <ul className="flex flex-row space-x-14">
                                    <div>
                                        <li className="hover:scale-125  duration-700" >
                                            <SearchSVG />
                                        </li>
                                    </div>
                                    <div>
                                        <li className="hover:scale-125  duration-700">
                                            <AccountSVG />
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden cursor-pointer  " onClick={toggle}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                </nav>
            </header>
        </>
    )

}


export default Menu;
