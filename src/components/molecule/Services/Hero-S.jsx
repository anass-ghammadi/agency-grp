import { useState } from 'react';
import Menu from"../../Menu/Menu"
import MenuMobile from"../../Menu/menu-mobile"
   
function HeroS ()
{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex flex-col min-h-max w-full h-screen mx-auto body  min-h" style={{ background:"linear-gradient(251.55deg, rgba(119, 23, 194, 0.84) 13.25%, rgba(82, 22, 160, 0.891418) 45.83%, rgba(31, 21, 140, 0.92) 90.55%)"}}>
                <Menu toggle={toggle} />
                <MenuMobile isOpen={isOpen} toggle={toggle} />
            </div>
        </>
    )
}
export default HeroS