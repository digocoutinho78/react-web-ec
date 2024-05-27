import { useNavigate, useParams } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import "../components/components.css";
import Button01 from "../components/Button01";

export function Descricao() {
  const navigate = useNavigate();
  const parametros = useParams();

  return (
    <>
      <Row>
        <Card className="ConteinerCardDesc">
          <Card.Body className="conteinerProd">
            <Row>
              <Col md={6}>
                <Card.Img
                className="image-card2"
                  src={parametros.imagem}
                  style={{ height: "80%", width: "200px" }}
                />
              </Col>
              <Col md={6}>
                <Card.Title className="cardTitulo">{parametros.nome}</Card.Title>
                <Card.Subtitle className="cardCat"> {parametros.categoria}</Card.Subtitle>
                <Card.Text className="cardDescr">{parametros.descricao}</Card.Text>
                <Card.Text className="cardPreco">R$ {parametros.preco}</Card.Text>
                <Button variant="primary">Comprar</Button>
              </Col>
            </Row>
            <Row>
              <Col>
              <Row className="line2"></Row>
                <Button01 text="voltar" className="btn-laranja2" onClick={() => navigate("/")}>voltar </Button01>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}
