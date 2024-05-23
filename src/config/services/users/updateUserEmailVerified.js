import { collection, getDocs, updateDoc, where } from "firebase/firestore/lite";
import { db } from "../../config";
import { query } from "firebase/database";

export const updateUserEmailVerified = async (uid, emailVerified) => {
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userDocRef = querySnapshot.docs[0].ref;
    await updateDoc(userDocRef, { emailVerified });
  } else {
    throw new Error('User not found');
  }
};
