import React from 'react';
import {Container , Image , Card , Figure , Row, FormControl} from 'react-bootstrap'
import '../../styles/style.css';


const Cards = () => (
    <Container className='cardstyle w-75 align-items-center pt-4 '>
        <Row className='row row-cols-4'>
        <Figure>
      <Figure.Image src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'>
      </Figure.Image>
      <Figure.Caption>
        pariy pariya
      </Figure.Caption>
      </Figure>
        </Row>

    </Container>
  )
            
  export default Cards;
