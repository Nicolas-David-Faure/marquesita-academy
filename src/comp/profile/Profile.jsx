import React, { useEffect, useState } from "react";
//router
import { useParams } from "react-router-dom";
//styles
import "./scss/profile.scss";
//components
import { ProfilePersonalInfo } from "./ProfilePersonalInfo";
import { searchUserById } from "../../config/config";
//spinner
import { Spinner } from "../../commons/otros/Spinner"; 
import { AdminCourses } from "./AdminCourses";
export const Profile = ({ language,  user , courses}) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const { uid } = useParams();


  
  useEffect(() => {
    setLoading(true);

    if (!uid || !user) {
      setLoading(false);
      return;
    }
    if(  user.uid === uid){
      setSelectedUser(user);
      setLoading(false);
      return;
    }else{
      searchUserById(uid)
      .then((userFinded) => {
        setSelectedUser(userFinded);
        setLoading(false);
      })
      .catch((error) => console.error("Error searching user by id: ", error));
    }

  }, [uid , user]);


  return (
    <div className="profile__container">
      {loading ?
      <Spinner />
        : !selectedUser && !loading ? (
          <div className="profile__notFound">
            <h2>{language === "es" ? "Perfil no encontrado" : "Profile not found"}</h2>
          </div>
        ) : 
          selectedUser && (
          
          <>
            <ProfilePersonalInfo language={language} user={selectedUser} />
           {user?.isAdmin && <AdminCourses courses={courses} language={language} user={selectedUser} />}
          </>
        )
    
    }

    
    </div>
  );
};
