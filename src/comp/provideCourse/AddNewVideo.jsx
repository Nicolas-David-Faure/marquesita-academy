import { useRef , useState } from "react";
import { useDispatch } from "react-redux";
import { handleUploadVideo } from "../../config/services/admin/handleUploadVideo";
import { PlusIcon } from "../../commons/icons/PlusIcon";

export const AddNewVideo = ({ language, module, course, handleModuleAdded }) => {
  const dispatch = useDispatch();

  const initialState = {
    file: null,
    name: null,
    loading: false,
    extension: null,
  };
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
    handleModuleAdded();
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
