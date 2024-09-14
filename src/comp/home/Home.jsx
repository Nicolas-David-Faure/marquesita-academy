import React from "react";
import "./scss/home.scss";
import { Banner } from "../../commons/Banner";
import { Aboutme } from "../Aboutme";
import { Courses } from "../courses/Courses";
import { Slider } from "../../commons/Slider";

import { arraySlogans } from "../../mooks/home";
import { useSelector } from "react-redux";
import { TitleHome } from "./TitleHome";

export const Home = ({ language, userLogin }) => {
  const { user } = useSelector((store) => store.authSlice);

  console.log(user);

  return (
    <>
      <div className="home__container">
        <TitleHome user={user} language={language} />

        <Banner />
        <div className="home__divisor"></div>
        <section className="home__section-1">
          <Slider content={arraySlogans} format="text" />
        </section>
        {/* <!-- Slider main container --> */}
      </div>
    </>
  );
};
