

import React from 'react';
import { Button } from 'react-bootstrap';

interface CustomButtonProps {

  text: string; // texto que irá aparecer no botao
  onClick: () => void; // vazio para chamar o função do botao
  className?: string; //define a cor do botao no css
  

}

const Button01 = ({  text, onClick, className,  }:CustomButtonProps) => {
  return (
    <Button onClick={onClick} size='sm' className={className} >
      {text}
    </Button>
  );
};

export default Button01;


// Botão modelo:

 // const handleClick = () => {
  //   alert("Botão clicado!");
  // };



/*<Button01
text="Clique aqui"
onClick={handleClick}
className="btn-laranja"
></Button01>*/