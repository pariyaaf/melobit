import React from 'react';
import '../../styles/style.css';
import {Container , Row,Carousel} from 'react-bootstrap'
import {useState , useEffect} from 'react'



function Slider  (){

  const [slider, setSlider] = useState()

  useEffect(()=>{
    var sliderParams ={
      method:'GET',
   
    

  }

  const getSlide = async()=>{
    var pic = await fetch('https://api-beta.melobit.com/v1/song/slider/latest', sliderParams)
    .then(Response=>Response.json())
    .then( data => setSlider(data.results))
    .then(console.log(slider))
    .then(console.log(slider[0].album.image.cover.url))
  }
  getSlide()
})
var img = '#'
    return(
        <Container className='pt-5 pb-5 mx-auto col-9'>
    <Row className='justify-content-center'>
      
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider[0].album.image.cover.url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider[1].album.image.cover.url}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider[2].album.image.cover.url}
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