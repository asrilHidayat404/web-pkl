import logoUtama from "../assets/logoUtama.png"
const Hero = () => {
    return (
        <section id="hero">
            <div className="hero">
                <header>
                    <img src={logoUtama} alt="" />
                    <h1 className="font-bold text-2xl">Selamat Datang di SandiKami</h1>
                    <h1 className="font-bold text-2xl">PORTAL LAYANAN PERSANDIAN DAN KEAMANAN INFORMASI DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN PAMEKASAN</h1>
                </header>
            </div>
        </section>
    )
}

export default Hero