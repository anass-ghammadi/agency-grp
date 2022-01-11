import Menu from "./components/Menu";
import Home from "./pages/home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <>
            <BrowserRouter>
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