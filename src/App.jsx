import { Aboutme } from "./comp/Aboutme";
import { Home } from "./comp/Home";
import { Routes , Route } from 'react-router-dom'
import { Header } from "./comp/Header";
import './App.css';
export function App (){



  return (

    <main className="app__container">
      <Header />
      
      <Home />
      <Aboutme />
    </main>
  )
}