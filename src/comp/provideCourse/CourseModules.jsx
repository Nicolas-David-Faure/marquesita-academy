import React, { useState } from "react";
//styles
import "./scss/courseModules.scss";
//services
import { addNewModule } from "../../config/services/courses/addNewModule";
//icons
import { CloseIcon } from "../../commons/icons/CloseIcon";
import { ChevronDown } from "../../commons/icons/ChevronDown";
import { TrashIcon } from "../../commons/icons/TrashIcon";
import { PenEditIcon } from "../../commons/icons/PenEditIcon";
import { PlusIcon } from '../../commons/icons/PlusIcon'
//motion
import { motion } from "framer-motion";


export const CourseModules = ({ courses, idDoc, handleModuleAdded , handleDeleteModule }) => {



  return (
    <section className="courseModules">
      <h3>Módulos</h3>

      {courses.modules?.length ? (
        courses.modules.map((module) => (
          <CourseModule handleDeleteModule={handleDeleteModule}  key={module.id} module={module} />
        ))
      ) : (
        <p>Parece que todavía no has añadido a ningun módulo</p>
      )}
      <AddNewModule  handleModuleAdded={handleModuleAdded} idDoc={idDoc} />
    </section>
  );
};

const CourseModule = ({ module , handleDeleteModule }) => {
 
  const [iconsCursorPointer, setIconsCursorPointer] = useState({
    chevronDown: false,
    penEdit: false,
    trash: false,
  });

  const [showVideos, setShowVideos] = useState(false) 



  const handleManageStateIcon = (state, name) => {
    setIconsCursorPointer((prev) => ({ ...prev, [name]: state }));
  };




  return (
    <section 
    className="coursemodule__container"
    >
    <div className="coursemodule__module">
      <motion.span
        onMouseEnter={() => handleManageStateIcon(true, "chevronDown")}
        onMouseLeave={() => handleManageStateIcon(false, "chevronDown")}
        className="coursemodule__container_icon"
      >
        <div
        
        onClick={()=>setShowVideos(prev => !prev)}
        >
        
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
          onClick={()=>handleDeleteModule({module: module , state: true})}
        >
          <TrashIcon
            fill={iconsCursorPointer.trash ? "#f2f2f2" : "#afafaf"}
          />
        </div>
      </span>
    </div>


    <div className="coursemodule__videos">

     <li className="coursemodule__videos_add">
    
     <PlusIcon />
      Añadir video
     </li>

    </div>


    </section>

   
  );
};









const CourseModuleItems = () => {
  return <li></li>;
};

const AddNewModule = ({ idDoc, handleModuleAdded }) => {
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

//Module schema
//Title , description, videos = [{title, description, attachedContent, url}]
