import { getDoc, doc, updateDoc, arrayUnion } from "firebase/firestore/lite";
import { db } from "../../config";
import { v4 as uuidv4 } from 'uuid';

export const addNewModule = async ({id , moduleInfo}) => {
  try {
    const courseRef = doc(db, 'courses', id);


    console.log(courseRef)
    console.log(moduleInfo)

//Title , description, videos = [{title, description, attachedContent, url}]


    const newModule = {
      id: uuidv4(),
      title: moduleInfo.title,
      description: moduleInfo.description,
      videos: [],

    }

    // Actualiza el array de módulos del documento
    await updateDoc(courseRef, {
      modules: arrayUnion(newModule)
    });


    return 'ok'
  
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
};
