import { useNavigate } from "react-router-dom";
import logoCertificate from "../../assets/img/ecouncil-logo.png";


export const Certificate = ({ language }) => {
  const navigate = useNavigate();

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
      <button onClick={()=> navigate('/courses')} className="home__section_part-1_viewCourseBtn">Ver cursos</button>
    </div>
  );
};
