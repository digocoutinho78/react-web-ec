
import { Carousel, CarouselItem } from 'react-bootstrap';
import './components.css'
import img1 from '../assets/img/carosel1.png'
import img2 from '../assets/img/carosel2.png'
import img3 from '../assets/img/carosel3.png'

function CarouselImage() {
  return (
    <Carousel className='carousel-container'>
      <CarouselItem className='carousel-image'>
        <img
          
          src= {img1} //Local ou link imagem
          alt="propaganda"
        />
        
      </CarouselItem>
      <CarouselItem className='carousel-image'>
        <img
          
          src= {img2}//Local ou link imagem
          alt="propaganda"
        />
        
      </CarouselItem>
      <CarouselItem className='carousel-image'>
        <img
          
          src={img3} //Local ou link imagem
          alt="propaganda"
        />

      </CarouselItem>
    </Carousel>
  );
}

export default CarouselImage;
