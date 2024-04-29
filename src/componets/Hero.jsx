import heros from "./consts.jsx"
import { useEffect, useState } from "react";

function Hero() {


    heros.map((hero, index) => {
        if (hero.select !== selectHero) {
            return
        }
        return (
            <>
                <section className="Hero" style={{ background: hero.src }}>
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

export default Hero