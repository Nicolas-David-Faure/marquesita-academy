import React from "react";
import './scss/courseVideo.scss'
export const CourseVideo = ({ urlImgVideo, title , index }) => {
  return (
    <li className="coursemodule__videos_video">
      <figcaption>
        <img src={urlImgVideo} alt="img" />
      </figcaption>
      <div className="coursemodule__videos_video_resume">
        <header>
          <h3>{title?.split(".")[0]}</h3>
          <p>#{index + 1}</p>
        </header>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          accusamus similique, rerum provident, autem ab animi officia corrupti,
          at voluptatem alias dolore culpa sed doloremque modi porro dolorem
          illum fugiat!
        </p>
      </div>
    </li>
  );
};
