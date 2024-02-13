import logoUtama from "../assets/logoUtama.png"
const Tentang = () => {
    return (
        <section id="tentang">
            <div className="tentang">
                <div className="poster">
                    <img src={logoUtama} alt="" />
                </div>
                <div className="about">
                    <h2>Tentang Portal SandiKami</h2>
                    <p>Portal sandi kami adalah aplikasi berbasis website yang dibuat untuk memudahkan Bidang Persandian dan Keamanan Informasi pada Dinas Komunikasi dan Informatika kabupaten Pamekasan dalam memberikan layanan bagi perangkat Daerah di Lingkungan Pemerintah Kabupaten Pamekasan.</p>
                    <p>Layanan SandiKami diantaranya adalah Sertifikat Elektronik (Tanda Tangan Elektronik, Segel Elektronik, dan Integrasi Sistem), Pengamana Sinyal (Jamming), Pentest (Penetration Testing) dan Jaring Komunikasi Sandi</p>
                </div>
            </div>
        </section>
    )
}

export default Tentang