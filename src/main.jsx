import React from "react";
import ReactDOM from "react-dom/client";

import "./css/index.css";
import "./css/normalize.css";

import Navbar from "./componets/Nav.jsx"
import MainSection from "./componets/mainSection.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header className="Header ">
      <Navbar />
    </header>
    
    <MainSection />
  </React.StrictMode>
);
