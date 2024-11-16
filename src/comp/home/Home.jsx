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
//mooks
import { sliderQuotes } from "../../mooks/home";
import { Footer } from "../footer/Footer";

//img
import logoCertificate from "../../assets/img/ecouncil-logo.png";

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
const Certificate = ({ language }) => {
  return (
    <div className="home__section_part-1">
      <img src={logoCertificate} alt="" />

      <article className="home__section_part-1_article">
        <h4>Cursos certificados de lash training</h4>
        <p>
          Los cursos son impartidos por Natalia Díaz, experta en extensiones de
          pestañas con años de experiencia en el sector. Aprende técnicas como
          volumen ruso, técnica clásica y megavolumen, y obtén una certificación
          reconocida.
        </p>
        <p>
          Únete a Natalia Díaz y lleva tu carrera al siguiente nivel. Los cursos
          incluyen materiales, prácticas en vivo y soporte continuo después de
          la capacitación.
        </p>
      </article>
      <button className="home__section_part-1_viewCourseBtn">Ver cursos</button>
    </div>
  );
};
