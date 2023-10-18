"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useForm, FieldError } from "react-hook-form";

const Register = () => {
  const { toggleForm } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const userData = {
      email: data.email,
      password: data.password,
      isActive: false,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
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
          id="email"
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
          id="password"
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
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        {errors.password && (
          <span className="block text-red-600 text-[15px] font-bold">
            {(errors.password as FieldError).message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Repeat your password
        </label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm password is required",
            },
            validate: (value) =>
              value === watch("password") || "passwords do not match",
          })}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        {errors.confirmPassword && (
          <span className="block text-red-600 text-[15px] font-bold">
            {(errors.confirmPassword as FieldError).message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register your account
      </button>

      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Have an account?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline dark:text-blue-500"
          onClick={toggleForm}
        >
          Log in
        </a>
      </div>
    </form>
  );
};

export default Register;
