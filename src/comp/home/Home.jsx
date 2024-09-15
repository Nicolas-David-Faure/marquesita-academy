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
import logoCertificate from '../../assets/img/ecouncil-logo.png' 




export const Home = ({ language, userLogin }) => {
  const { user } = useSelector((store) => store.authSlice);

  console.log(user);

  return (
    <>
      <div className="home__container">
        {
          user && <TitleHome user={user} language={language} />
        }
       

        <Banner />
       
        <section className="home__section-1">

          <div className="home__section_part-1">

            <img src={logoCertificate} alt="" />

            <article className="home__section_part-1_article">

            <h4>Cursos certificados de lash training</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus voluptate eos dolore eaque nesciunt, ratione reprehenderit perferendis aut, et velit, nobis aspernatur cumque accusantium facilis unde doloribus iste saepe?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus voluptate eos dolore eaque nesciunt, ratione reprehenderit perferendis aut, et velit, nobis aspernatur cumque accusantium facilis unde doloribus iste saepe?</p>
            </article>
            <button className="home__section_part-1_viewCourseBtn" >
              Ver cursos
            </button>
          </div>

          <Slider content={sliderQuotes} format="text" />

        </section>
        {/* <!-- Slider main container --> */}

        <Footer />
      </div>
    </>
  );
};
