import React from "react";
import "../styles/header.scss";
import { NavMarquesita } from "./NavMarquesita";
import logoMarquesita from "../assets/img/LogotipoACADEMY_Color_En_Negativo_JPG.jpg";
import logoInstagram from "../assets/img/instagramLogo.svg";
export const Header = () => {

  console.log(logoMarquesita, logoInstagram)
  return (
    <div className="header__container">


      <img
        className="header__logo"
        src={logoMarquesita}
        alt="marquesita academy logo"
      />
      <NavMarquesita />

      <div className="header__instagram_container">
        <strong>@marquesita.academy</strong>
        <img src={logoInstagram} />
      </div>
    </div>
  );
};
