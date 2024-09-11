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
    { title: "Home", url: "#home", icon: faHouse },
    { title: "Service", url: "#service", icon: faCircleInfo },
    { title: "Sobre Nosotros", url: "#aboutus", icon: faUsers },
  ];

  const logo = { title: "Dr. Morse", icon: logoUrl, alt: "Logo de Dr. Morse" };

  const [isSelectMenu, setSelectMenu] = useState(false);

  if (!Array.isArray(items)) {
    console.error("El formato de `items` que se recibió no es correcto");
    return null;
  }

  const barsClick = () => {
    setSelectMenu((prevState) => !prevState);
  };

  return (
    <nav className="relative w-full h-[48px] bg-primary/80 md:p-2 backdrop-blur-sm z-50">
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
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </button>

        <ul
          className={`${
            isSelectMenu
              ? "max-md:opacity-100"
              : "max-md:opacity-0 max-md:-translate-y-[200px]"
          } z-10 transition-all ease-out duration-600 max-md:absolute top-[48px] max-md:h-[20vh] max-md:w-full max-md:backdrop-blur-sm max-md:bg-primary/80 flex flex-row max-md:flex-col max-md:items-center max-md:justify-center gap-3`}
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
    </nav>
  );
}

export default Navbar;
