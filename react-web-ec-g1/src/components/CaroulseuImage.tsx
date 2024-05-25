
import { Carousel, CarouselItem } from 'react-bootstrap';
import './components.css'

function CarouselImage() {
  return (
    <Carousel className='carousel-container'>
      <CarouselItem className='carousel-image'>
        <img
          className="carrossel1"
          src="" //Local ou link imagem
          alt="propaganda"
        />
        
      </CarouselItem>
      <CarouselItem>
        <img
          className="carrossel2"
          src="" //Local ou link imagem
          alt="propaganda"
        />
        
      </CarouselItem>
      <CarouselItem>
        <img
          className="carrossel3"
          src="" //Local ou link imagem
          alt="propaganda"
        />

      </CarouselItem>
    </Carousel>
  );
}

export default CarouselImage;
