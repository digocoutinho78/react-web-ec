import { useContext, useEffect, useState } from "react"
import Iproduct from "../Types/Products"
import { CartCtx } from "../Context/CartContext"
import { Button, ButtonGroup, Col, Container, ListGroup, Row } from "react-bootstrap";
import { login } from "../Auth";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../components/components.css";
import Button01 from "../components/Button01";

const Cart = () => {
  const cartCtx = useContext(CartCtx)
  const authtCtx = useContext(AuthContext)
  const navigate = useNavigate();
  const loader = async () => {
    const authenticated = authtCtx.isAuthenticated
    console.log(authenticated)
    if (!authenticated) {
      navigate("/login");
    }
    alert("FINALIZANDO COMPRA.....")
  };
  return (

    <Container fluid>



      <Row>
        <Col>
          <Row>
            <Col>Produto</Col>
            <Col>Quantidade</Col>
            <Col>Preço</Col>

          </Row>
          <ListGroup>
            {cartCtx?.products.map((item) => (
              <ListGroup.Item>
                <Row className="rowCart">
                  <Col className="colunaCar">
                    {item.product.title}
                  </Col>
                  <Col className="colunaCar">
                    <Row className="rowCart">
                      <ButtonGroup aria-label="Quantidade">
                        <Button className="bgBut" onClick={() => cartCtx.removeFromCart(item.product, 1)}>-</Button>
                        <Button className="qtdCar" variant="light" disabled={true} >{item.quantity}</Button>
                        <Button className="bgBut" onClick={() => cartCtx.addToCart(item.product, 1)}>+</Button>


                      </ButtonGroup>
                    </Row>
                    <Row>
                      <Button variant="link" onClick={() => cartCtx.removeFromCart(item.product, item.quantity)}><p className="removerBut">
                        remover
                          </p></Button>
                    </Row>
                    
                  </Col>
                  <Col className="valorCart">
                    {(item.quantity * item.product.price).toFixed(2)}
                  </Col>
                </Row>

              </ListGroup.Item>))}
          </ListGroup>
        <Row>
          <Col>
            <h2 className="tituloCar">Valor Total: R$ {cartCtx?.totalAmount()}</h2>
          </Col>
        </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button01 text="FINALIZAR COMPRA" onClick={loader} className="btn-laranja2"> COMPRAR </Button01>
        </Col>
      </Row>
    </Container>

  )
}

export { Cart }