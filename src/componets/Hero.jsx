import React, { useState, useEffect } from "react";
import "../css/Hero.css";
import { headers } from "./consts.jsx";

function Hero() {
  const [selectHeaderIndex, setSelectHeaderIndex] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectHeaderIndex((prevIndex) => (prevIndex + 1) % headers.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [selectHeaderIndex]);

  return (
    <section className="Hero__Section container">
      {headers.map((header, index) => (
        <article key={index} className={`Hero__container ${selectHeaderIndex == header.select ? 'visible' : ''}`}>
          <figure className="Hero__container-img">
            <img src={header.src} alt={header.alt} />
          </figure>
          <div className="Hero__text">
            <h4 className="Hero__text-Title">{header.title}</h4>
            <p className="Hero__text-Paragraph">{header.paragraph}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Hero;
