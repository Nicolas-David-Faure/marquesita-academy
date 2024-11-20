import { useState } from "react";
import "./scss/courseModule.scss";
import { ChevronDown } from "../../commons/icons/ChevronDown";
import { PenEditIcon } from "../../commons/icons/PenEditIcon";
import { TrashIcon } from "../../commons/icons/TrashIcon";
import { motion } from "framer-motion";
import { AddNewVideo } from "./AddNewVideo";
import { CourseVideo } from "./CourseVideo";

const urlImgVideo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSmmp-Xbr4lmv6GXfg3cgSdGduF6NAoqC_w&s";
export const CourseModule = ({
  module,
  handleDeleteModule,
  language,
  course,
  handleModuleAdded,
}) => {
  const [iconsCursorPointer, setIconsCursorPointer] = useState({
    chevronDown: false,
    penEdit: false,
    trash: false,
  });

  const [showVideos, setShowVideos] = useState(true);

  const handleManageStateIcon = (state, name) => {
    setIconsCursorPointer((prev) => ({ ...prev, [name]: state }));
  };

  console.log(module);

  return (
    <section className="coursemodule__container">
      <div className="coursemodule__module">
       
        
            <motion.span
              onMouseEnter={() => handleManageStateIcon(true, "chevronDown")}
              onMouseLeave={() => handleManageStateIcon(false, "chevronDown")}
              className="coursemodule__container_icon"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: !showVideos ? 270 : 360 }}
                transition={{ duration: 0.3 }}
                onClick={() => setShowVideos((prev) => !prev)}
              >
                <ChevronDown
                  fill={iconsCursorPointer.chevronDown ? "#f2f2f2" : "#afafaf"}
                />

              </motion.div>
                <p className="coursemodule__container_icon_text">({module.videos.length} {module.videos?.length > 1 ? "Videos" : "Video"})</p>
            </motion.span>
         
        

        <div className="coursemodule__container_title">
          <h3>{module.title}</h3>
        </div>

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
        {showVideos &&
          module?.videos.map((e, i) => {
            return (
              <CourseVideo
                key={i + e.title}
                title={e.title}
                urlImgVideo={e.URLVideo}
                index={i}
                description={e.description}
              />
            );
          })}

        <AddNewVideo
          handleModuleAdded={handleModuleAdded}
          module={module}
          language={language}
          course={course}
        />
      </div>
    </section>
  );
};
