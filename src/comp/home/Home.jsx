import React from "react";
//style
import "./scss/home.scss";
//redux
import { useSelector } from "react-redux";
//commons
import { Banner } from "../../commons/Banner";
import { Slider } from "../../commons/Slider";
//components
import { TitleHome } from "./TitleHome";
import { Certificate } from "./Certificate";
//mooks
import { sliderQuotes } from "../../mooks/home";
import { Footer } from "../footer/Footer";

//img

export const Home = ({ language, userLogin }) => {
  const { user } = useSelector((store) => store.authSlice);

  console.log(user);

  return (
    <>
      <div className="home__container">
        {user && <TitleHome user={user} language={language} />}

        <Banner />

        <section className="home__section-1">
          <Slider content={sliderQuotes} format="text" />
          <Certificate language={language} />

        </section>
        {/* <!-- Slider main container --> */}

        <Footer />
      </div>
    </>
  );
};
