import "./css/app.css";
import "./css/normalize.css";

import Hero from "./componets/Hero.jsx";
import Navbar from "./componets/Nav.jsx";
import MainSection from "./componets/mainSection.jsx";

function App() {

    return (
        <>
            <header className="Header">
                <Navbar />
                <Hero />
            </header>
            <MainSection />
        </>
    );
}

export default App;
