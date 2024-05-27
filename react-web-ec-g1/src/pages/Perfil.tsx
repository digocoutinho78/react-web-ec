
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./Home.css";

export function TestePerfil() {
  return (
    <Form className="profile">
      <h1>Perfil do usuário</h1>
      <div className="div-profile"></div>

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label className="label-profile">Email:</Form.Label>
        <Form.Control type="email" value="jean@hotmail.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className="label-profile">Nome:</Form.Label>
        <Form.Control value="Jean  " />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label className="label-profile">Cidade</Form.Label>
        <Form.Control value="Petrópolis" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label className="label-profile">Estado</Form.Label>
        <Form.Control value=" Rio de Janeiro" />
      </Form.Group>
    </Form>
  );
}
