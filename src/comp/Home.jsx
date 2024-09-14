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
        <div className='home__divisor'></div>

          
      </div>

    </>
  );
};
