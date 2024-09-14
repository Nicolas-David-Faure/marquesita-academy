import React from 'react'
import './scss/courseItem.scss'
export const CourseItem = ({id,imgURL , price , discount , active}) => {


  return (
    <li
      className='courseItem'
    >
      <figcaption>
        <img src={imgURL} alt="" />
      </figcaption>
       

    </li>
  )
}
