import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./components.css";
import { BsTruck } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
      <>
      <Row className="line"></Row>
    <Row className="footer">
      <Col className="itemFooter">
        <BsTruck size={40} className="iconFooter" />A entrega mais rápida do
        país
      </Col>
      <Col className="itemFooter">
        <BsCurrencyDollar size={40} className="iconFooter" />
        Sempre os melhores preços
      </Col>
      <Col className="itemFooter">
        <BsWhatsapp size={40} className="iconFooter" />
        Alguma dúvida? Fale conosco!
      </Col>
    </Row>
    <Row>
        <Col className="copyrgt"> Copyright ® Grupo 01 - React - SERRATEC - 2024.1
        </Col>
    </Row>
    </>
  );
}

export default Footer;
