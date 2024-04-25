import "./css/app.css";
import "./css/normalize.css";
import { heros } from "./componets/consts.jsx";

import Navbar from "./componets/Nav.jsx";
import MainSection from "./componets/mainSection.jsx";
import { useEffect, useState } from "react";

function App() {
    const [selectHero, setSelectHero] = useState(0)


    return (
        <>
            <header className="Header">
                <Navbar />
                {
                    heros.map((hero, index) => {
                        if (hero.select !== selectHero) {
                            return
                        }
                        return (
                            <>
                            <section className="Hero" style={{background: hero.src}}>
                                <figure className="Header__img">
                                    <img className="Header__img-img" src={hero.src} alt={hero.alt} />
                                </figure>
                                <div className="Hero__text" key={index}>
                                    <h4 className="Hero__hero-title">{hero.title}</h4>
                                    <p className="Hero__hero-paragraph">{hero.paragraph}</p>
                                </div>
                            </section>
                            </>
                        )
                    })

                }

            </header>

            <MainSection />
        </>
    );
}

export default App;
