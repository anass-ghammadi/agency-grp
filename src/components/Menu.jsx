import { AboutSVG, AccountSVG, ContactSVG, HomeSVG, SearchSVG, ServicesSVG } from '../assets/Svgs';
import '../styles/menu.css';
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
                                    <a href="#"><div className="icone"><HomeSVG /></div>Accueil</a>

                                </li>
                                <li>
                                    <a href="#"><div className="icone"><ServicesSVG /></div> Services</a>

                                </li>
                                <li>
                                    <a href="#"><div className="icone"><AboutSVG /></div>About</a>

                                </li>
                                <li>
                                    <a href="#"><div className="icone"><ContactSVG /></div>Contact</a>

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
