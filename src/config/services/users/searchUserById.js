import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../config"; 
import { dateToString } from "../../../utils/dateToString";

export const searchUserById = async (uid) => {
  if(!uid) return null;
  try {
    
    const userCol = collection(db, 'users');
  
    const userSnapshot = await getDocs(userCol);
    const user = userSnapshot.docs.map(doc => doc.data()).find(user => user.uid === uid);
  
    console.log('se llama')
    if(!user) return null;
   
    user.createdAt = dateToString(user.createdAt);
    user.lastLogin = dateToString(user.lastLogin);
    return user;
  } catch (error) {
    console.error('Error searching user by id: ', error)
  }
}
