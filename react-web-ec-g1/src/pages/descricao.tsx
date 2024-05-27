import { useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

export function Descricao() {
  const navigate = useNavigate();

  const parametros = useParams();
  return (
    <>
      <Card>
        <Card.Img src={parametros.imagem} />
        <Card.Body>
          <Card.Title>Nome: {parametros.nome}</Card.Title>
          <Card.Text>IMAGEM, procurando como passar pela rota</Card.Text> 
          <Card.Subtitle>Categoria: {parametros.categoria}</Card.Subtitle>
          <Card.Text>{parametros.descricao}</Card.Text>
          <Card.Text>Preço {parametros.preco}</Card.Text>

          <button onClick={() => navigate("/")}>Voltar para home </button>
        </Card.Body>
      </Card>
    </>
  );
}
