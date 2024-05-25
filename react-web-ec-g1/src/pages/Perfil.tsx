
import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Home.css'


export function TestePerfil() {
  return (
    <Form className="profile">
      <h1>Perfil do usuário</h1>
      <div className="div-profile"></div>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className="label-profile">Email:</Form.Label>
          <Form.Control type="email" placeholder="Ex: example@gmail.com" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className="label-profile">Nome:</Form.Label>
        <Form.Control placeholder="Ex: Jean " />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label className="label-profile">Cidade</Form.Label>
        <Form.Control placeholder="Ex: Petrópolis " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label className="label-profile">Estado</Form.Label>
        <Form.Control placeholder="Ex: Rio de Janeiro" />
      </Form.Group>

      

     

      
    </Form>
    
   
  );
}
