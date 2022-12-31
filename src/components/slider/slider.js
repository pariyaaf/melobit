import React from 'react';
import '../../styles/style.css';
import {Container , Row,Carousel} from 'react-bootstrap';
import {useState , useEffect} from 'react';
import { getSlider, getTLatestSong } from '../../services/api';


function Slider (){

const [slider, setSlider] = useState([])

useEffect(()=>{
const FetchApiSlider = async()=>{
    const pic = await getSlider()
    console.log(pic);
    setSlider(pic);
  }
  FetchApiSlider();

},[])

    return(
        <Container className='pt-5 pb-5 mx-auto col-8'>
    <Row className='justify-content-center'>
    <Carousel>

      {slider.map((s)=>(
              <Carousel.Item key={s.id}>
       {s.album &&
          <img
            className="d-block w-100"
           src={s.image.slider.url}
            alt="First slide"
          />
       }
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

      ))}
    </Carousel>
    </Row>
    </Container>
    );

    }
export default Slider;