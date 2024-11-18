import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { handleUploadVideo } from "../../config/services/admin/handleUploadVideo";
import { PlusIcon } from "../../commons/icons/PlusIcon";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Spinner } from "../../commons/otros/Spinner";
export const AddNewVideo = ({
  language,
  module,
  course,
  handleModuleAdded,
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  console.log(module);
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
    description: null,
  });

  const handleChangeAddNewVideo = (e) => {
    const file = e.target.files[0];
    setVideo((prev) => ({ ...prev, file, extension: file.name.split(".")[1] }));
  };

  const buttonAdd = {
    en: video.loading ? "Loading.." : "Upload",
    es: video.loading ? "Cargando.." : "Subir",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      description: video.description,
    });
    handleModuleAdded();
    setVideo(initialState);
    setLoading(false);
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
          <textarea
            onChange={(e) =>
              setVideo((prev) => ({ ...prev, description: e.target.value }))
            }
            name="description"
            required
            placeholder="Descripción del video"
            className={video.loading ? "loading__input" : ""}
          ></textarea>

          {loading ? (
            <Spinner />
          ) : (
            <button className={video.loading ? "greyBtn" : ""} type="submit">
              {buttonAdd[language]} <IoCloudUploadOutline />
            </button>
          )}
        </form>
      )}
    </li>
  );
};
