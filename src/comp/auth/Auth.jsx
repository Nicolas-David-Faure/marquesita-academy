import React from 'react'
//styles
import './sass/auth.scss'
//components
import { AuthBtn } from './AuthBtn'
import { ModalUserOptions } from '../user/ModalUserOptions'
//redux
import {  useDispatch , useSelector } from 'react-redux'
import { ModalAuth } from './ModalAuth'
import { toggleAuthModal ,  setUser } from '../../store/slice/auth/authSlice'
//icons
import UserIcon  from '../../commons/icons/UserIcon'

import { auth } from '../../config/config'
import { signOut } from "firebase/auth";



//components
export const Auth = ({ language }) => {

    const authState = useSelector(state => state.authSlice)
    const dispatch = useDispatch()


  return (
    <div className='auth__container'>

      {
        !authState.user ? 
        (
          <>
          <AuthBtn  type={'login'} title={ language === "es" ?  'Iniciar' : "Login"} />
          <AuthBtn  type={'register'}  title={ language === "es"  ? 'Registrarse' : "Register"} />
          
          </>
        ): (
          <div className='auth__user' onClick={(e)=> {
            e.stopPropagation()
             dispatch(toggleAuthModal(!authState.modalState ))
          }}>
            <UserIcon />
         
          </div>
        )
      }


     {authState.modalState && (!authState.user  ? <ModalAuth type={authState.type} /> : <ModalUserOptions language={language} />)}
    </div>
  )
}
