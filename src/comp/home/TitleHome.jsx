import { useEffect, useState } from "react";
import "./scss/titleHome.scss";
export const TitleHome = ({ user, language }) => {
  const [dataUser, setDataUser] = useState({
    initialsLettersUser: "",
  });
  const traduction = {
    title: language === "en" ? "Hi again" : "Hola de nuevo",
  };

  // photoURL

  useEffect(() => {
    if (!user) return;
    const displayNameSplit = user?.displayName?.split(" ");

    const initialsLettersUser = displayNameSplit[0][0] + displayNameSplit[1][0];
   
    setDataUser((prev) => ({ ...prev, initialsLettersUser }));
  }, [user]);

  return (
    <div className="titleHome">
      {user ? (
        <>
          <div className="titleHome-login">
            {!user?.photoURL ? (
              <img src={user.photoURL} alt={"photo user"} />
            ) : (
              <strong>{dataUser.initialsLettersUser}</strong>
            )}
          </div>
          <h3 className="titleHome-title">
            {traduction.title}, <strong>{user?.name}</strong>
          </h3>
        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
};
