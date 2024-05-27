import { useContext, useState } from "react";

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
import { Badge, Button, Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from './assets/img/logo-s.svg'
import { CartCtx } from "./Context/CartContext";
import { FaCartShopping } from "react-icons/fa6";
import Login from "./pages/signin/Login";
import Cadastrar from "./pages/signup/Cadastro";
import { LoadingCtx } from "./Context/LoadingContext";
import Loading from "./pages/Loading";
import { Descricao } from "./pages/descricao";

function App() {
  const cartctx = useContext(CartCtx)
  const loadingCtx = useContext(LoadingCtx)
  return (
      <Container fluid >
       
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary"  >
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} width="120" height="120" ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Nav.Link href="/login">Login </Nav.Link>
                <Nav.Link href="/profile">Meu Perfil </Nav.Link>
                {/* <Nav.Link href="/produto">Produto </Nav.Link> */}
                <Nav.Link href="/cart">
                  <Button variant="light">
                    <FaCartShopping size={25} />
                    <Badge bg="danger">
                      {cartctx?.totalItems()}
                    </Badge>
                  </Button>
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<TesteHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/profile" element={<TestePerfil />} />
          <Route path="/produto" element={<TesteProduto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/descricao/:nome/:categoria/:descricao/:preco" element={<Descricao/>} />
          {/* Pagina de 404 personalizada */}
          {/* <Route path="*" element={<Error />}  />  */}
        </Routes>
        <Loading show={loadingCtx?.isLoading} />
      </Container>
  );
}

export default App;
