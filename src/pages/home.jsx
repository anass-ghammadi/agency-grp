import DefaultLayout from "../components/common/Layout/DefaultLayout"
import HeroSection from "../components/molecule/HeroSection"
import Section1 from "../components/Section-1"
import Section2 from "../components/Section-2"
import Section3 from "../components/Section-3"
import Section4 from "../components/Section-4"

const Home = () => {
    return (
        <>
            <HeroSection />
            <DefaultLayout>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />

            </DefaultLayout>
        </>
    )
}

export default Home