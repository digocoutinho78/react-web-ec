import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductCard from "../components/CardProduto";
import { PostProducts } from "../services/crud";
import { data2 } from "../services/data";
import { testFunc } from "../services/crud";
import { GetSmartPhones } from "../services/crud";
import { useEffect } from "react";
import { useState } from "react";
import { Ismartphones } from "../Types/Products";

export function TesteHome() {
  const [phones, setPhones] = useState<Ismartphones[]>();
  useEffect(() => {
    const response = async () => {
      const phonesTeste = await GetSmartPhones();
      setPhones(phonesTeste);
      console.log(phonesTeste);
    };
    response();
  }, []);

  return (
    <Container className="conteiner">
      {phones?.map((item) => (
        <Row key={item.id}>
          <ProductCard
            imagem={item.images[0]}
            nome={item.title}
            categoria={item.category}
            descricao={item.description}
            preco={item.price}
          />
        </Row>
      ))}

      {/*  <Row>
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
      </Row> */}
      {/* <button onClick={() => testFunc()}>Mandar para o banco</button>
      <button onClick={() => GetSmartPhones()}>pegar do banco</button> */}
    </Container>
  );
}

/* export default TesteHome; */

// Nome do componente apenas um teste para criação de rota, caso modificar o nome do componente, modificar o nome do import e a propriedade element no arquivo App.tsx
// export function TesteHome() {
//   return (
//     <>
//       <h1>Página home</h1>
//     </>
//   );
// }
