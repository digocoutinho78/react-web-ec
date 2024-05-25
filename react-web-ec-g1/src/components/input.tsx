import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function InputHome() {
  return (
    
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Digite o produto..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Buscar
        </Button>
      </InputGroup>
    
  );
}

export default InputHome;
