import HeroA from "../components/molecule/About/Hero-A"
import DefaultLayout from "../components/common/Layout/DefaultLayout"
import SectionP from "../components/molecule/About/Section-p"
import Footer1 from "../components/footer/footer-1"
import Footer2 from "../components/footer/footer-2"
import Footer3 from "../components/footer/footer-3"
import Footer4 from "../components/footer/footer-4"



const About = () => {
    return (
        <>
           <HeroA />
           <DefaultLayout>
                <SectionP />
                <Footer1 />
               <Footer2 />
               <Footer3 />
           </DefaultLayout>
           
           <Footer4 />
        </>
    )
}

export default About