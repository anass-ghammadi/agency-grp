import DefaultLayout from "../components/common/Layout/DefaultLayout"
import HeroSection from "../components/molecule/HeroSection"
import Section1 from "../components/molecule/Section-1"
import Section2 from "../components/molecule/Section-2"
import Section3 from "../components/molecule/Section-3"
import Section4 from "../components/molecule/Section-4"
import Section5 from "../components/molecule/Section-5"
import Footer1 from "../components/footer/footer-1"
import Footer2 from "../components/footer/footer-2"
import Footer3 from "../components/footer/footer-3"
import Footer4 from "../components/footer/footer-4"



const Home = () => {
    return (
        <>
            <HeroSection />
            <DefaultLayout>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Footer1 />
                <Footer2 />
                <Footer3 />
            </DefaultLayout>
            <Footer4 />
        </>
    )
}

export default Home