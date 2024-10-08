import React from 'react'
import './sass/modalAuth.scss'
//components
import { RegisterAndLogin } from './RegisterAndLogin'
//icons
import { CloseIcon } from '../../commons/icons/CloseIcon'
//redux
import { useDispatch } from 'react-redux'
import { toggleAuthModal } from '../../store/slice/auth/authSlice'
//framer-motion
import { motion } from 'framer-motion'



export const ModalAuth = ({ type , language }) => {

  const dispatch = useDispatch()






  return (
    <motion.section 
      initial={{x: '100%'}}
      animate={{x: 0}}
      onClick={(e)=>e.stopPropagation()} 
       className='modalAuth__container'>
      <div className='modalAuth__close' onClick={()=>dispatch( toggleAuthModal(false) )}>
         <CloseIcon  />
      </div>
      <RegisterAndLogin  type={type} language={language} />
    </motion.section>
  )
}
