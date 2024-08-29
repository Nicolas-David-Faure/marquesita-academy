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
import ModalConfirmDelete from "../../commons/ModalConfirmDelete";
import { deleteModule } from "../../config/services/courses/deleteModule";
//Redux
import { useSelector } from "react-redux";
export const ProvideCourse = () => {
  const [course, setCourse] = useState(null);
  const [reload, setReload] = useState(false);
  const [modalState, setModalState] = useState({ module: null, state: false });
  const {language} = useSelector(state => state.languageSlice)
  const { id } = useParams();

  useEffect(() => {
    findCourseById(id)
      .then((res) => {
        setCourse(res);
      })
      .catch((err) => console.error(err));
  }, [id, reload]);

  const handleModuleAdded = () => {
    setReload((prev) => !prev);
  };

  const handleDeleteModule = async () => {
      await deleteModule({ courseID: id, moduleID: modalState.module.id });
      handleModuleAdded()
      setModalState({ module: null , state: false });
    return;
  };

  const handleCancelModalConfirm = () => {
    setModalState({ module: null , state: false });
    return;
  };

  return (
    <section className="provideCourse">
      {!course ? (
        <span className="provideCourse__spinner">
          <Spinner />
        </span>
      ) : (
        <>
          {modalState.state && (
            <ModalConfirmDelete
              handleDelete={handleDeleteModule}
              handleCancel={handleCancelModalConfirm}
            />
          )}
          <CourseResume course={course} />
          <CourseModules
            language={language}
            handleModuleAdded={handleModuleAdded}
            course={course}
            idDoc={id}
            handleDeleteModule={setModalState}
          />
        </>
      )}
    </section>
  );
};
