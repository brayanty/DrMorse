import { heros } from "./consts.jsx"
import { useState } from "react";

function Hero() {
    const [selectHero, setSelectHero] = useState(0);
    const selectedHero = heros.find(hero => hero.select === selectHero);

    const src = `url(${selectedHero.src})`

    return (
        <>
            <section className="Hero" style={{ backgroundImage: src }}>
                <div className="Hero__text" >
                    <h4 className="Hero__hero-title">{selectedHero.title}</h4>
                    <p className="Hero__hero-paragraph">{selectedHero.paragraph}</p>
                </div>
            </section>
        </>
    );
}

export default Hero;
