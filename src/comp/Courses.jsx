import React from "react";
import '../styles/courses.scss';

const cursos =[
  {
    "title": "Técnica Clásica",
    "temarios": [
      "Introducción a la técnica",
      "Anatomía del ojo",
      "Tricología de la pestaña",
      "Ciclo de vida",
      "Grosor, curvas, longitudes",
      "Distancia de colocación",
      "Finalización NG",
      "Diseños para cada tipos de ojos",
      "Técnicas de aislamiento",
      "Técnicas para adhesivo",
      "Materiales de calidad, ficha de consentimiento",
      "Preparación de la pestaña natural",
      "Técnica de colocación",
      "Service",
      "Adhesivos",
      "Remoción",
      "Seguridad e higiene",
      "Cuidados pre y post colocación",
      "Patologías, enfermedades, contraindicaciones"
    ]
  },
  {
    "title": "Técnica Clásica Avanzada",
    "temarios": [
      "Direccionamiento",
      "Trabajo en capas y filas",
      "Mapping",
      "Tapping",
      "Deeping",
      "Curvas modernas",
      "Retención",
      "Peso y fibras correctas",
      "Adhesivos: stiky, retención, posibles problemas"
    ]
  }
]




export const Courses = () => {

  

  return <div className="courses__container">
    

    {
      cursos.map((curso, index) => {
       return <ul key={index + `${curso}`} className="courses__temarios">
          <h2>{curso.title}</h2>
        {
          curso.temarios.map((temario, index) => {
            return <li key={index} className="courses__temarios_lista">{temario}</li>
          })
        }
        </ul>

      })
    }
   
  </div>;
};

