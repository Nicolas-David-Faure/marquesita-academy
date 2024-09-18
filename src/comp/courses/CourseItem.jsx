import React from 'react'
import './scss/courseItem.scss'
export const CourseItem = ({id,imgURL , price , discount , active , description, title}) => {


  return (
    <li
      className='courseItem'
    >
      <figcaption>
        <img src={imgURL} alt="" />
      </figcaption>
       <div className='courseItem-content'>

       </div>

    </li>
  )
}
