import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//firebase
import { db, getPrueba, auth, searchUserById } from "./config/config";
import { onAuthStateChanged } from "firebase/auth";

//components
import { Home } from "./comp/Home";
import { Aboutme } from "./comp/Aboutme";
import { Header } from "./comp/Header";
import { Courses } from "./comp/Courses";
import { Profile } from "./comp/profile/Profile";
import { ProvideCourse } from "./comp/provideCourse/ProvideCourse";

//redux
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthModal, setUser } from "./store/slice/auth/authSlice";
import { useAuthStateListener } from "./hooks/useAuthStateListener";

import { getCourses } from "./config/services/courses/getCourses";
import { setCourses } from "./store/slice/courses/coursesSlice";
import { dateToString } from "./utils/dateToString";


export function App() {
  const language = useSelector((state) => state.languageSlice.language);
  const user = useSelector((state) => state.authSlice.user);
  const courses = useSelector((state) => state.coursesSlice);


  const dispatch = useDispatch();
  useAuthStateListener()


  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getCourses();
      
     const data =  courses.map((course) => {

       return {...course, createdAt: dateToString(course.createdAt)}
      })
     
      dispatch(setCourses(data));
    };
    fetchCourses();

  }, [dispatch , courses.courseAdded]);
  return (
    <main onClick={() => dispatch(toggleAuthModal(false))} className="app__container">
      <Header language={language} />
      <Routes>
        <Route path="/*" element={<Home language={language} />} />
        <Route path="/profile/:uid" element={<Profile courses={courses.courses} language={language} user={user} />} />
        <Route path='/provide-course/:id' element={<ProvideCourse />} />
      </Routes>
    
      
    </main>
  );
}
