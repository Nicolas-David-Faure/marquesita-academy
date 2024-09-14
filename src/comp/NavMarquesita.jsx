import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/navMarquesita.scss";

//icons

import { IoMdContacts } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";

export const NavMarquesita = ({ language }) => {
  return (
    <nav className="navMarquesita__container">
      <ul className="navMarquesita__list">
        <NavLink to="/" className="navMarquesita__item">
          {" "}
          <FaHome  className="navMarquesita__item_icon" />
          <p>  {language === "es" ? "Inicio" : "Home"}</p>
        
        </NavLink>
        <NavLink to="/courses" className="navMarquesita__item">
          {" "}
          <FaBookOpen  className="navMarquesita__item_icon" />
          <p>{language === "es" ? "Cursos" : "Courses"}</p>
          
        </NavLink>
        <NavLink to="/contact" className="navMarquesita__item">
          {" "}
          <IoMdContacts className="navMarquesita__item_icon"  />
          <p>

          {language === "es" ? "Contacto" : "Contact"}
          </p>
        </NavLink>
      </ul>
    </nav>
  );
};
