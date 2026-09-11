import crucifix from "../assets/crucifix.png";
import menu from "../assets/menu.png";
import "./TopBar.css";

export default function TopBar() {
    return (
        <header id="topbar" className="flex-row">
            <img src={menu} alt="" id="menu-icon" />
            <div id="title" className="flex-row">
                <img src={crucifix} alt="" id="crucifix-icon" />
                <h1>Meu Devocionário</h1>
            </div>
        </header>
    );
}
