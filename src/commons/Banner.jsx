import React from 'react'
import './banner.scss'
import logoMarquesita from '../assets/img/marquesita_academy_logo.png';
export const Banner = () => {
  return (
    <div className='banner__container'>
      <div className='banner__container_background'>
        
      <img src={logoMarquesita} alt="logo marquesita academy" />  
      </div>  

    </div>
  )
}
