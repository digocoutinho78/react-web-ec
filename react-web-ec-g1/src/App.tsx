import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { TesteHome } from "./pages/Home";
import { TesteLogin } from "./pages/Login";
import { TestePerfil } from "./pages/Perfil";
import { TesteProduto } from "./pages/Produto";
import Button01 from "./components/Button01";
import "./components/components.css";
import Form01 from "./components/Form01";

function App() {
  return (
    <>
      {/* o menu de navegação está fixo, procurando um jeito melhor de fazer */}
      <nav>
        <p>Navegação</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
          <li>
            <Link to="/produto">Produto</Link>
          </li>
          <li>
            <Link to="/cart">Carrinho</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<TesteHome />} />
        <Route path="/login" element={<TesteLogin />} />
        <Route path="/profile" element={<TestePerfil />} />
        <Route path="/produto" element={<TesteProduto />} />
        <Route path="/cart" element={<Cart />} />
        {/* Pagina de 404 personalizada */}
        {/* <Route path="*" element={<Error />}  />  */}
      </Routes>
    </>
  );
}

export default App;
