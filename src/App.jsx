import "./css/app.css";
import "./css/normalize.css";


import Hero from "./componets/Hero.jsx";
import Navbar from "./componets/Nav.jsx";
import Main from "./componets/Main.jsx"

function App() {

    return (
        <>
            <header className="Header">
                <Navbar />
                <Hero />
            </header>

            <Main/>

        </>
    );
}

export default App;
