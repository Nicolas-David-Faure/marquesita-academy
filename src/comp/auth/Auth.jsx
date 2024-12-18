import React from "react";
//styles
import "./sass/auth.scss";
//components
import { AuthBtn } from "./AuthBtn";

//redux
import { useDispatch, useSelector } from "react-redux";
import { ModalAuth } from "./ModalAuth";

//components
export const Auth = ({ language }) => {
  const authState = useSelector((state) => state.authSlice);

  return (
    <div className="auth__container">
      <AuthBtn type={"login"} title={language === "es" ? "Iniciar" : "Login"} />
      <AuthBtn
        type={"register"}
        title={language === "es" ? "Registrarse" : "Register"}
      />

    {authState.modalState && <ModalAuth type={authState.type} language={language} />}
    </div>
  );
};
