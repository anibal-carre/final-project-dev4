"use client";

import { useState } from "react";
import axios from "axios";

const LoginForm = ({ handleRegister, router }) => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleClaveChange = (event) => {
    setClave(event.target.value);
  };

  const handleLoginSuccess = (userData) => {
    // Almacena la información del usuario en el localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirige al usuario a la página correspondiente
    if (userData.idrol === 1) {
      router.push("/admin");
    } else if (userData.idrol === 2) {
      router.push("/user");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        usuario: usuario,
        clave: clave,
      });

      const responseData = response.data;

      console.log(responseData);

      if (responseData.success) {
        // Inicio de sesión exitoso
        handleLoginSuccess(responseData); // Llama a la función de manejo de inicio de sesión exitoso
      }
    } catch (error) {
      // Manejar errores, mostrar mensajes de error, etc.
      console.error(error);
    }
  };
  return (
    <div className="w-full h-full md:w-[470px] md:h-[700px] md:border-[2px] md:rounded-md md:p-8 md:box-content flex flex-col justify-center items-center gap-10">
      <div className="w-[90%]  h-[20px]">
        <img src="assets/devchallenges.svg" alt="devchallenges-logo" />
      </div>
      <div className="w-[90%] flex flex-col gap-5  ">
        <h1 className="text-xl font-[900]">Login </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" w-[90%] h-[260px] flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm">Email</span>
          <input
            className="border border-[#BDBDBD] h-10 md:h-12 rounded-sm px-3 text-sm"
            type="text"
            name="usuario"
            value={usuario}
            onChange={handleUsuarioChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm">Password</span>
          <input
            className="border border-[#BDBDBD] h-10 md:h-12 rounded-sm px-3 text-sm"
            type="password"
            name="clave"
            value={clave}
            onChange={handleClaveChange}
            placeholder="Enter your password"
          />
        </div>

        <div className="flex flex-col">
          <input
            className="h-10 rounded-md bg-[#2F80ED] hover:bg-blue-300 text-white font-semibold cursor-pointer"
            type="submit"
            name="login"
            value="Login"
          />
        </div>
      </form>

      <div className=" w-[90%] flex flex-col items-center mb-32">
        <p className="mb-5">or continue with these social profile</p>
        <div className="flex justify-center gap-5 w-[70%] ">
          <img src="assets/Google.svg" alt="google-icon" />
          <img src="assets/Facebook.svg" alt="facebook-icon" />
          <img src="assets/Twitter.svg" alt="twitter-icon" />
          <img src="assets/Gihub.svg" alt="github-icon" />
        </div>
        <p className="mt-4">
          Don’t have an account yet?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={handleRegister}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
