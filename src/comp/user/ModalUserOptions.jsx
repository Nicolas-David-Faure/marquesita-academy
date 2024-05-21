import React from 'react'
//styles
import './sass/modalUserOptions.scss'
import { useSelector , useDispatch } from 'react-redux'
import { auth } from '../../config/config'
import { signOut } from 'firebase/auth'
import { setUser } from '../../store/slice/auth/authSlice'
//components


export const ModalUserOptions = ({ language }) => {
  const {user} = useSelector(state => state.authSlice)
  const dispatch = useDispatch()

  const handleSingOut = () => {
    signOut(auth).then(()=>{
      dispatch(setUser(null))
    }).catch((error)=>{
      console.log(error)
    })
  }


  return (
    <div className='modalUserOptions__main'>
     <h4>Hola {user.displayName}!</h4>
        <ul>
          <li>{language === "es" ? 'Perfil' : 'Profile'}</li>
          <li>{language === "es" ? 'Mis cursos' : 'My courses'}</li>
          <li>{language === "es" ? 'Configuracion' : 'Settings'}</li>
          <li onClick={handleSingOut}>{language === "es" ? 'Cerrar sesion' : 'Logout'}</li>
        </ul>
    </div>
  )
}
