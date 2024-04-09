import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./page/ProductsPage";
import { CountProductsProvider } from "./context/CountProductsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountProductsProvider>
      <Page />
    </CountProductsProvider>
  </React.StrictMode>,
);
