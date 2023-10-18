"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  toggleForm: () => void;
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModal: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const toggleModal = () => {
    setActive(!active);
  };

  const logout = () => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      userData.isActive = false;
      const updatedUserData = JSON.stringify(userData);
      localStorage.setItem("userData", updatedUserData);
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        toggleForm,
        user,
        setUser,
        active,
        setActive,
        toggleModal,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
