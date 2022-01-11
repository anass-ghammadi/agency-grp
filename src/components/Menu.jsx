import { AboutSVG, AccountSVG, ContactSVG, HomeSVG, SearchSVG, ServicesSVG } from '../assets/Svgs';
import '../styles/menu.css';
import { Outlet, Link } from "react-router-dom";
function Menu() {
    return (

        <div className="menu-container">
            <header className="header">
                <nav className="nav">
                    <div className="nav-logo">
                        <a href="#">LOGO</a>
                    </div>
                    <div className="content">
                        <div className="nav-menu">
                            <ul className="menu">
                                <li>
                                <Link to="/"><a><div className="icone"><HomeSVG /></div>Accueil</a></Link >

                                </li>
                                <li>
                                    <Link to="/services"><a><div className="icone"><ServicesSVG /></div> Services</a></Link >

                                </li>
                                <li>
                                    <Link to="/About"><a><div className="icone"><AboutSVG /></div>About</a></Link >

                                </li>
                                <li>
                                    <Link to="/contact"><a><div className="icone"><ContactSVG /></div>Contact</a></Link>

                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="nav-icon">
                                <div>
                                    <li>
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
                </nav>
            </header>
        </div>
    )

}


export default Menu;
