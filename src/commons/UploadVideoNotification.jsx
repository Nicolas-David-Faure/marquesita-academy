

import React from 'react'
//redux
import { useSelector } from 'react-redux'

import { CloseIcon } from './icons/CloseIcon'

import './sass/uploadVideoNotification.scss'
export const UploadVideoNotification = ({language }) => {
  const { video } = useSelector(store => store.coursesSlice)
  const progress = video.videoUploadingPercentage

  const handleClose =() => {
    
  }
  return (
    <span className={`uploadVideoNotification ${progress < 100 ?  'enterAnimate' : 'exitAnimate'}`}>
        <span className='uploadVideoNotification__close'>
          <CloseIcon />

        </span>

        <div> 
          <p>{language == "en" ? 'Loading' :  'Cargando' } { video.videoName }..</p>
           
        </div>


        <div className='uploadVideoNotification__loading'>
          <p>{progress}%</p> 
          <div style={{width: `${progress}%`}}> </div>
        </div>

    </span>
  )
}
