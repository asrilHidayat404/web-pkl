import ListLayanan from "./ListLayanan"
import ReadMore from "./ReadMore"
const Layanan = () => {
    return (
        <section id="layanan">
            <div className="layanan">
                <header>
                    <h2>Layanan Sandi Kami</h2>
                </header>
                <ListLayanan />
                <ReadMore />
            </div>
        </section>
    )
}

export default Layanan