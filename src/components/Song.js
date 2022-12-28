import React from 'react';
import '../styles/style.css';
import {Container , Row,Col ,Card,ListGroup, DropdownButton, Dropdown} from 'react-bootstrap'
import {useState , useEffect} from 'react'



function Song  (){

  const [songsDetails, setSongsDetails] = useState()

  useEffect(()=>{
    var sliderParams ={
      method:'GET',
   
    

  }

  const GetSong = async()=>{
    console.log('aaaa')
    var songinf = await fetch('https://api-beta.melobit.com/v1/song/NThRYnA', sliderParams)
    .then(data=>console.log(data))
    .then(Response=>Response.json())
    .then( data => setSongsDetails(data))
    //.then(console.log(songsDetails.lyrics))
  }
  GetSong()
})

    return(

    <Container className=' songPage  pt-5 pb-5'>
        <Row className=' backImg col-11'>
             {/* <img src={songsDetails.artists.image.thumbnail}/>  */}
              <img src='https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-1323206.jpg&fm=jpg'/> 
        </Row >
<div className=' card-img-overlay'>
        <Row className='col-10 ' >

        <Col className='  col-sm-8 col-md-3'>
          <p><strong>اسم اهنگ</strong></p>
          <p>:ترانه سرا</p><p>a</p>
          <p>:آهنگساز</p><p>b</p>
          <p>:تنظیم کننده</p><p>c</p>
          <p>:سبک</p><p>d</p>
          
          <DropdownButton  className='button-85 ' title="Download"> 
                     <Dropdown.Item  eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          </DropdownButton>
        </Col>

              
        <Col className=' col-sm-8 col-md-4 '>
        <p>sliderParams:khandehato phorbot</p>
        </Col>

        <Col className=' col-sm-8 col-md-5 order-first' >
            {/* <p >{songsDetails.lyrics}</p>  */}
          <Card className='bg-dark bg-opacity-50'>
          <Card.Img className=' img-fluid rounded-circle w-75' src="https://www.mittun.com/wp-content/uploads/2020/11/Instagram-logo-square.jpg" />
          <Card.Body className=''>
            <Card.Title>song name</Card.Title>
            <Card.Text>aron afshar</Card.Text>
          </Card.Body>
          <ListGroup>
        <ListGroup.Item>_____________________</ListGroup.Item>
        <ListGroup.Item>* & *</ListGroup.Item>
      </ListGroup>
        </Card> 
        </Col>

        </Row>
        </div>
    </Container>
    );

    }
export default Song;