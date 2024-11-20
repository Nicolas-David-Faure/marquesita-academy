import React, { useState, useRef } from "react";
//styles
import "./scss/courseModules.scss";
//services
import { addNewModule } from "../../config/services/courses/addNewModule";
//icons
import { CourseModule } from "./CourseModule";


export const CourseModules = ({
  course,
  idDoc,
  handleModuleAdded,
  handleDeleteModule,
  language,
}) => {
  return (
    <section className="courseModules">
      <h2>Módulos</h2>

      {course.modules?.length ? (
        course.modules.map((module) => (
          <CourseModule
            handleDeleteModule={handleDeleteModule}
            key={module.id}
            module={module}
            language={language}
            course={{ ...course, idDoc }}
            handleModuleAdded={handleModuleAdded}
          />
        ))
      ) : (
        <p>Parece que todavía no has añadido a ningun módulo</p>
      )}
      <AddNewModule handleModuleAdded={handleModuleAdded} idDoc={idDoc} />
    </section>
  );
};



const AddNewModule = ({ idDoc, handleModuleAdded, course }) => {
  const initialState = {
    title: "",
    description: "",
    toggle: false,
  };
  const [moduleInfo, setModuleInfo] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setModuleInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setModuleInfo((prev) => ({ ...prev, toggle: !prev.toggle }));
  };

  const handleAddNewModule = async () => {
    await addNewModule({ id: idDoc, moduleInfo });
    handleModuleAdded();
    setModuleInfo(initialState);
  };

  return (
    <div className="addNewModule">
      {moduleInfo.toggle && (
        <div className="addNewModule__inputs">
          <input
            onChange={handleChange}
            type="text"
            value={moduleInfo.title}
            name="title"
            placeholder="Titulo"
          />
          <textarea
            onChange={handleChange}
            type="text"
            value={moduleInfo.description}
            name="description"
            placeholder="Descripción"
          />

          <button onClick={handleAddNewModule}>Crear</button>
        </div>
      )}

      <button
        className={`addNewModule__btn_${!moduleInfo.toggle ? "add" : "cancel"}`}
        onClick={handleToggle}
      >
        {!moduleInfo.toggle ? "Añadir nuevo módulo" : "Cancelar"}
      </button>
    </div>
  );
};

