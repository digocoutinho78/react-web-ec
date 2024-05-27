import { useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";


export function Descricao() {
  const navigate = useNavigate();
  const parametros = useParams();
  
  return (
    <>
  
      <Card>
        <Card.Body>
          <Card.Title>Nome: {parametros.nome}</Card.Title>
          <Card.Img
            src={parametros.imagem}
            style={{height: "30vh", width: "10vw"}}
           
          />
          <Card.Subtitle>Categoria: {parametros.categoria}</Card.Subtitle>
          <Card.Text>{parametros.descricao}</Card.Text>
          <Card.Text>Preço {parametros.preco}</Card.Text>

          <button onClick={() => navigate("/")}>Voltar para home </button>
        </Card.Body>
      </Card>
    </>
  );
}
