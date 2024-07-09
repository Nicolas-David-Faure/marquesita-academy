import React, { useState } from "react";
import "./scss/adminCourses.scss";
//icons
import { PlusIcon } from "../../commons/icons/PlusIcon";
import { CloseIcon } from "../../commons/icons/CloseIcon";
import { CameraIcon } from "../../commons/icons/CameraIcon";
import { addCourseToDb } from "../../config/services/admin/addCourseToDB";
import { useDispatch } from "react-redux";
import { toggleCourseAdded } from "../../store/slice/courses/coursesSlice";

const URLCourseExample = "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/66251efdcbc5.jpg"
export const AdminCourses = ({ language, user  , courses = []}) => {
  const [showModalAddCourse, setShowModalAddCourse] = useState(false);

  const handleToggleModalAddCourse = () => {
    setShowModalAddCourse(!showModalAddCourse);
  };

  return (
    <section className="adminCourses">
      {showModalAddCourse && <AdminCoursesModalAddCourse handleToggleModalAddCourse={handleToggleModalAddCourse} language={language} />}
      <div className="adminCourses__container">
        <div className="adminCourses__container-title">
          <h2>{language === "es" ? "Administra tus cursos" : "Admin your courses"}</h2>
          {language === "es" ? (
            <p>En esta sección puedes administrar tus cursos, agregar, editar y eliminar cursos.</p>
          ) : (
            <p>In this section you can manage your courses, add, edit and delete courses.</p>
          )}
        </div>

        <div className="adminCourses__container-grid">
          <figure onClick={handleToggleModalAddCourse} className="adminCourses__container-grid-add">
            <PlusIcon width="150px" height="150px" />
            <figcaption>{language === "es" ? "Agregar curso" : "Add course"}</figcaption>
          </figure>
          {courses?.map((course, i) => (
            <AdminCoursesCard key={i} course={course} language={language} />
          ))}
          {/* <AdminCoursesCard
            course={{
              title: "Curso de React",
              description: "Aprende a crear aplicaciones web con React",
              img: "https://d22fxaf9t8d39k.cloudfront.net/0ea3442f051fc6f2e0cf5d0a414bd0f50f6e3c70f2d59f8e83cae9b66ba13366364.jpeg",
            }}
            language={language}
          /> */}
        </div>
      </div>
    </section>
  );
};

const AdminCoursesCard = ({ course, language }) => {

  return (
    <div className="adminCourses__container-grid-card">
      <div style={{ backgroundImage: `url(${course.imgURL})` }} className="adminCourses__container-grid-card-img"></div>
      <div className="adminCourses__container-grid-card-info">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

const AdminCoursesModalAddCourse = ({ language, handleToggleModalAddCourse }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [course, setCourse] = useState({
    title: "",
    description: "",
    img: null,
    price: 0,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(e.target.files){
      var file = e.target.files[0];
    }


    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);

    }
    setCourse({
      ...course,
      [name]: name === "img" ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => { 

    e.preventDefault();
    await addCourseToDb(course);
      dispatch(toggleCourseAdded());  
    }



  return (
    <div className="adminCourses__modal">
      <div className="adminCourses__modal-container">
        <span className="adminCourses__modal-container-close" onClick={handleToggleModalAddCourse}>
          <CloseIcon fill="white" />
        </span>
        <h3>{language === "es" ? "Agregar curso" : "Add course"}</h3>
        <form onSubmit={handleSubmit}>
        
          <input onChange={handleChange} placeholder={ language === "es" ? "Título" : "Title"  } type="text" className="input_title_course" name="title" id="title" />
        
 
       
          <figure>
            <div onClick={() => document.getElementById("fileInput_img-course").click()} className="photo_edit">
              <input type="file" accept="image/*" name="img" onChange={handleChange} style={{ display: "none" }} id="fileInput_img-course" />
              <CameraIcon width="2rem" height="2rem" fill="#a0a0a0" />
            </div>
            <img src={selectedImage || URLCourseExample } className="" srcset="" />

          </figure>

          <textarea onChange={handleChange} placeholder={language === "es" ? "Descripción" : "Description"} name="description" id="description"></textarea>
          <input onChange={handleChange} type="number" className="input_title_course" placeholder="price" />
          <button type="submit">{language === "es" ? "Agregar" : "Add"}</button>
        </form>
      </div>
    </div>
  );
};
