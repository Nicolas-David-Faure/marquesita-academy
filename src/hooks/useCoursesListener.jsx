import React, { useEffect } from 'react';
import { db } from '../config/config';
import { onSnapshot, collection } from 'firebase/firestore'; 
import { useDispatch } from 'react-redux';
import { setCourses } from '../store/slice/courses/coursesSlice';

export const useCoursesListener = () => {
  const dispatch = useDispatch();
  
  const coursesSnapshot = () => {


    const coursesCol = collection(db, 'courses');
    return onSnapshot(coursesCol, (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      console.log('Courses updated:', data);
      dispatch(setCourses(data));
    });
  };

  useEffect(() => {
    const unsubscribe = coursesSnapshot();
    return () => unsubscribe();
  }, [dispatch]);

  return;
};
