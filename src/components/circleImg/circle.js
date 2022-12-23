import React from 'react';
import './circle.css';
import {Container , Button , Card , InputGroup , Row, FormControl} from 'react-bootstrap'




const Circle = () => (
    <Container className='w-75 mx-auto'>
      <div className=' text-light pt-5 pb-2 text strong '>Week trending artists</div>
        <Row className='row-cols-4 p-4'>
        <Card className='rounded-circle bg-black'>
        <Card.Img className=' img-fluid rounded-circle ' src="https://www.mittun.com/wp-content/uploads/2020/11/Instagram-logo-square.jpg" />
          <Card.Body  className='mx-auto text-white'>
          <Card.Title>name</Card.Title>
      </Card.Body>
</Card> 
        </Row>
    </Container>
  )
  export default Circle;

