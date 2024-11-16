import React from "react";
import "./scss/courseResume.scss";
//utils
import { dateToString } from "../../utils/dateToString";

export const CourseResume = ({ course }) => {
  return (
    <div className="provideCourse__courseResume">
      <h3>{course.title}</h3>

      <div className="provideCourse__courseResume_content scroll_bar">
        <CourseResumeImg course={course} />

        <CourseDescription course={course} />
      </div>
    </div>
  );
};

const CourseResumeImg = ({ course }) => {
  return (
    <figure>
      <img src={course.imgURL} alt={course.description} />
      <figcaption></figcaption>
    </figure>
  );
};

const CourseDescription = ({ course }) => {
  return (
    <article className="courseResume__courseDesctiption">
      <p>Descripción: {course.description}</p>
      <p>Fecha de creación: {dateToString(course.createdAt)}</p>
      <p>Activo: {course.active ? "Sí" : "No"}</p>
    </article>
  );
};

// {
//     imgURL:
//       'https://firebasestorage.googleapis.com/v0/b/marquesita-academy.appspot.com/o/courses%2FphotoCourses%2Fmeme.jpeg?alt=media&token=10acb0ae-fe2a-4f3c-a435-2ed7eebe9ef9',
//     createdAt: _Timestamp { seconds: 1716709820, nanoseconds: 512000000 },
//     price: 0,
//     description: 'prueba descripcion',
//     discount: null,
//     title: 'curso prueba',
//     modules: [],
//     active: false
//   }
