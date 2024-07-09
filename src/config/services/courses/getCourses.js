import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../config";
import { dateToString } from "../../../utils/dateToString";

export const getCourses = async () => {
  try {
    const courseCol = collection(db, "courses");

    const courseSnapshot = await getDocs(courseCol);

    // console.log(courseSnapshot)

    const courses = courseSnapshot.docs.map((doc) => {
     const data =  doc.data()
    return { id: doc.id, ...data };
    
    });

    return courses.sort((a, b) => a.createdAt - b.createdAt);
  } catch (error) {
    console.error("Error searching user by id: ", error);
  }
};
