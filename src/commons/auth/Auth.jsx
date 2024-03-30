import React from 'react'
import './sass/auth.scss'
import { AuthBtn } from './AuthBtn'
export const Auth = () => {

  const handleOpenLogin = () => {
    console.log('login')
  }


  const handleOpenRegister = () => {
    console.log('register')
  }
  return (
    <div className='auth__container'>
      <AuthBtn handleClick={handleOpenLogin}  title={'Iniciar'} />
      <AuthBtn handleClick={handleOpenRegister} title={'Registrarse'} />

    </div>
  )
}
