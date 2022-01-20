import HeroS from "../components/molecule/Services/Hero-S"
import DefaultLayout from "../components/common/Layout/DefaultLayout"
import Section1 from "../components/molecule/Services/Section-S-1"
import Section2 from "../components/molecule/Services/Section-S-2"
import Footer1 from "../components/footer/footer-1"
import Footer2 from "../components/footer/footer-2"
import Footer3 from "../components/footer/footer-3"
import Footer4 from "../components/footer/footer-4"


const Services = () => {
    return (
        <>
            <HeroS />
           <DefaultLayout>
               <Section1 />
               <Section2 />
               <Footer1 />
               <Footer2 />
               <Footer3 />
           </DefaultLayout>
           <Footer4 />

        </>
    )
}
export default Services