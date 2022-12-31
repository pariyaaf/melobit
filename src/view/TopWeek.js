import Card from '../components/cards/card.js'
import React from 'react';
import {Container , Row,Col, Figure} from 'react-bootstrap';
import {useState , useEffect} from 'react';
import { getTopDaySong, getTopWeekSong } from '../services/api.js';


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
      <Figure.Image
         className="d-block w-100"
        src={s.image.cover.url}
       >
       </Figure.Image>
    }
    <Figure.Caption>
    {s.fullName}
  </Figure.Caption>
  </Figure>
      </Col>
   ))} 
 </Row>
 </Container>
);

}
export default WeekSongs;