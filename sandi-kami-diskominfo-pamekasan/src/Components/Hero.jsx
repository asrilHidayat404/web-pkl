import logoUtama from "../logoUtama.png"
const Hero = () => {
    return (
        <section id="hero">
            <div className="hero">
                <header>
                    <img src={logoUtama} alt="" />
                    <h1>Selamat Datang di SandiKami</h1>
                    <h1>PORTAL LAYANAN PERSANDIAN DAN KEAMANAN INFORMASI DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN PAMEKASAN</h1>
                </header>
            </div>
        </section>
    )
}

export default Hero