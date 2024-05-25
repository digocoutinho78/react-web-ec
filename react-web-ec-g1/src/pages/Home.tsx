import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductCard from "../components/CardProduto";
import './Home.css'


export function TesteHome() {
  return (
    <Container className="conteiner">
      <Row>
        <Col className="coluna-prop">
        coluna da propaganda
        </Col>
        
        
      </Row>
      <Row>
        <ProductCard
          imagem="https://m.media-amazon.com/images/I/41Q2NXnJALL.__AC_SX300_SY300_QL70_ML2_.jpg"
          nome="Smartfone Multilaser"
          categoria="Celulares"
          descricao="Smartphone Multilaser E Pro 4G "
          preco="R$ 1000,00"
        />
        <ProductCard
          imagem="https://m.media-amazon.com/images/I/41Q2NXnJALL.__AC_SX300_SY300_QL70_ML2_.jpg"
          nome="Smartfone Multilaser"
          categoria="Celulares"
          descricao="Smartphone Multilaser E Pro 4G "
          preco="R$ 1000,00"
        />
        <ProductCard
          imagem="https://m.media-amazon.com/images/I/41Q2NXnJALL.__AC_SX300_SY300_QL70_ML2_.jpg"
          nome="Smartfone Multilaser"
          categoria="Celulares"
          descricao="Smartphone Multilaser E Pro 4G "
          preco="R$ 1000,00"
        />
        <ProductCard
          imagem="https://m.media-amazon.com/images/I/41Q2NXnJALL.__AC_SX300_SY300_QL70_ML2_.jpg"
          nome="Smartfone Multilaser"
          categoria="Celulares"
          descricao="Smartphone Multilaser E Pro 4G "
          preco="R$ 1000,00"
        />
        <ProductCard
          imagem="https://m.media-amazon.com/images/I/41Q2NXnJALL.__AC_SX300_SY300_QL70_ML2_.jpg"
          nome="Smartfone Multilaser"
          categoria="Celulares"
          descricao="Smartphone Multilaser E Pro 4G "
          preco="R$ 1000,00"
        />
        <ProductCard
          imagem="https://m.media-amazon.com/images/I/41Q2NXnJALL.__AC_SX300_SY300_QL70_ML2_.jpg"
          nome="Smartfone Multilaser"
          categoria="Celulares"
          descricao="Smartphone Multilaser E Pro 4G "
          preco="R$ 1000,00"
        />
        <Col></Col>
      </Row>
    </Container>
  );
}

export default TesteHome;

// Nome do componente apenas um teste para criação de rota, caso modificar o nome do componente, modificar o nome do import e a propriedade element no arquivo App.tsx
// export function TesteHome() {
//   return (
//     <>
//       <h1>Página home</h1>
//     </>
//   );
// }
