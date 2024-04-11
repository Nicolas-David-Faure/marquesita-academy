import { Aboutme } from "./comp/Aboutme";
import { Home } from "./comp/Home";
import { Routes , Route } from 'react-router-dom'
import { Header } from "./comp/Header";
import './App.css';
import { Courses } from "./comp/Courses";
import { db , getPrueba } from "./config/config";
import { useEffect } from "react";
export function App (){

  useEffect(() => {
    getPrueba(db).then((data) => {
      console.log(data);
    });
  }, [db]);
  return (

    <main className="app__container">
      <Header />
      
      <Home />
      <Aboutme />
      <Courses />
    </main>
  )
}