import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartCtxProvider from "./Context/CartContext.tsx";
import LoadingCtxProvider, { LoadingCtx } from "./Context/LoadingContext.tsx";
import AuthContextProvider from "./Context/AuthContext.tsx";
import ToastCtxProvider from "./Context/ToastContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LoadingCtxProvider>
      <AuthContextProvider>
        <ToastCtxProvider>
          <CartCtxProvider>
            <App />
          </CartCtxProvider>
        </ToastCtxProvider>
      </AuthContextProvider>
    </LoadingCtxProvider>
  </BrowserRouter>
);
