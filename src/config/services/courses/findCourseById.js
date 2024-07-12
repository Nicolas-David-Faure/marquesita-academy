import { getDoc , doc } from "firebase/firestore/lite";
import { db } from "../../config";

export const findCourseById = async (id) => {
  try {
    const courseRef = doc(db, 'courses', id);
    const courseSnap = await getDoc(courseRef);
    
    if (courseSnap.exists()) {
      return courseSnap.data();
    } else {
      throw new Error('Course not found');
    }
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
};