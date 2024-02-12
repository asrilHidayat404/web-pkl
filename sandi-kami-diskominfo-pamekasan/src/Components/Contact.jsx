import Map from "./Map"
import QrCode from "./QrCode"
import Sosmed from "./Sosmed"

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact">
                <header>
                    <h4>Hubungi Kami</h4>
                </header>
                <div className="listContact">
                    <div className="card map">
                        <Map />
                    </div>
                    <div className="card sosmed">
                        <Sosmed />
                    </div>
                    <div className="card kode">
                        <QrCode />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact