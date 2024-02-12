import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Layanan from "../Components/Layanan"
import Navbar from "../Components/Navbar"
import Tentang from "../Components/Tentang"

const Beranda = () => {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <Tentang />
            <Layanan />
            <Contact />
            <Footer />
        </div>
    )
}

export default Beranda