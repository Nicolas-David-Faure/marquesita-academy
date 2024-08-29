import { db, storage } from "../../config";
import {
  ref,

  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

//redux
import { setVideoUploadingVideo } from "../../../store/slice/courses/coursesSlice";
import {  doc , updateDoc , getDoc  } from "firebase/firestore/lite";
import { v4 as uuidv4 } from 'uuid';


export const handleUploadVideo = async ({ file, path, dispatch, fileName , moduleID, courseID , description   =  'algo'}) => {
  if (!file || !path) return;

  const courseRef = doc(db, 'courses', courseID);
  const course = (await getDoc(courseRef)).data()

  // Create a reference to the file in Firebase Storage
  const storageRef = ref(storage, `${path}`);

  
  // Upload the file to Firebase Storage

  // Usar uploadBytesResumable para manejar el progreso
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    // Registrar observadores para el estado de la carga
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Obtener el progreso de la carga como un número entre 0 y 100
        const progress =
         Math.ceil((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // console.log("Upload is " + progress + "% done");

        //Despacha el progreso a redux
        if (dispatch) {
          dispatch(setVideoUploadingVideo({percentage: progress , status :  progress === 100 , fileName}));
        }

        switch (snapshot.state) {
          // case "paused":
          //   console.log("Upload is paused");
          //   break;
          // case "running":
          //   console.log("Upload is running");
          //   break;
          default:

            // console.log(snapshot.state)
            break;
        }
      },
      (error) => {
        // Manejar errores durante la carga
        console.error("Error uploading file: ", error);
        reject(error);
      },
      async () => {
        // La carga se completó con éxito, obtener la URL de descarga
        try {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          console.log(url)

          const newVideo = {
            id: uuidv4(),
            title: fileName,
            description: description,
            URLVideo : url
        
          }

            const modulesVideo = course.modules.map(e => {
              if(e.id === moduleID){
                return {...e, videos: [ ...e.videos , newVideo]}
              }
              return e
   
            } )

        


          updateDoc(courseRef, {
            modules: modulesVideo 
          })
          dispatch(setVideoUploadingVideo({percentage: 0 , status : false , fileName : ''}));

          console.log("File uploaded successfully: ", url);
          resolve(url);
        } catch (error) {
          console.error("Error getting download URL: ", error);
          reject(error);
        }
      }
    );
  });
};
