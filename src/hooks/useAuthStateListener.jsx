import  { useEffect } from 'react'
//redux
import { useDispatch } from "react-redux";
import { setUser } from '../store/slice/auth/authSlice'
import { auth, searchUserById, updateUserEmailVerified } from '../config/config';
import { onAuthStateChanged } from 'firebase/auth';

export const useAuthStateListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload();
        const { uid } = user;

        try {
          const userFinded = await searchUserById(uid);

          if (user.emailVerified && !userFinded.emailVerified) {
            
            await updateUserEmailVerified(user.uid, user.emailVerified);
            console.log('User email verification status updated in Firestore.');
          }

          dispatch(setUser({ ...userFinded, emailVerified: user.emailVerified }));
        } catch (error) {
          console.error('Error updating user document:', error);
        }
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
};