import React from "react";

import "../styles/navMarquesita.scss";

export const NavMarquesita = () => {
  return (
    <nav className="navMarquesita__container">
      <ul className="navMarquesita__list">
        <li className="navMarquesita__item">Inicio</li>
        <li className="navMarquesita__item">Blog</li>
        <li className="navMarquesita__item">Capacitaciones</li>
        <li className="navMarquesita__item">Contacto</li>
      </ul>
    </nav>
  );
};
