import React from 'react';
import './slider.css';
import {Container , Button , Card , InputGroup , Row, FormControl ,Carousel} from 'react-bootstrap'



function Slider  (){
  var img = 'https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg'
    return(
        <Container className='pt-5 pb-5 mx-auto col-9'>
    <Row className='justify-content-center'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Row>
    </Container>
    );

    }
export default Slider;