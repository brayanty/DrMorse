import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoUrl from "../../assets/medical-29_icon-icons.com_73943.svg";
import {
  faCircleInfo,
  faHouse,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const items = [
    { title: "Home", url: "#home", icon: faHouse },
    { title: "Service", url: "#service", icon: faCircleInfo },
    { title: "Sobre Nosotros", url: "#aboutus", icon: faUsers },
  ];

  const logo = { title: "Dr. Morse", icon: logoUrl, alt: "Logo de Dr. Morse" };

  if (!Array.isArray(items)) {
    console.error("El formato de `items` que se recibió no es correcto");
    return null;
  }

  return (
    <nav className="w-full h-12 bg-primary/80 p-2 backdrop-blur-sm z-10">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <a
          className="text-white font-bold text-lg"
          href="#inicio"
          aria-label="Inicio"
        >
          <img
            className="inline-block"
            width="32"
            height="32"
            src={logo.icon}
            alt="Logo de Dr. Morse"
          />{" "}
          {logo.title}
        </a>
        <ul className="flex flex-row space-x-4">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="rounded-lg px-4 py-2 text-md text-white font-semibold hover:bg-slate-100 hover:text-slate-900 transition-colors"
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
