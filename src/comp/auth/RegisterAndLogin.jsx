import React, { useState } from "react";
import "./sass/registerAndLogin.scss";

//firebase
import { auth } from "../../config/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//spinner
import { Spinner } from "../../commons/otros/Spinner";

import { useDispatch } from "react-redux";
import { setAuthType } from "../../store/slice/auth/authSlice";

export const RegisterAndLogin = ({ type, language = "es" }) => {
  const initialState =
    type === "register"
      ? {
          email: "",
          password: "",
          confirmPassword: "",
          name: "",
          lastname: "",
        }
      : { email: "", password: "" };

  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "register") {
      if (userInfo.password !== userInfo.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }

      try {
        setLoading(true);
        const user = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        ErrorControl({ error: error });
      }

      console.log(user);
    } else {
      try {
        setLoading(true);
        const user = await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password);

        console.log(user);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        ErrorControl({ error: error });
      }

      console.log(userInfo);
    }
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const nameSubmit = {
    en: type === "register" ? "Register" : "Login",
    es: type === "register" ? "Registrarse" : "Iniciar",
  };

  const title = {
    en: type === "register" ? "Register" : "Login",
    es: type === "register" ? "Registrarse" : "Inicia sesion",
  };

  const message = {
    en: {
      paragraph: type === "register" ? "Already have an account?" : "Don't have an account?",
      action: type === "register" ? "Login" : "Register",
    },
    es: {
      paragraph: type === "register" ? "Ya tienes una cuenta?" : "No tienes una cuenta?",
      action: type === "register" ? "Inicia" : "Registrate",
    },
  };

  return loading ? (
    <Spinner />
  ) : (
    <form className="registerAndLogin__container" onSubmit={handleSubmit}>
      <h2>{title[language]}</h2>
      {type === "register" ? (
        <>
          <input required type="text" onChange={handleChange} name="name" placeholder="Nombre" />
          <input required type="text" onChange={handleChange} name="lastname" placeholder="Apellido" />
          <input required type="email" onChange={handleChange} name="email" placeholder="Email" />
          <input required minLength={8} type="password" onChange={handleChange} name="password" placeholder="Constraseña" />
          <input required minLength={8} type="password" onChange={handleChange} name="confirmPassword" placeholder="Confirmar contraseña" />
        </>
      ) : (
        <div className="regiregisterAndLogin__login-inputs">
          <input required type="email" onChange={handleChange} name="email" placeholder="Email" />
          <input required minLength={8} type="password" onChange={handleChange} name="password" placeholder="Constraseña" />
        </div>
      )}

      <button type="submit">{nameSubmit[language]}</button>

      <p>
        {message[language].paragraph}{" "}
        <strong onClick={() => dispatch(setAuthType({ type: type === "register" ? "login" : "register", modalState: true }))}>
          {message[language].action}
        </strong>{" "}
      </p>
    </form>
  );
};

const ErrorControl = ({ error }) => {
  const errorCode = error.code;
  const errors = {
    "auth/user-not-found": "El usuario no existe",
    "auth/wrong-password": "Contraseña incorrecta",
    "auth/invalid-email": "Email invalido",
    "auth/invalid-credential": "Credenciales invalidas",
  };

  return alert(errors[errorCode] || "Error desconocido");
};
