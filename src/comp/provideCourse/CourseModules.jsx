import React, { useState, useRef } from "react";
//styles
import "./scss/courseModules.scss";
//services
import { addNewModule } from "../../config/services/courses/addNewModule";
//icons
import { CloseIcon } from "../../commons/icons/CloseIcon";
import { ChevronDown } from "../../commons/icons/ChevronDown";
import { TrashIcon } from "../../commons/icons/TrashIcon";
import { PenEditIcon } from "../../commons/icons/PenEditIcon";
import { PlusIcon } from "../../commons/icons/PlusIcon";
//motion
import { motion } from "framer-motion";
import { handleUploadVideo } from "../../config/services/admin/handleUploadVideo";
import { useDispatch } from "react-redux";

export const CourseModules = ({
  course,
  idDoc,
  handleModuleAdded,
  handleDeleteModule,
  language,
}) => {
  return (
    <section className="courseModules">
      <h3>Módulos</h3>

      {course.modules?.length ? (
        course.modules.map((module) => (
          <CourseModule
            handleDeleteModule={handleDeleteModule}
            key={module.id}
            module={module}
            language={language}
            course={{ ...course,idDoc}}
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

const CourseModule = ({ module, handleDeleteModule, language, course , handleModuleAdded }) => {
  const [iconsCursorPointer, setIconsCursorPointer] = useState({
    chevronDown: false,
    penEdit: false,
    trash: false,
  });

  const [showVideos, setShowVideos] = useState(false);

  const handleManageStateIcon = (state, name) => {
    setIconsCursorPointer((prev) => ({ ...prev, [name]: state }));
  };



  return (
    <section className="coursemodule__container">
      <div className="coursemodule__module">
        <motion.span
          onMouseEnter={() => handleManageStateIcon(true, "chevronDown")}
          onMouseLeave={() => handleManageStateIcon(false, "chevronDown")}
          className="coursemodule__container_icon"
        >
          <div onClick={() => setShowVideos((prev) => !prev)}>
            <ChevronDown
              fill={iconsCursorPointer.chevronDown ? "#f2f2f2" : "#afafaf"}
            />
          </div>
        </motion.span>
        <h3>{module.title}</h3>
        <span className="coursemodule__container_icons">
          <div
            onMouseEnter={() => handleManageStateIcon(true, "penEdit")}
            onMouseLeave={() => handleManageStateIcon(false, "penEdit")}
          >
            <PenEditIcon
              fill={iconsCursorPointer.penEdit ? "#f2f2f2" : "#afafaf"}
            />
          </div>

          <div
            onMouseEnter={() => handleManageStateIcon(true, "trash")}
            onMouseLeave={() => handleManageStateIcon(false, "trash")}
            onClick={() => handleDeleteModule({ module: module, state: true })}
          >
            <TrashIcon
              fill={iconsCursorPointer.trash ? "#f2f2f2" : "#afafaf"}
            />
          </div>
        </span>
      </div>

      <div className="coursemodule__videos">
        {
          module?.videos.map((e, i) => {
            return <li key={i}>
             <p>{e.title}</p> 
            </li>
          })
        }

        <AddNewVideo handleModuleAdded={handleModuleAdded} module={module} language={language} course={course} />
      </div>
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

const AddNewVideo = ({ language, module, course , handleModuleAdded }) => {
  const dispatch = useDispatch();

  
  const initialState = {
    file: null,
    name: null,
    loading: false,
    extension: null,
  }
  //!Video add
  const inputAddVideoRef = useRef(null);
  const [video, setVideo] = useState({
    file: null,
    name: null,
    loading: false,
    extension: null,
  });

  const handleChangeAddNewVideo = (e) => {
    const file = e.target.files[0];
    setVideo((prev) => ({ ...prev, file, extension: file.name.split(".")[1] }));
  };

  const buttonAdd = {
    en: video.loading ? "Loading.." : "Add",
    es: video.loading ? "Cargando.." : "Añadir",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseName = course.title.replace(/ /g, "_").toLowerCase();
    const moduleName = module.title.replace(/ /g, "_").toLowerCase();
    const path = `courses/${courseName}/${moduleName}/${video.name}.${video.extension}`;
    setVideo((prev) => ({ ...prev, loading: true }));
    await handleUploadVideo({
      courseID: course.idDoc,
      moduleID: module.id,
      file: video.file,
      fileName: video.name + "." + video.extension,
      path,
      dispatch,
    });
    handleModuleAdded()
    setVideo(initialState);
  };

  return (
    <li className="coursemodule__videos_add">
      {!video.file ? (
        <button
          className="coursemodule__videos_add_btn"
          onClick={() => inputAddVideoRef.current.click()}
        >
          <PlusIcon />
          <input
            onChange={handleChangeAddNewVideo}
            ref={inputAddVideoRef}
            type="file"
            name="video"
            id="input_add_video"
          />
          Añadir video
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="coursemodule__videos_add_container"
        >
          <p>{video.file?.name}</p>
          <input
            disabled={video.loading}
            onChange={(e) =>
              setVideo((prev) => ({ ...prev, name: e.target.value }))
            }
            required
            placeholder={language === "en" ? "Name video" : "Nombre del video"}
            type="text"
            name="name"
            className={video.loading ? "loading__input" : ""}
          />

          <button className={video.loading ? "greyBtn" : ""} type="submit">
            {buttonAdd[language]}
          </button>
        </form>
      )}
    </li>
  );
};
