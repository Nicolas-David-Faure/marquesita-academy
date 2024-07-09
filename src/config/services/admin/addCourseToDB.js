import { collection, addDoc } from "firebase/firestore/lite";
import { db, handleImageUpload } from "../../config";

export async function addCourseToDb(course) {

  const cousesCol = collection(db, "courses");
  try {
    const urlImg = await handleImageUpload(course.img, "courses/photoCourses");

    const courseDoc = {
      title: course.title,
      description: course.description,
      imgURL: urlImg,
      modules: [],
      price: course.price,
      createdAt: new Date(),
      discount: null,
      active: false
    };

    await addDoc(cousesCol, courseDoc);

  
    
    return 'Course added' ;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
