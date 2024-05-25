import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductCard from "../components/CardProduto";
// import { PostProducts } from "../services/crud"; // FUNCAO INEXISTENTE - REMOVER?
import { data2 } from "../services/data";
import { testFunc } from "../services/crud";
import { GetSmartPhones } from "../services/crud";
import { useEffect } from "react";
import { useState } from "react";
import { Ismartphones } from "../Types/Products";
import "./Home.css"

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
      <Row className="row-carrossel">
        teste
      </Row>

      <Row>
        {phones?.map((item) => (
          <Col key={item.id} className="row-itens">
            <ProductCard
              imagem={item.images[0]}
              nome={item.title}
              // categoria={item.category}
              // descricao={item.description}
              preco={item.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
