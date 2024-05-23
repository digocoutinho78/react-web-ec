import React from "react";
import { Card, Button } from "react-bootstrap";
import './components.css'
import Button01 from "./Button01";

interface ProductCardProps {
  className?: string;
  imagem: string;
  nome: string;
  categoria: string;
  descricao: string;
  preco: string;
}

const ProductCard = ({
  className = "card-produto",
  imagem,
  nome,
  categoria,
  descricao,
  preco,
}: ProductCardProps) => {
  return (
    <Card className={className}>
      <Card.Img  className="image-card"  src={imagem} />
      <Card.Body className="bg-gradient">
        <Card.Title className="card-produto-titulo">{nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted ">{categoria}</Card.Subtitle>
        <Card.Text className="fw-light">{descricao}</Card.Text>
        <Card.Text className="fw-bold">{preco}</Card.Text>
        <Button01 text="Adicionar ao carrinho" 
        // onClick={} - chamar funcao
        className="btn-laranja"
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
