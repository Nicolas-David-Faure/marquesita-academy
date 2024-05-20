import React , { useEffect, useState } from "react";
import './App.css';
import { Routes , Route } from 'react-router-dom'
//firebase
import { db , getPrueba , auth } from "./config/config";
import {  onAuthStateChanged } from 'firebase/auth'

//components
import { Home } from "./comp/Home";
import { Aboutme } from "./comp/Aboutme";
import { Header } from "./comp/Header";
import { Courses } from "./comp/Courses";

//redux
import { useDispatch , useSelector } from 'react-redux'
import { toggleAuthModal } from './store/slice/auth/authSlice'


export function App (){
  const language = useSelector(state => state.languageSlice.language)

  const [ user , setUser ] = useState(null);




  const dispatch = useDispatch()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    getPrueba(db).then((data) => {
      console.log(data);
    });
  }, [db]);



  console.log(user);
  return (

    <main onClick={()=>dispatch(toggleAuthModal(false))} className="app__container">
      <Header language={language}/>
     
      <Home language={language} />
      <Aboutme language={language}/>
      <Courses language={language}/>
    </main>
  )
}