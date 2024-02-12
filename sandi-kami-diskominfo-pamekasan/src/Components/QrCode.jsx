import qrCode from "../QrCode.jpeg"

const QrCode = () => {
    return (
        <>
            <header>
                <h5>Scan untuk simpan Kontak kami</h5>
            </header>
            <div className="qrCode">
                <img src={qrCode} alt="" />
            </div>
        </>
    )
}

export default QrCode