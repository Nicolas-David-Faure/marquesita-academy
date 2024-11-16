import React, { useState } from "react";
import "./scss/profilePersonalInfo.scss";
//icons
import { StreetViewUserIcon } from "../../commons/icons/StreetViewUserIcon";
import { UserInvalidateIcon } from "../../commons/icons/UserInvalidateIcon";
import { UserValidateIcon } from "../../commons/icons/UserValidateIcon";
import { PenEditIcon } from "../../commons/icons/PenEditIcon";
import { CameraIcon } from "../../commons/icons/CameraIcon";
//framer-motion
import { motion } from "framer-motion";

//redux
import { useDispatch, useSelector } from "react-redux";
import { handleImageUpload } from "../../config/config";
import { updateUserPhotoURL } from "../../config/services/users/updateUserPhotoURL";
import { setUserByPropertie } from "../../store/slice/auth/authSlice";
export const ProfilePersonalInfo = ({ language, user }) => {
  const userAuth = useSelector((state) => state.authSlice.user);
  if (!user || !userAuth) return null;
  const dispatch = useDispatch();
  const isUserAuth = userAuth.uid === user.uid;

  // courses: [],
  //   photoURL: null,
  //   uid: 'KkC5RhAZLcagC4QoyjvMQ9Q1aij2',
  //   createdAt: '21/5/2024',
  //   displayName: 'Nicolás Faure',
  //   name: 'Nicolás',
  //   isTeacher: false,
  //   email: 'faureee89@gmail.com',
  //   isStudent: true,
  //   lastname: 'Faure',
  //   isAdmin: true,
  //   lastLogin: '22/5/2024',
  //   emailVerified: true

  const handleImageChange = async (e) => {

    const file = e.target.files[0];
    if (e.target.files && file) {

    const photoURL =  await handleImageUpload(file , 'users/profile_images');
    await updateUserPhotoURL(userAuth.uid, photoURL);
    dispatch(setUserByPropertie({propertie: 'photoURL' , value: photoURL}))

    }
  };

  const handleEditProfile = (type) => {
    console.log("edit profile");
  };

  const role = user.isAdmin
    ? language === "es"
      ? "Administrador"
      : "Admin"
    : user.isTeacher
    ? language === "es"
      ? "Profesor"
      : "Teacher"
    : language === "es"
    ? "Estudiante"
    : "Student";
  return (
    <div className="profilePersonalInfo__container">
      <div className="profilePersonalInfo__basicInfo">
        <div className="profilePersonalInfo__basicInfo_photo">
          {isUserAuth && (
            <div onClick={() => document.getElementById("fileInput").click()} className="profilePersonalInfo__basicInfo_photo_edit">
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} id="fileInput" />
              <CameraIcon width="2rem" height="2rem" fill="#000000" />
            </div>
          )}

          <img
            src={`${
              user.photoURL === null ? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" : user.photoURL
            }`}
            alt="profile"
          />
        </div>
        <div className="profilePersonalInfo__basicInfo_info">
          <p>{user.displayName}</p>
          <p>{role}</p>

          <p>{user.email}</p>
        </div>
      </div>

      <ProfilePersonalInfoExtraInfo language={language} user={user} />
    </div>
  );
};

const ProfilePersonalInfoExtraInfo = ({ language, user }) => {
  const iconsSize = {
    width: "4rem",
    height: "4rem",
  };

  const iconsUser = user.emailVerified ? <UserValidateIcon {...iconsSize} /> : <UserInvalidateIcon {...iconsSize} />;

  const extraInfo = {
    es: [
      {
        icon: <StreetViewUserIcon {...iconsSize} />,
        textHover: "Fecha de registro",
        text: "21/5/2024",
      },
      {
        icon: iconsUser,
        text: null,
        textHover: user.emailVerified ? "Usuario verificado" : "Usuario no verificado",
      },
    ],
    en: [
      {
        icon: <StreetViewUserIcon {...iconsSize} />,
        text: "21/5/2024",
        textHover: "Register date",
      },
      {
        icon: iconsUser,
        text: null,
        textHover: user.emailVerified ? "User verified" : "User not verified",
      },
    ],
  };

  return (
    <div className="profilePersonalInfo__extraInfo">
      {extraInfo[language].map((item, index) => (
        <ProfilePersonalInfoExtraInfoItem key={index} icon={item.icon} text={item.text} textHover={item.textHover} />
      ))}
    </div>
  );
};

const ProfilePersonalInfoExtraInfoItem = ({ icon, text, textHover }) => {
  const [hover, setHover] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: "-100%",
    },
  };
  return (
    <motion.div onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} className="profilePersonalInfo__extraInfo_item">
      <figure>{icon}</figure>
      <p>{text}</p>
      <motion.p
        initial="hidden"
        animate={hover ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        variants={variants}
        className="profilePersonalInfo__extraInfo_item_hover"
      >
        {textHover}
      </motion.p>
    </motion.div>
  );
};
