import {
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore/lite";
import { db } from "../../config";
import { v4 as uuidv4 } from "uuid";

export const deleteModule = async ({ courseID, moduleID }) => {
  try {
    const courseRef = doc(db, "courses", courseID);
    console.log(courseID, moduleID);

    const course = (await getDoc(courseRef)).data();
    if (!course) return "El curso ya no existe";
    const modulesCourse = course.modules || [];

    const moduleToDelete = modulesCourse.find(
      (module) => module.id === moduleID
    );

    // Actualiza el array de módulos del documento
    await updateDoc(courseRef, {
      modules: arrayRemove(moduleToDelete),
    });

    return "ok";
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};
