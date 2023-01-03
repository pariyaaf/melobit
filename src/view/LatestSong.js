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
      <Container className='testimonial-group cardstyle w-75 align-items-center pt-4 '>
        <p className='text-light'>Last Songs</p>

      <Row className=' justify-content-between last-song'>
        <Col className='col-3'>

          {Last.map((s)=>(

              <Figure key={s.id} className="mx-3"> 
            {s.image &&
              <Figure.Image
                className="d-block w-100"
                src={s.image.cover.url}
              >
              </Figure.Image>
            }
            <Figure.Caption >
            {s.title}
          </Figure.Caption>
          </Figure>
          ))} 
        </Col>

     </Row>
     </Container>
    );

    }
export default LastSongs;