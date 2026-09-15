import "./App.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Rosary from "./pages/Rosary";

function App() {
    return (
        <div className="container">
            <SideBar />
            <main className="flex-column">
                <TopBar />
                {/* <Home /> */}
                <Rosary />
            </main>
        </div>
    );
}

export default App;
