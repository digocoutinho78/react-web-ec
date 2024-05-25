
import { Carousel, CarouselItem } from 'react-bootstrap';
import './components.css'

function CarouselImage() {
  return (
    <Carousel className='carousel-container'>
      <CarouselItem className='carousel-image'>
        <img
          className="d-block w-100"
          src="" //Local ou link imagem
          alt="propaganda"
        />
        
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="" //Local ou link imagem
          alt="propaganda"
        />
        
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="" //Local ou link imagem
          alt="propaganda"
        />

      </CarouselItem>
    </Carousel>
  );
}

export default CarouselImage;
