"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  toggleForm: () => void;
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<string | null>(null);

  // console.log(user);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <AuthContext.Provider
      value={{ isLogin, setIsLogin, toggleForm, user, setUser }}
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
