import Card from '../components/card.js'
import React from 'react';
import {Container , Row,Col, Figure} from 'react-bootstrap';
import {useState , useEffect} from 'react';
import { getTopDaySong } from '../services/api.js';
import {Link} from 'react-router-dom';



function DeySongs (){

const [DaySong, SetDaySong] = useState([])

useEffect(()=>{
const FetchApiTopDay = async()=>{
    const song = await getTopDaySong()
    console.log(song);
    SetDaySong(song);
  }
  FetchApiTopDay();

},[])



return(
  <Container className='cardstyle w-75 align-items-center pt-4 '>
  <Row className=' justify-content-between'>
    <p className='text-light'>Songs of Day:</p>
   {DaySong.map((s)=>(
    <Col className='col-2 mx-3'>
      <Figure key={s.id}>
    {s.image &&
      <Link to={`Song/${s.id}`} aria-label="Close" className='text-decoration-none'>

        <Figure.Image
          className="d-block w-100"
          src={s.image.cover.url}
        >
        </Figure.Image>
      </Link>
    }
    <Figure.Caption className='cardstyle mx-auto'>
    {s.title}
  </Figure.Caption>
  </Figure>
      </Col>
   ))} 
 </Row>
 </Container>
);

}
export default DeySongs;