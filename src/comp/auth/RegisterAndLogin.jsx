import React, { useState } from "react";
import "./sass/registerAndLogin.scss";

//firebase
import { addUserToDb, auth, db, searchUserById } from "../../config/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
//spinner
import { Spinner } from "../../commons/otros/Spinner";

import { useDispatch } from "react-redux";
import { setAuthType } from "../../store/slice/auth/authSlice";

import { setUser } from "../../store/slice/auth/authSlice";
import {
  updateDoc,
  where,
  collection,
  query,
  doc,
  getDocs,
} from "firebase/firestore/lite";
//logo
import logoCorona from '../../assets/img/logos/corona-sb.png'


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
        const { user } = await createUserWithEmailAndPassword(
          auth,
          userInfo.email,
          userInfo.password
        );

        const displayName = `${userInfo.name} ${userInfo.lastname}`;
        await updateProfile(user, {
          displayName,
        });

        await addUserToDb({
          displayName,
          name: userInfo.name,
          lastname: userInfo.lastname,
          email: userInfo.email,
          uid: user.uid,
          emailVerified: false,
        });

        await sendEmailVerification(user);

        dispatch(
          setUser({
            displayName,
            email: userInfo.email,
            photoURL: null,
            uid: user.uid,
          })
        );

        setUserInfo(initialState);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        // ErrorControl({ error: error });
      }
    } else {
      try {
        setLoading(true);
        const user = await signInWithEmailAndPassword(
          auth,
          userInfo.email,
          userInfo.password
        );
        if (!user) {
          setLoading(false);
          return;
        }
        const colRef = collection(db, "users");
        const queryRef = query(colRef, where("uid", "==", user.user.uid));
        const querySnapshot = await getDocs(queryRef);

        querySnapshot.forEach(async (doc) => {
          const userRef = doc.ref;
          await updateDoc(userRef, { lastLogin: new Date() });
        });

        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
          })
        );
        setUserInfo(initialState);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.log(error);
        ErrorControl({ error: error });
      }
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
      paragraph:
        type === "register"
          ? "Already have an account?"
          : "Don't have an account?",
      action: type === "register" ? "Login" : "Register",
    },
    es: {
      paragraph:
        type === "register" ? "Ya tienes una cuenta?" : "No tienes una cuenta?",
      action: type === "register" ? "Inicia" : "Registrate",
    },
  };

  return loading ? (
    <Spinner />
  ) : (
    <form className="registerAndLogin__container" onSubmit={handleSubmit}>
     
      <header className="registerAndLogin__header">
            <img src={logoCorona} alt="logo-marquesita-academy" />
            <p>{language == "en" ? 'Welcome'  :  'Bienvenida'} Maquesita</p>
      </header>
      {type === "register" ? (
        <>
          <input
            required
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Nombre"
          />
          <input
            required
            type="text"
            onChange={handleChange}
            name="lastname"
            placeholder="Apellido"
          />
          <input
            required
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
          <input
            required
            minLength={8}
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Constraseña"
          />
          <input
            required
            minLength={8}
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            placeholder="Confirmar contraseña"
          />
        </>
      ) : (
        <div className="regiregisterAndLogin__login-inputs">
         
          <input
            required
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
          <input
            required
            minLength={8}
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Constraseña"
          />
        </div>
      )}

      <button type="submit">{nameSubmit[language]}</button>

      <p className="registerAndLogin__p">
        {message[language].paragraph}{" "}
        <strong
          onClick={() =>
            dispatch(
              setAuthType({
                type: type === "register" ? "login" : "register",
                modalState: true,
              })
            )
          }
        >
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
