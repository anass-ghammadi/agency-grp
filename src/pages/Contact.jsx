import HeroC from "../components/molecule/Contact/Hero-c"
import Cforme from "../components/molecule/Contact/C-forme"
import DefaultLayout from "../components/common/Layout/DefaultLayout"
import Footer1 from "../components/footer/footer-1"
import Footer2 from "../components/footer/footer-2"
import Footer3 from "../components/footer/footer-3"
import Footer4 from "../components/footer/footer-4"


const Contact = () => {
    return (
        <>
            <HeroC />
           <DefaultLayout>
               <Cforme />
                <Footer1 />
               <Footer2 />
               <Footer3 />
           </DefaultLayout>
           <Footer4 />
            
        </>
    )
}
export default Contact