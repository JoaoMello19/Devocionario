import menu from "../assets/menu.png";
import "./TopBar.css";

export default function TopBar({ onClick }) {
    return (
        <header id="topbar" className="flex-row">
            <img src={menu} alt="" id="menu-icon" onClick={onClick} />
            <div id="title" className="flex-row">
                <h1>Meu Devocionário</h1>
            </div>
        </header>
    );
}
