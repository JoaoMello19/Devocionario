import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Rosary from "./pages/Rosary";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container">
            <SideBar menuOpen={menuOpen} />
            <main className="flex-column">
                <TopBar onClick={() => setMenuOpen(!menuOpen)} />
                {/* <Home /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rosary" element={<Rosary />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
