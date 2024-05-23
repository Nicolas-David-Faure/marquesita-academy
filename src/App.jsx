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
import { Profile } from "./comp/profile/Profile";
//redux
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthModal, setUser } from "./store/slice/auth/authSlice";
import { useAuthStateListener } from "./hooks/useAuthStateListener";

export function App() {
  const language = useSelector((state) => state.languageSlice.language);
  const user = useSelector((state) => state.authSlice.user);

  const dispatch = useDispatch();
  useAuthStateListener()


  console.log(user);

  return (
    <main onClick={() => dispatch(toggleAuthModal(false))} className="app__container">
      <Header language={language} />
      <Routes>
        <Route path="/*" element={<Home language={language} />} />
        <Route path="/profile/:uid" element={<Profile language={language} user={user} />} />
      </Routes>
    
      
    </main>
  );
}
