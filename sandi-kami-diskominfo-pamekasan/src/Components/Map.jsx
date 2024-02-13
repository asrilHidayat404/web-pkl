import Iframe from "react-iframe"
const Map = () => {
    return (
        <>
            <header>
                <h1 className="text-lg">Kantor Diskominfo Kab Pamekasan</h1>
                <h1 className="text-lg">Jl. Jokotole Gg IV No. 1 Pamekasan, Jawa Timur</h1>
            </header>

            <div className="frame">
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.700128123177!2d113.48601317499867!3d-7.160624892843946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd77de59375dd61%3A0x5dc1616af416ed72!2sDinas%20Komunikasi%20Dan%20Informatika%20Pamekasan!5e0!3m2!1sid!2sid!4v1705936649867!5m2!1sid!2sid"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </div>
        </>
    )
}

export default Map