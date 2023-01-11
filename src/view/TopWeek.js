import Card from '../components/card.js'
import React from 'react';
import {Container , Row,Col, Figure} from 'react-bootstrap';
import {useState , useEffect} from 'react';
import { getTopDaySong, getTopWeekSong } from '../services/api.js';
import {Link} from 'react-router-dom';


function WeekSongs (){

const [WeekSong, SetWeekSong] = useState([])

useEffect(()=>{
const FetchApiTopWeek = async()=>{
    const song = await getTopWeekSong()
    console.log(song);
    SetWeekSong(song);
  }
  FetchApiTopWeek();

},[])



return(
  <Container className='cardstyle w-75 align-items-center pt-4 '>
  <Row className=' justify-content-between'>
    <p className='text-light'>Songs of Week:</p>
   {WeekSong.map((s)=>(
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
    <Figure.Caption className="mx-auto">
    {s.title}
  </Figure.Caption>
  </Figure>
  </Col>

   ))} 
 </Row>
 </Container>
);

}
export default WeekSongs;