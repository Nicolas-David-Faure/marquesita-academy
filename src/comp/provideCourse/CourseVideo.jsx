import React from "react";
import './scss/courseVideo.scss'
export const CourseVideo = ({ urlImgVideo, title , index , description }) => {
  

  console.log(urlImgVideo)
  return (
    <li className="coursemodule__videos_video">
      <figcaption>
        <video  src={urlImgVideo}   controls  alt="img" />
      </figcaption>
      <div className="coursemodule__videos_video_resume">
        <header>
          <h3>{title?.split(".")[0]}</h3>
          <p>#{index + 1}</p>
        </header>
        <p>
          {description}
        </p>
      </div>
    </li>
  );
};
