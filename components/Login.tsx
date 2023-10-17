"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useForm } from "react-hook-form";

const Login = () => {
  const { toggleForm, setUser } = useAuth();
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = handleSubmit((data) => {
    // event.preventDefault();

    console.log(data);

    const email = data.email;
    const password = data.password;

    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      const storedEmail = userData.email;
      const storedPassword = userData.password;

      console.log("storedEmail:" + storedEmail);
      console.log("email:" + email);

      if (email === storedEmail && password === storedPassword) {
        setUser(email);
        console.log("user succefully");
      } else {
        console.log("user error");
      }
    }

    reset();
  });

  return (
    <form className="space-y-6" action="#" onSubmit={onSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          {...register("email", {
            required: true,
          })}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
          required
        />
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
            required: true,
            minLength: 6,
          })}
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
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
