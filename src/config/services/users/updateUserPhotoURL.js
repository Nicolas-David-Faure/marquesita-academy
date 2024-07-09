import { collection, getDocs, updateDoc, where } from "firebase/firestore/lite";
import { auth, db } from "../../config";
import { query } from "firebase/database";
import { updateProfile  } from "firebase/auth";
import { handleDeleteFile } from "../admin/handleDeleteFile";



export const updateUserPhotoURL = async (uid, photoURL) => {
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  try {

    console.log(photoURL)
    
    if (!querySnapshot.empty) {
      const userDocRef = querySnapshot.docs[0].ref;
      const user = querySnapshot.docs[0].data();
      const { photoURL: oldPhotoURL } = user;
      const currentUser = auth.currentUser;

     
      await updateProfile(currentUser, { photoURL });
      await updateDoc(userDocRef, { photoURL });

      if (oldPhotoURL){
        await handleDeleteFile(oldPhotoURL);
      }

    } else {
      throw new Error('User not found');
    }
    return 'User photoURL updated successfully';
  } catch (error) {
    console.error('Error updating user photoURL: ', error);
  }
};
