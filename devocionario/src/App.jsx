import "./App.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Rosary from "./pages/Rosary";
import { useState } from "react";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container">
            <SideBar menuOpen={menuOpen} />
            <main className="flex-column">
                <TopBar onClick={() => setMenuOpen(!menuOpen)} />
                {/* <Home /> */}
                <Rosary />
            </main>
        </div>
    );
}

export default App;
