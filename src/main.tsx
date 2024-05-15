import React from "react";
import ReactDOM from "react-dom/client";
import ProductsPage from "./page/ProductsPage";
import { CountProductsProvider } from "./context/CountProductsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountProductsProvider>
      <ProductsPage />
    </CountProductsProvider>
  </React.StrictMode>,
);
