import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
//firebase
import { db, getPrueba, auth, searchUserById } from "./config/config";
import { onAuthStateChanged } from "firebase/auth";

//components
import { Home } from "./comp/home/Home";

import { Header } from "./comp/header/Header";
import { Courses } from "./comp/courses/Courses";
import { Profile } from "./comp/profile/Profile";
import { ProvideCourse } from "./comp/provideCourse/ProvideCourse";
import { Auth } from "./comp/auth/Auth";

//redux
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthModal, setUser } from "./store/slice/auth/authSlice";
import { useAuthStateListener } from "./hooks/useAuthStateListener";

import { getCourses } from "./config/services/courses/getCourses";
import { setCourses } from "./store/slice/courses/coursesSlice";
import { dateToString } from "./utils/dateToString";
import { UploadVideoNotification } from "./commons/UploadVideoNotification";
import { setScreenWidth } from "./store/slice/screen/screenSlice";

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


  useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);




  return (
    <main onClick={() => dispatch(toggleAuthModal(false))} className="app__container">
     {courses.video.videoUploadingPercentage > 0 &&  <UploadVideoNotification/>}
     {!user && <Auth language={language} />}
      <Header language={language} />
      <Routes>
        <Route path="/courses" element={<Courses language={language} />} />
        <Route path="/profile/:uid" element={<Profile courses={courses.courses} language={language} user={user} />} />
        <Route path='/provide-course/:id' element={<ProvideCourse />} />
        <Route path="/*" element={<Home language={language} />} />
      </Routes>
    
      
    </main>
  );
}
