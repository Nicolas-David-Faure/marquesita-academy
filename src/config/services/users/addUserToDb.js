
import { collection , addDoc } from "firebase/firestore/lite";
import { db } from "../../config";

export async function addUserToDb(user) {
  const userCol = collection(db, 'users');


  const userDoc = {
    name: user.name,
    lastname: user.lastname,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL || null,
    uid: user.uid,
    courses: [],
    isAdmin: false,
    isTeacher: false,
    isStudent: true,
    createdAt: new Date(),
    lastLogin: new Date(),
  }

  try {
    const docRef = await addDoc(userCol, userDoc);
    console.log("Document written with ID: ", docRef.id);
  }catch(e){
    console.error("Error adding document: ", e);
  }

  return userDoc;
}