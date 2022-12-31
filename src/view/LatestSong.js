import React from 'react';
import {Container , Row,Figure, Col} from 'react-bootstrap';
import {useState , useEffect} from 'react';
import { getTLatestSong, getTopDaySong, getTrendingArtists } from '../services/api.js';
import '../styles/style.css'

function LastSongs(){

const [Last, SetLast] = useState([])

useEffect(()=>{
const FetchApiLast = async()=>{
    const Last = await getTLatestSong()
    console.log(Last);
    SetLast(Last);
  }
  FetchApiLast();

},[])

     return(
      <Container className='cardstyle w-75 align-items-center pt-4 '>
      <Row className=' justify-content-between last-song'>
        <p className='text-light'>Last Songs</p>
       {Last.map((s)=>(
        <Col>
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
export default LastSongs;