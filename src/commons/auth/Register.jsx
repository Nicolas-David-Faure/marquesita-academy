import React, { useState } from "react";
import './sass/register.scss'
export const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    
    name: "",
    lastname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form className="register__container" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} name='name' placeholder="Nombre" />
      <input type="text" onChange={handleChange} name="lastname"  placeholder="Apellido" />
      <input type="text" onChange={handleChange} name="email" placeholder="Email" />
      <input type="text" onChange={handleChange} name="password" placeholder="Constraseña" />
      <input type="text" onChange={handleChange} name="confirmPassword" placeholder="Confirmar contraseña" />

      <button type="submit">Registrarme</button>
    </form>
  );
};
