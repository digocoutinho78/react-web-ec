import { useContext, useEffect, useState } from "react"
import Iproduct from "../Types/Products"
import { CartCtx } from "../Context/CartContext"
import { Button, ButtonGroup, Col, Container, ListGroup, Row } from "react-bootstrap";
import { login } from "../Auth";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";


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
    alert("comprando")
  };
  return (

    <Container fluid>


      <Row>
        <Col>
          <h2>Carrinho de Compras ({cartCtx?.totalAmount()})</h2>
        </Col>
      </Row>

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
                <Row>
                  <Col>
                    {item.product.title}
                  </Col>
                  <Col>
                    <Row>
                      <ButtonGroup aria-label="Quantidade">
                        <Button onClick={() => cartCtx.removeFromCart(item.product, 1)}>-</Button>
                        <Button variant="light" disabled={true} >{item.quantity}</Button>
                        <Button onClick={() => cartCtx.addToCart(item.product, 1)}>+</Button>


                      </ButtonGroup>
                    </Row>
                    <Row>
                      <Button variant="link" onClick={() => cartCtx.removeFromCart(item.product, item.quantity)}>remover</Button>
                    </Row>
                  </Col>
                  <Col>
                    {(item.quantity * item.product.price).toFixed(2)}
                  </Col>
                </Row>

              </ListGroup.Item>))}
          </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={loader} > COMPRAR </Button>
        </Col>
      </Row>
    </Container>

  )
}

export { Cart }