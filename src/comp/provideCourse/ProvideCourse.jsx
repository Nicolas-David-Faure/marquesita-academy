import React, { useEffect, useState } from "react";
//router
import { useParams } from "react-router-dom";

//styles
import "./scss/provideCourse.scss";
import { findCourseById } from "../../config/services/courses/findCourseById";
import { Spinner } from "../../commons/otros/Spinner";

//components
import { CourseResume } from "./CourseResume";
import { CourseModules } from "./CourseModules";

export const ProvideCourse = () => {
  const [course, setCourse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    findCourseById(id)
      .then((res) => {
        setCourse(res);
      })
      .catch((err) => console.error(err));
  }, [id]);

  console.log(course);

  return (
    <section className="provideCourse">
      {!course ? (
        <span className="provideCourse__spinner">
          <Spinner />
        </span>
      ) : (
        <>
          <CourseResume course={course} />
          <CourseModules course={course}/>
        </>
      )}
    </section>
  );
};
