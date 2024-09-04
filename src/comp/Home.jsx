import React from "react";
import "../styles/home.scss";
import { Banner } from "../commons/Banner";
import { Aboutme } from "./Aboutme";
import { Courses } from "./courses/Courses";
export const Home = ({ language }) => {
  return (
    <>
      <div className="home__container">
        <Banner />
        {/*<div className='home__title'>

        <h1>Marquesita</h1>

        <h2>academy</h2>
      </div>


      <div className="home__promotion">
          <span className="home__promotion__span">¡Inscribite ahora! </span>
          <span className="home__promotion__span">y obtené un 10% de descuento</span>
  </div>*/}
      </div>

      {/* <Aboutme language={language} /> */}
      {/* <Courses language={language} /> */}
    </>
  );
};
