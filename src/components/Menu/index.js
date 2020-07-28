import React from "react";
import Logo from "../../assets/img/Logo.png";

import "./Menu.css";

import ButtonLink from "./components/ButtonLink";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" alt="Logo da CVFLix" />
      </a>

      <Button className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
