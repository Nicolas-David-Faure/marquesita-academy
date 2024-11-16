import React from "react";
//styles
import "./scss/header.scss";
//redux
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthModal } from "../../store/slice/auth/authSlice";

//components
import { NavMarquesita } from "../NavMarquesita";
import { Auth } from "../auth/Auth";

//images

import logoCorona from "../../assets/img/logos/corona-sb.png";
import logoMarquesita from "../../assets/img/marquesita_academy_logo.png";
import logoInstagram from "../../assets/img/instagramLogo.svg";
import UserIcon from "../../commons/icons/UserIcon";
import { ModalAuth } from "../auth/ModalAuth";
import { ModalUserOptions } from "../user/ModalUserOptions";
import { useNavigate } from "react-router-dom";

export const Header = ({ language }) => {
  const authState = useSelector((store) => store.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="header__container">
      <img
        className="header__logo"
        src={logoCorona}
        alt="marquesita academy logo"
        onClick={() => navigate("/")}
      />
      <NavMarquesita language={language} />

      <div className="header__instagram_container">
        <a
          href="https://www.instagram.com/marquesita.20/?ref=playak.com&hl=pa"
          target="_blank"
        >
          <img src={logoInstagram} />
        </a>
      </div>
      {authState.user && (
        <div
          className="auth__user"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleAuthModal(!authState.modalState));
          }}
        >
          <UserIcon />

          {authState.modalState && <ModalUserOptions language={language} />}
        </div>
      )}
    </div>
  );
};
