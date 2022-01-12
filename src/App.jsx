import React,{useState, useEffect} from 'react';
import Menu from "./components/Menu/Menu";
import MenuMobile from "./components/Menu/menu-mobile";
import Home from "./pages/home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './styles/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const HidesMenu = () => {
            if(window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
                console.log('I resized')
            }
        }
        window.addEventListener('resize',HidesMenu)

        return () => {
            window.removeEventListener('resize',HidesMenu)
        }
    })
    return (
        <>  
            
            <BrowserRouter>
            <Menu toggle={toggle}/>
            <MenuMobile isOpen={isOpen} toggle={toggle} />
                <Routes>
                    
                    <Route path="/" index element={<Home />}/>
                    <Route path="Services" index element={<Services />}/>
                    <Route path="About" index element={<About />}/>
                    <Route path="Contact" index element={<Contact />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;