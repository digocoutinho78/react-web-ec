import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Button01 from './Button01';

interface CustomFormProps {
  onSubmit: () => void; // vazio para colocar a funcao desejada
}

const Form01: React.FC<CustomFormProps> = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>  
        <Form.Control type="email" placeholder="Digite seu email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>

      <Button01 text="Enviar" onClick={onSubmit} className="btn-laranja" />
    </Form>
  );
};

export default Form01;


/*


Exemplo de uso

 const handleSubmit = () => {
    alert('Formulário enviado!');
  };

  return (
    <div>
      <h1>Login</h1>
      <CustomForm onSubmit={handleSubmit} />
    </div>
  );
};

*/ 