import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductCard from "../components/CardProduto";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { data2 } from "../services/data";
import { testFunc } from "../services/crud";
import { GetSmartPhones } from "../services/crud";
import { useEffect } from "react";
import { useState } from "react";
import { Ismartphones } from "../Types/Products";
import "./Home.css";
import Footer from "../components/Footer";
// import InputHome from "../components/input";

export function TesteHome() {
  const [phones, setPhones] = useState<Ismartphones[]>();
  const [filtro, setFiltro] = useState<Ismartphones[]>();
  const [estado, setEstado] = useState(true);

  console.log(estado);

  useEffect(() => {
    const response = async () => {
      const phonesTeste = await GetSmartPhones();
      setPhones(phonesTeste);
      // console.log(phonesTeste);
    };
    response();
  }, []);

  const filterProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterTest = phones?.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFiltro(filterTest);
    setEstado(false);
  };

  const condicao = () => {
    if (estado) {
      return (
        <Row>
          {phones?.map((item) => (
            <Col key={item.id} className="row-itens">
              <ProductCard
                imagem={item.images[2]}
                nome={item.title}
                // categoria={item.category}
                // descricao={item.description}
                preco={item.price}
              />
            </Col>
          ))}
        </Row>
      );
    } else {

      return(
      <Row>
        {filtro?.map((item) => (
          <Col key={item.id} className="row-itens">
            <ProductCard
              imagem={item.images[2]}
              nome={item.title}
              // categoria={item.category}
              // descricao={item.description}
              preco={item.price}
            />
          </Col>
        ))}
      </Row>
      )

    }
  };

  return (
    // Inicio barra de pesquisa
    <Container className="conteiner">
      <Row>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Digite o produto..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={filterProducts}
          />
          <Button variant="outline-secondary" id="button-addon2">
            Buscar
          </Button>
        </InputGroup>
      </Row>

      {/* Final barra de pesquisa */}

      {/* Inicio carrosel */}
      <Row className="row-carrossel"></Row>
      {/* final carrosel */}
      
      {/* Inicio página de produtos */}
      {condicao()}
      {/* final página de produtos */}

<Row>
<Footer/>
</Row>

    </Container>


  );
}
