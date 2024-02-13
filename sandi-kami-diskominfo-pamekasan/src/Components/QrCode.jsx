import qrCode from "../assets/QrCode.jpeg"

const QrCode = () => {
    return (
        <>
            <header>
                <h5 className="text-lg">Scan untuk simpan Kontak kami</h5>
            </header>
            <div className="qrCode">
                <img src={qrCode} alt="" />
            </div>
        </>
    )
}

export default QrCode