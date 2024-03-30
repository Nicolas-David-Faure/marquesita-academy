import React from "react";
import "../styles/aboutme.scss";
import { Link } from "react-router-dom";
import nataliabx from "../assets/img/nati-b-x.png";

export const Aboutme = () => {
  return (
    <section className="aboutme__container">
     { /* <div className="aboutme__imagen">
        <img src={nataliabx} alt="imagen natalia diaz" />
      </div>*/}

      <div className="aboutme__text">
        <h3>Descubre quienes somos y qué hacemos</h3>
        <p>
          <strong>Natalia Florencia Díaz</strong> es una profesional del
          embellecimiento de miradas con más de 2 años de experiencia. Ha
          perfeccionado su arte en diversas capacitaciones, dominando técnicas
          como la laminación de pestañas y cejas, perfilado, coloración,
          extensiones de pestañas, y micropigmentación. Desde 2019, Natalia ha
          estado compartiendo su conocimiento en diversas capacitaciones. Ya sea
          que quieras comenzar una nueva carrera o mejorar tus habilidades
          existentes, nuestros cursos están diseñados para ti. ¡Únete a nosotros
          y descubre el poder de realzar la belleza con Natalia Florencia Díaz!
        </p>
      <Link to={"/capacitaciones"}>Ver capacitaciones</Link>
      </div>
     
    </section>
  );
};
