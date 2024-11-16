import React from "react";

import { AuthModalContext } from "providers/AuthModalProvider/AuthModalContext";


export const useContexts = () => {
  const authModalContext = React.useContext(AuthModalContext);

  return {
    authModalContext,
  };
};
