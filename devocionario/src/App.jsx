import "./App.css";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

function App() {
    return (
        <div className="container">
            <SideBar />
            <main className="flex-column">
                <TopBar />
                <Home />
            </main>
        </div>
    );
}

export default App;
