import { storage } from "../../config";
import { ref  , deleteObject} from "firebase/storage";

export const handleDeleteFile = async (fileURL) => {
  if (!fileURL) return;

  try {
    const fileRef = ref(storage, fileURL);
    await deleteObject(fileRef);
    console.log("File deleted successfully: ", fileURL);
  } catch (error) {
    console.error("Error deleting file: ", error);
  }

  return "File deleted successfully";
};
