import React from 'react'
import logoMarquesita from '../img/LogotipoACADEMY_Color_En_Negativo_JPG.jpg';
import logoInstagram from '../img/instagramLogo.svg';
import '../styles/navMarquesita.scss';


export const NavMarquesita = () => {


  return (
    <nav  className="navMarquesita__container">


        <img className='nav__marquesita__logo' src={logoMarquesita} alt="marquesita academy logo" />
        <ul className="navMarquesita__list">
          <li className="navMarquesita__item">Inicio</li>
          <li className="navMarquesita__item">Sobre mi</li>
          <li className="navMarquesita__item">Capacitaciones y cursos</li>
          <li className="navMarquesita__item">Contacto</li>          
        </ul>

        <button className='navMarquesita__instagram_container'>
            <img src={logoInstagram}  />
          
            <strong>
              @marquesita.academy
            </strong>


        </button>
      </nav>
  )
}
