<<<<<<< HEAD
import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "./components.css";
import Button01 from "./Button01";
import { CartCtx } from "../Context/CartContext";
import { BsCart4 } from "react-icons/bs";
import { CardText } from "react-bootstrap-icons";
=======
import { Card } from "react-bootstrap";
import "./components.css";
import Button01 from "./Button01";
>>>>>>> 2c83ac653c595c2364dc4f805fe7332625f7f96e
import { useNavigate } from "react-router-dom";
import { Cart } from "../Cart/Cart";

interface ProductCardProps {
  id: string; // Certifique-se de que a prop id está presente
  className?: string;
  imagem: string;
  nome: string;
  categoria: string;
  descricao: string;
  preco: number;
}

const ProductCard = ({
  id, // Inclua o id aqui
  className = "card-produto",
  imagem,
  nome,
  categoria,
  descricao,
  preco,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartCtx);

  const product = {
    id, // Inclua o id do produto aqui
    title: nome,
    price: preco,
  };
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
          onClick={() => cartCtx?.addToCart(product, 1)} // Chame a função addToCart quando o botão for clicado
        />
        
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
