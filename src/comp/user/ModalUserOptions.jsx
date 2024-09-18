import React, { useLayoutEffect, useState } from "react";
//router
import { useNavigate } from "react-router-dom";
//styles
import "./sass/modalUserOptions.scss";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../config/config";
import { signOut } from "firebase/auth";
import { setUser } from "../../store/slice/auth/authSlice";
//components
import { motion } from "framer-motion";
//icons
import { GiEyelashes } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";

import { v4 as uuidv4 } from 'uuid';

export const ModalUserOptions = ({ language }) => {
  const { user } = useSelector((state) => state.authSlice);
  const { screenWidth } = useSelector((state) => state.screenSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [animateEnter, setAnimateEnter] = useState(false);

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        handleNavigate("/");
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  let animation = SelectAnimation(screenWidth);

  const itemsLinks = [
    {
      title: {
        es: "Perfil",
        en: "Profile",
      },
      path: `/profile/${user.uid}`,
      icon: GiEyelashes,
    },
    {
      title: {
        es: "Mis cursos",
        en: "My courses",
      },
      path: "/profile/myCourses",
      icon: FaBookReader,
    },
    {
      title: {
        es: "Configuración",
        en: "Settings",
      },
      path: "/settings",
      icon: VscSettings,
    },
  ];

  return (
    <motion.div
      initial={animation.enterInitial}
      animate={animation.enter}
      className={`modalUserOptions__main`}
    >
      <h4>Hola  <strong>{user.displayName?.split(' ')[0]}!</strong></h4>
      <ul>
        {itemsLinks.map(({ title, path, icon }) => (
          <Item
            key={uuidv4()}
            handleNavigate={handleNavigate}
            language={language}
            title={title}
            path={path}
            icon={icon}
          />
        ))}
        <li onClick={handleSingOut}>
          <p>{language === "es" ? "Cerrar sesion" : "Logout"} </p>

          <CiLogout  className="modalUserOptions__main-icon-default"/>
        </li>
      </ul>
    </motion.div>
  );
};

const Item = ({ title, path, icon : Icon, language, handleNavigate }) => {



  return (
    <li  onClick={() => handleNavigate(path)}>
      <p>{title[language]}</p>
      <Icon className='modalUserOptions__main-icon-default' />
    </li>
  );
};

const SelectAnimation = (screenWidth) => {
  const isSmallScreen = screenWidth > 768;

  const animationSmallScreen = {
    enter: {
      x: 0,
    },
    enterInitial: {
      x: 200,
    },
  };

  return {
    enter: isSmallScreen ? { y: 0 } : animationSmallScreen.enter,
    enterInitial: isSmallScreen
      ? { y: -100 }
      : animationSmallScreen.enterInitial,
  };
};
