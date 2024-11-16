import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AntColorsProvider } from "providers/AntColorsProvider/AntColorsProvider";
import { StoreProvider } from "providers/StoreProvider/StoreProvider";

import { App } from "./App";

import "../public/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StoreProvider>
      <AntColorsProvider>
        <App />
      </AntColorsProvider>
    </StoreProvider>
  </BrowserRouter>
);
