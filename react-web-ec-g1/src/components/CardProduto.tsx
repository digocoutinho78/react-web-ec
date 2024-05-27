import { Card } from "react-bootstrap";
import "./components.css";
import Button01 from "./Button01";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  className?: string;
  imagem: string;
  nome: string;
  categoria: string;
  descricao: string;
  preco: number;
}

const ProductCard = ({
  className = "card-produto",
  imagem,
  nome,
  categoria,
  descricao, //DESCRICAO ENTRA NA PAGINA DO PRODUTO
  preco,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const encodeImage = encodeURIComponent(imagem);

  return (
    <Card className={className}>
      <Card.Img
        className="image-card"
        src={imagem}
        onClick={() =>
          navigate(
            `descricao/${encodeImage}/${nome}/${categoria}/${descricao}/${preco}`
          )
        }
      />
      <Card.Body className="bg-gradient">
        <Card.Title className="card-produto-titulo">{nome}</Card.Title>
        <Card.Text className="fw-bold">{preco}</Card.Text>

        <Button01
          text="Comprar"
          className="btn-laranja "
          onClick={() => alert("Jogar para o carinho")}
        />
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

// modelo:

{
  /* <ProductCard imagem= 'https://m.media-amazon.com/images/I/41Q2NXnJALL.__AC_SX300_SY300_QL70_ML2_.jpg' nome='Smartfone Multilaser' categoria='Celulares' descricao='Smartphone Multilaser E Pro 4G 32GB Wi-Fi 5.0 pol. Dual Chip 1GB RAM Câmera 5MP + 5MP Android 11 (Go edition) Quad Core - Preto - P9150' preco='1000,00' /> */
}
