import saoBento from "../assets/sao_bento.jpg";
import "./Home.css";

export default function Home() {
    return (
        <section className="content">
            <img src={saoBento} alt="" id="full-image" />
        </section>
    );
}
