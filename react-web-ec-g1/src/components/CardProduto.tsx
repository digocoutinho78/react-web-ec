import React, { useContext } from "react"; // Importe o useContext
import { Card, Button } from "react-bootstrap";
import "./components.css";
import Button01 from "./Button01";
import { CartCtx } from "../Context/CartContext"; // Importe o CartCtx
import { BsCart4 } from "react-icons/bs";
import { CardText } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Cart } from "../Cart/Cart";

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
  descricao,
  preco,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartCtx); // Use o useContext para acessar o CartCtx

  const product = { // Crie um objeto de produto
    title: nome,
    price: preco,
    // Adicione quaisquer outras propriedades necessárias
  };

  return (
    <Card className={className} >
      <Card.Img className="image-card" src={imagem} onClick={() => navigate( `descricao/${nome}/${categoria}/${descricao}/${preco}`) } />
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
