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


//   module,
//   handleDeleteModule,
//   language,
//   course,
//   handleModuleAdded,
// }) => {
//   const [iconsCursorPointer, setIconsCursorPointer] = useState({
//     chevronDown: false,
//     penEdit: false,
//     trash: false,
//   });

//   const [showVideos, setShowVideos] = useState(false);
  
//   const handleManageStateIcon = (state, name) => {
//     setIconsCursorPointer((prev) => ({ ...prev, [name]: state }));
//   };

//   return (
//     <section className="coursemodule__container">
//       <div className="coursemodule__module">
//         <motion.span
//           onMouseEnter={() => handleManageStateIcon(true, "chevronDown")}
//           onMouseLeave={() => handleManageStateIcon(false, "chevronDown")}
//           className="coursemodule__container_icon"
//         >
//           <div onClick={() => setShowVideos((prev) => !prev)}>
//             <ChevronDown
//               fill={iconsCursorPointer.chevronDown ? "#f2f2f2" : "#afafaf"}
//             />
//           </div>
//         </motion.span>
//         <h3>{module.title}</h3>
//         <span className="coursemodule__container_icons">
//           <div
//             onMouseEnter={() => handleManageStateIcon(true, "penEdit")}
//             onMouseLeave={() => handleManageStateIcon(false, "penEdit")}
//           >
//             <PenEditIcon
//               fill={iconsCursorPointer.penEdit ? "#f2f2f2" : "#afafaf"}
//             />
//           </div>

//           <div
//             onMouseEnter={() => handleManageStateIcon(true, "trash")}
//             onMouseLeave={() => handleManageStateIcon(false, "trash")}
//             onClick={() => handleDeleteModule({ module: module, state: true })}
//           >
//             <TrashIcon
//               fill={iconsCursorPointer.trash ? "#f2f2f2" : "#afafaf"}
//             />
//           </div>
//         </span>
//       </div>

//       <div className="coursemodule__videos">
//         {showVideos &&  module?.videos.map((e, i) => {
//           return (
//             <li className="coursemodule__videos_video" key={i}>
//               <figcaption>
//                 <img src={urlImgVideo} alt="img" />
//               </figcaption>
//               <div className="coursemodule__videos_video_resume">
//                 <header>
//                   <h3>{e.title?.split('.')[0]}</h3>
//                   <p>#{i+1}</p>
//                 </header>
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Ullam accusamus similique, rerum provident, autem ab animi
//                   officia corrupti, at voluptatem alias dolore culpa sed
//                   doloremque modi porro dolorem illum fugiat!
//                 </p>
//               </div>
//             </li>
//           );
//         })}

//         <AddNewVideo
//           handleModuleAdded={handleModuleAdded}
//           module={module}
//           language={language}
//           course={course}
//         />
//       </div>
//     </section>
//   );
// };

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

