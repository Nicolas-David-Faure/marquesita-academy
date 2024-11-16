import React from "react";
import "./scss/courseItem.scss";
export const CourseItem = ({
  id,
  imgURL,
  price,
  discount,
  active,
  description,
  title,
}) => {

 




  return (
    <li className="courseItem">
      <figcaption>
        <img src={imgURL} alt="" />
      </figcaption>
      <div className="courseItem-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="courseItem-price">
          <span className={`courseItem-price-value ${discount ? 'courseItem-price-value-discount' : ''}`}>{price}</span>
          <span className="courseItem-price-discount">{discount}</span>
        </div>
      
        <div className="courseItem-footer">
          <span className="courseItem-footer-price">{price}</span>
          <span className="courseItem-footer-discount">{discount}</span>
          <button className="courseItem-footer-btn">
            {active ? "Active" : "Inactive"}
          </button>
        
          <button className="courseItem-footer-btn">Share</button>

          <button className="courseItem-footer-btn">Add to cart</button>
          <button className="courseItem-footer-btn">Buy now</button>
    
        </div>
      </div>
    </li>
  );
};
