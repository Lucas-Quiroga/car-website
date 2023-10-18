"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useForm, FieldError } from "react-hook-form";

const Login = () => {
  const { toggleForm, setUser, toggleModal } = useAuth();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [showError, setShowError] = useState(false);

  const onSubmit = handleSubmit((data) => {
    const email = data.email;
    const password = data.password;

    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      const storedEmail = userData.email;
      const storedPassword = userData.password;

      if (email === storedEmail && password === storedPassword) {
        userData.isActive = true;

        // Convierte el objeto actualizado en una cadena nuevamente
        const updatedUserData = JSON.stringify(userData);

        // Guarda los datos actualizados en el localStorage
        localStorage.setItem("userData", updatedUserData);

        setUser(email);
        toggleModal();
      } else {
        setShowError(true);
      }
    }

    reset();
  });

  return (
    <form className="space-y-6" action="#" onSubmit={onSubmit}>
      <div>
        {showError && (
          <span className="block text-red-600 text-[15px] font-bold">
            User not found. Please check your email and password.
          </span>
        )}
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Email is not valid",
            },
          })}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
        />
        {errors.email && (
          <span className="block text-red-600 text-[15px] font-bold">
            {(errors.email as FieldError).message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 6,
              message: "The password must be at least 6 characters long",
            },
          })}
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        {errors.password && (
          <span className="block text-red-600 text-[15px] font-bold">
            {(errors.password as FieldError).message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login to your account
      </button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline dark:text-blue-500"
          onClick={toggleForm}
        >
          Create account
        </a>
      </div>
    </form>
  );
};

export default Login;
