import React from "react";
import "./scss/courseItem.scss";
import { FaStar } from "react-icons/fa";

export const CourseItem = ({
  id,
  imgURL,
  price,
  discount,
  active,
  description,
  title,
  instructor,
  rating,
  studentsEnrolled,
}) => {
  return (
    <li className="courseItem">
      <a href={`/course/${id}`} className="courseItem__link">
        <div className="courseItem__image">
          <img src={imgURL} alt={title} />
        </div>
        <div className="courseItem__content">
          <h3 className="courseItem__title">{title}</h3>
          <p className="courseItem__instructor">{instructor}</p>
          <div className="courseItem__rating">
            <span className="courseItem__rating-value">{rating}</span>
            <FaStar className="courseItem__star" />
            <span className="courseItem__students">({studentsEnrolled})</span>
          </div>
          <div className="courseItem__price">
            {discount ? (
              <>
                <span className="courseItem__price--discounted">€{discount}</span>
                <span className="courseItem__price--original">€{price}</span>
              </>
            ) : (
              <span className="courseItem__price--final">€{price}</span>
            )}
          </div>
        </div>
      </a>
    </li>
  );
};
