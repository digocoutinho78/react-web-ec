import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Cart } from "./Cart/Cart";
import { TesteHome } from "./pages/Home";
import { TesteLogin } from "./pages/Login";
import { TestePerfil } from "./pages/Perfil";
import { TesteProduto } from "./pages/Produto";
import Button01 from "./components/Button01";
import "./components/components.css";
import Form01 from "./components/Form01";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from './assets/img/logo-s.svg'

function App() {
  return (
    <Container fluid>
      {/* o menu de navegação está fixo, procurando um jeito melhor de fazer */}
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand><img
              src={logo}
              width="120"
              height="120"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/login">Login </Nav.Link>
            <Nav.Link href="/profile">Meu Perfil </Nav.Link>
            {/* <Nav.Link href="/produto">Produto </Nav.Link> */}
            <Nav.Link href="/cart">Carrinho </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path="/" element={<TesteHome />} />
        <Route path="/login" element={<TesteLogin />} />
        <Route path="/profile" element={<TestePerfil />} />
        <Route path="/produto" element={<TesteProduto />} />
        <Route path="/cart" element={<Cart />} />
        {/* Pagina de 404 personalizada */}
        {/* <Route path="*" element={<Error />}  />  */}
      </Routes>
    </Container>
  );
}

export default App;
