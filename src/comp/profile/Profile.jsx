import React from 'react'
//styles
import './scss/profile.scss'
//components
import { ProfilePersonalInfo } from './ProfilePersonalInfo'
export const Profile = ( { language  , user}) => {
  return (
    <div className='profile__container'>
      
      <ProfilePersonalInfo language={language} user={user}/>
    </div>
  )
}


