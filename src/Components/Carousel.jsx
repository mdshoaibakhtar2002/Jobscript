import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../Images/hack.jpg"
import slider2 from "../Images/lappy.jpg"
import slider3 from "../Images/localhost.jpeg"

function MyCarousel() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100 crousel-img"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 crousel-img"
          src={slider2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 crousel-img"
          src={slider3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;