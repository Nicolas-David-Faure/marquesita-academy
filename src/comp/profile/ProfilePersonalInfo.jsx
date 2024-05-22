import React from 'react'
import './scss/profilePersonalInfo.scss'
export const ProfilePersonalInfo = ({language , user}) => {


  // courses: [],
  //   photoURL: null,
  //   uid: 'KkC5RhAZLcagC4QoyjvMQ9Q1aij2',
  //   createdAt: '21/5/2024',
  //   displayName: 'Nicolás Faure',
  //   name: 'Nicolás',
  //   isTeacher: false,
  //   email: 'faureee89@gmail.com',
  //   isStudent: true,
  //   lastname: 'Faure',
  //   isAdmin: true,
  //   lastLogin: '22/5/2024',
  //   emailVerified: true
  console.log(user)
  return (
    <div className='profilePersonalInfo__container'>
      <div className='profilePersonalInfo__photo'>
        {
          user.photoURL === null ? <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="profile"/> : null
        }
       
      </div>
      <div className='profilePersonalInfo__info'>
        <h4>{language === "es" ? 'Nombre' : 'Name'}: {user.name}</h4>
        <h4>{language === "es" ? 'Apellido' : 'Lastname'}: {user.lastname}</h4>
        <h4>{language === "es" ? 'Correo electronico' : 'Email'}: {user.email}</h4>
      </div> 
    </div>
  )
}
