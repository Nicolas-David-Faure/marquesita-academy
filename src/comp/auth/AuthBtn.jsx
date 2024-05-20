import React from 'react'
import './sass/authBtn.scss'
//redux
import { useDispatch , useSelector } from 'react-redux'
import { toggleAuthModal , setAuthType } from '../../store/slice/auth/authSlice'
export const AuthBtn = ({type , title}) => {
  const {modalState ,  type : typeRedux } = useSelector(state => state.authSlice)


  const dispatch = useDispatch()

  const handleModal = (e) => {
   e.stopPropagation()
    dispatch(setAuthType({type , modalState: type === typeRedux ? !modalState : true}))

    
  }



 
  return (
    <button  onClick={handleModal} className='authBtn'  >{title}</button>
  )
}
