import React from "react";

import { AuthModalContext } from "./AuthModalContext";

interface IAuthModalProviderProps {
  children: React.ReactNode;
}

export const AuthModalProvider = (props: IAuthModalProviderProps) => {
  const { children } = props;

  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);

  return (
    <AuthModalContext.Provider
      value={{
        isAuthModalOpen,
        setIsAuthModalOpen,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};
