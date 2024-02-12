import image from "../5.png"
const ListLayanan = () => {
    return (
        <div className="listLayanan">

            <div className="card">
                <header>
                    <img src={image} alt="" />
                    <h4>Sertifikat Elektronik</h4>
                </header>
                <p>
                    Layanan Sertifikat Elektronik Masuk Tanda Tangan Elektonik, Segel Elektronik dan Integrasi pada sistem
                </p>
            </div>
            
            <div className="card">
                <header>
                    <img src={image} alt="" />
                    <h4>Pengamanan Sinyal</h4>
                </header>
                <p>
                    Layanan pemutusan sinyal seluler (Jamming) dalam rangka menjaga keamanan informasi pada rapat dinas pimpinan dan perangkat daerah
                </p>
            </div>
            <div className="card">
                <header>
                    <img src={image} alt="" />
                    <h4>Penilaian Keamanan TI</h4>
                </header>
                <p>
                    Layanan pengujian kaamanan aplikasi (penetration testing) untuk mengidentifikasi dan mengevaluasi resiko keamanan
                </p>
            </div>
            <div className="card">
                <header>
                    <img src={image} alt="" />
                    <h4>Jaring Komunikasi Sandi</h4>
                </header>
                <p>
                    Layanan penghubung komunikasi antara pimpinan daerah, perangkat daerah dan pemerintah daerah
                </p>
            </div>

        </div>
    )
}

export default ListLayanan