import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';

export const AuthContext = createContext<{
  login: () => Promise<void>;
  logout: () => Promise<void>;
  getAccessToken: () => Promise<string>;
  isAuthenticated: boolean;
}>({
  isAuthenticated: false,
  login: () => {
    throw new Error('Method not implemented.');
  },
  logout: () => {
    throw new Error('Method not implemented.');
  },
  getAccessToken: () => {
    throw new Error('Method not implemented.');
  },
});


export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isSetup, setIsSetup] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setIsSetup(true);
  }, []);
  const login = async (): Promise<void> => {
    setIsAuthenticated(true);
    //   TODO: implement login func
  };

  const logout = async (): Promise<void> => {
    setIsAuthenticated(false);
    //   TODO: implement logout func
  };

  const getAccessToken = async (): Promise<string> => {
    const res = { accessToken: '' };
    return res.accessToken;
  };

  return <AuthContext.Provider
    value={{ login, logout, getAccessToken, isAuthenticated }}>{isSetup && children}</AuthContext.Provider>;
};