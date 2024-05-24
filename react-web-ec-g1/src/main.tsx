import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartCtxProvider from "./Context/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CartCtxProvider>
      <App />
    </CartCtxProvider>
  </BrowserRouter>
);
