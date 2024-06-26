import { useContext } from "react"
import Iproduct from "../Types/Products"
import { CartCtx } from "../Context/CartContext"
import { Button, ButtonGroup, Col, Container, ListGroup, Row } from "react-bootstrap";




const products: Iproduct[] = [
  { id: 1, title: "Televisão", price: 10.99 },
  { id: 2, title: "Celular", price: 20.90 }
]

const Cart = () => {
  const cartCtx = useContext(CartCtx)
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
                    {item.quantity * item.product.price}
                  </Col>

                </Row>

              </ListGroup.Item>))}
          </ListGroup>
        </Col>
      </Row>


      <ul>
        {products.map((product) => (
          <li>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button onClick={() => cartCtx?.addToCart(product, 1)}>
              Adicionar no carrinho
            </button>
          </li>))}
      </ul>

    </Container>

  )
}

export { Cart }