"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton, Login, Register } from ".";
import { useAuth } from "@/context/AuthContext";

const Navbar: React.FC = () => {
  const [active, setActive] = useState(false);

  const { isLogin, user } = useAuth();

  const toggleModal = () => {
    setActive(!active);
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        {/* <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link> */}

        <div>{user && <p className="text-black">Logged in as: {user}</p>}</div>
        <CustomButton
          title={isLogin ? "Sign In" : "Register"}
          btnType="button"
          containerStyles="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          handleClick={toggleModal}
        />
      </nav>

      {active && (
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden={true}
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full bg-gray-900 bg-opacity-75"
        >
          <div className="relative w-full max-w-md max-h-full m-auto">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={toggleModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden={true}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8 mx-auto m-auto mt-[11rem]">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  {isLogin
                    ? "Sign in to our platform"
                    : "Register for an account"}
                </h3>
                {isLogin ? <Login /> : <Register />}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
