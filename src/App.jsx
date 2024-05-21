import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//firebase
import { db, getPrueba, auth, searchUserById } from "./config/config";
import { onAuthStateChanged } from "firebase/auth";

//components
import { Home } from "./comp/Home";
import { Aboutme } from "./comp/Aboutme";
import { Header } from "./comp/Header";
import { Courses } from "./comp/Courses";

//redux
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthModal, setUser } from "./store/slice/auth/authSlice";

export function App() {
  const language = useSelector((state) => state.languageSlice.language);
  const user = useSelector((state) => state.authSlice.user);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {

      console.log(user.reloadUserInfo.lastLoginAt)
  
      if (user) {
        const { uid } = user;
        searchUserById(uid)
          .then((userFinded) => {
            dispatch(setUser({...userFinded , emailVerified: user.emailVerified}));
          })
          .catch((e) => console.error(e));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  console.log(user);

  return (
    <main onClick={() => dispatch(toggleAuthModal(false))} className="app__container">
      <Header language={language} />

      <Home language={language} />
      <Aboutme language={language} />
      <Courses language={language} />
    </main>
  );
}
