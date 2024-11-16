import React from "react";

interface IAuthModalContextProps {
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (isAuthModalOpen: boolean) => void;
}

export const AuthModalContext = React.createContext<IAuthModalContextProps>({
  isAuthModalOpen: false,
  setIsAuthModalOpen: () => {},
});
