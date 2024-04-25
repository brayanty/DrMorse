import React, { useState, useEffect } from "react";
import "../css/nav.css";

function Navbar() {
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    const sitio = window.location.href;
    if (sitio.includes("#inicio")) {
      setSelectedItem("inicio");
    } else if (sitio.includes("#contactos")) {
      setSelectedItem("contactos");
    } else if (sitio.includes("#sabermas")) {
      setSelectedItem("sabermas");
    }
  }, []);

  function selectNav(select) {
    if (select === "#inicio") {
      setSelectedItem("inicio");
    } else if (select === "#contactos") {
      setSelectedItem("contactos");
    } else if (select === "#sabermas") {
      setSelectedItem("sabermas");
    }
  }

  return (
    <nav key={1} className="nav margin-top margin-bottom">
      <div className="nav__logo">
        <h4>Logo Company</h4>
      </div>
      <ul className="nav__items">
        <li
          className={
            selectedItem === "inicio"
              ? "nav__item nav__item-active"
              : "nav__item"
          }
        >
          <a
            className="nav__item-link"
            onClick={() => selectNav("#inicio")}
            href="#inicio"
          >
            Inicio
          </a>
        </li>
        <li
          className={
            selectedItem === "contactos"
              ? "nav__item nav__item-active"
              : "nav__item"
          }
        >
          <a
            className="nav__item-link"
            onClick={() => selectNav("#contactos")}
            href="#contactos"
          >
            Contactos
          </a>
        </li>
        <li
          className={
            selectedItem === "sabermas"
              ? "nav__item nav__item-active"
              : "nav__item"
          }
        >
          <a
            className="nav__item-link"
            onClick={() => selectNav("#sabermas")}
            href="#sabermas"
          >
            Saber mas
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
