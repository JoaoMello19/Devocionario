import homeActive from "../assets/home_active.png";
import crucifix from "../assets/crucifix.png";
import home from "../assets/home.png";
import "./SideBar.css";

function NavigationItem({ href = "#", text, isActive }) {
    return (
        <a href={href} className={isActive ? "active" : ""}>
            <img
                src={isActive ? homeActive : home}
                alt=""
                className="nav-icon"
            />
            <span>{text}</span>
        </a>
    );
}

export default function SideBar() {
    return (
        <aside id="sidebar" className="flex-column">
            <img src={crucifix} alt="" />
            <h1>Meu Devocionário</h1>
            <h2>Um caminho de fé, todos os dias</h2>

            <hr />

            <nav id="navigation" className="flex-column">
                <NavigationItem text="Início" isActive />
                <NavigationItem text="Orações" />
            </nav>

            <span id="copyright">João Vitor de Mello Gomes @ 2026</span>
        </aside>
    );
}
