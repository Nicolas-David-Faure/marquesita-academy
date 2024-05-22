import React from "react";
import { Link } from "react-router-dom";

import "../styles/navMarquesita.scss";

export const NavMarquesita = ({language}) => {
  return (
    <nav className="navMarquesita__container">
      <ul className="navMarquesita__list">
        {/* <li className="navMarquesita__item">Inicio</li>
        <li className="navMarquesita__item">Capacitaciones</li>
        <li className="navMarquesita__item">Contacto</li> */}


        <Link to="/" className="navMarquesita__item"> { language === "es" ? "Inicio" : "Home" }</Link>
        <Link to="/courses" className="navMarquesita__item"> { language === "es" ? "Cursos" : "Courses" }</Link>
        <Link to="/contact" className="navMarquesita__item"> { language === "es" ? "Contacto" : "Contact" } </Link>
     
      </ul>
    </nav>
  );
};
