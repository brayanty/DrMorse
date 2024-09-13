import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoUrl from "../../assets/medical-29_icon-icons.com_73943.svg";
import {
  faBars,
  faCircleInfo,
  faHouse,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function Navbar() {
  const items = [
    { title: "inicio", url: "#home", icon: faHouse },
    { title: "Servicios", url: "#service", icon: faCircleInfo },
    { title: "Sobre Nosotros", url: "#aboutus", icon: faUsers },
  ];

  const logo = { title: "Dr. Morse", icon: logoUrl, alt: "Logo de Dr. Morse" };

  const [isSelectMenu, setSelectMenu] = useState(false);
  const [isNavbarHeight, setNavbarHeight] = useState("140px");

  if (!Array.isArray(items)) {
    console.error("El formato de `items` que se recibió no es correcto");
    return null;
  }

  const barsClick = () => {
    const navbar = document.querySelector("#Navbar").offsetHeight;
    setNavbarHeight(navbar + "px");
    setSelectMenu((prevState) => !prevState);
  };

  return (
    <nav
      id="Navbar"
      className="relative md:absolute w-full h-[max-content] p-1 flex flex-col gap-2 bg-primary/70 md:p-2 backdrop-blur-sm z-50"
    >
      <div className="md:container md:mx-auto w-full h-full flex flex-row justify-between items-center">
        <a
          className="flex flex-row items-center text-center text-white font-bold text-lg"
          href="#inicio"
          aria-label="Inicio"
        >
          <img
            className="inline-block"
            width="32"
            height="32"
            src={logo.icon}
            alt="Logo de Dr. Morse"
          />
          <h3>{logo.title}</h3>
        </a>
        <button
          className="p-3 md:hidden"
          onClick={() => barsClick()}
          aria-label="Abrir menú"
        >
          <FontAwesomeIcon icon={faBars} size="2xl" style={{ fill: "#fff" }} />
        </button>

        <ul
          style={{ top: isNavbarHeight, right: 0 }}
          className={`${
            isSelectMenu
              ? "max-md:opacity-100"
              : "max-md:opacity-0 none max-md:-z-40"
          } z-10 transition-opacity ease-out duration-600 max-md:absolute p-2 max-md:h-[max-content] max-md:w-full max-md:backdrop-blur-sm max-md:bg-primary/80 flex flex-row max-md:flex-col max-md:items-center max-md:justify-center gap-3`}
        >
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="rounded-lg px-4 py-2 text-md text-white font-semibold hover:bg-slate-100 hover:text-slate-900 transition-colors"
                aria-label={`Ir a ${item.title}`}
              >
                <FontAwesomeIcon icon={item.icon} size="sm" /> {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2 pb-1 max-md:flex-col justify-around items-center">
        <div className="text-white font-primaryMedium text-1xl">
          Agenda una cita +4234312323212
        </div>
        <form className="flex gap-2" action="">
          <label
            id="search"
            aria-label="Search"
            className="text-text overflow-hidden"
          ></label>
          <input
            id="search"
            className="rounded-md w-60 text-text overflow-hidden"
            type="search"
            placeholder="Search"
          />

          <input
            className="p-1 rounded-md border border-white text-white bg-primary text-md font-semibold hover:bg-slate-100 hover:text-slate-900 transition-colors"
            onClick={(e) => e.preventDefault()}
            type="button"
            value="Buscar"
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
