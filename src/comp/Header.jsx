import React from "react";
import "../styles/header.scss";
import { NavMarquesita } from "./NavMarquesita";

import logoCorona from '../assets/img/logos/corona-sb.png'
import logoMarquesita from "../assets/img/marquesita_academy_logo.png";
import logoInstagram from "../assets/img/instagramLogo.svg";
import { Auth } from "./auth/Auth";

export const Header = ({  language }) => {

  return (
    <div className="header__container">
      <img
        className="header__logo"
        src={logoCorona}
        alt="marquesita academy logo"
      />
      <NavMarquesita  language={language}/>

      <div className="header__instagram_container">
        <a href="https://www.instagram.com/marquesita.20/?ref=playak.com&hl=pa" target="_blank">
        <img src={logoInstagram} /></a>
      </div>

      <Auth language={language} />
    </div>
  );
};
