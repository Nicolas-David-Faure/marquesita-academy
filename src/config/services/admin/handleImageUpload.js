import { storage } from "../../config";
import { ref, uploadBytes, getDownloadURL  , } from 'firebase/storage';

export const handleImageUpload = async (file, path) => {

  if (!file || !path) return;


  // Create a reference to the file in Firebase Storage
  const storageRef = ref(storage,`${path}/${file.name}`);

  // Upload the file to Firebase Storage

  try {
    const snapshot = await uploadBytes(storageRef, file);
      
    const url = await getDownloadURL(snapshot.ref);

    console.log("File uploaded successfully: ", url);
    return url;
  } catch (error) {
    console.error("Error uploading image: ", error);
  }


};
