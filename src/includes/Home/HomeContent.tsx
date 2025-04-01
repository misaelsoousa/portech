import Footer from "../Footer"
import BannerHome from "./BannerHome"
import Contato from "./Contato"
import Feedback from "./Feedback"
import Location from "./Location"
import Missao from "./Missao"
import QuemSomos from "./QuemSomos"
import Sobre from "./Sobre"

function HomeContent() {


    return (
        <section className='bg-[#20262E] '>
            <BannerHome />
            <QuemSomos />
            <Sobre />
            <Missao />
            <Feedback />
            <Location />
            <Contato />
            <Footer />
        </section>
    )
}

export default HomeContent
