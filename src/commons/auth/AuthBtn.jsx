import React from 'react'
import './sass/authBtn.scss'
export const AuthBtn = ({type , title, handleClick}) => {
 
  return (
    <button className='authBtn' onClick={handleClick} >{title}</button>
  )
}
