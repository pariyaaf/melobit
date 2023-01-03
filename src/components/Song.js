import React from 'react';
import axios from "axios"

import '../styles/style.css';
import {Container , Row,Col ,Card,ListGroup, Button, Dropdown,Modal, NavLink} from 'react-bootstrap'
import {useState , useEffect} from 'react';

import Shareicon from'../img/shareicon.svg';
import ShuffleImg from '../img/shuffle.png';
import SkipImg from '../img/skip.png';
import PreviousImg from '../img/pravius.png';
import Replay from '../img/replay.png';

import AudioButton from "./audio.js";


function Song  (){
  const [songDetails, setSongDetails] = useState([])

    useEffect(()=>{
      
    const FetchApiChoice = async()=>{
      const Details =await axios.get('https://api-beta.melobit.com/v1/song/NThRYnA')
        setSongDetails(Details.data)
        console.log(Details.data)
      }
      FetchApiChoice();
    
    },[])


    var date = new Date(0);
    function dur(){
    date.setSeconds( songDetails.duration);
    return date.toISOString().substring(14, 19);
    }
    
    return(

    <Container className=' songPage  pt-5 pb-5 '>
        <Row className=' backImg col-10 '>
          {songDetails.image && 
               <img src={songDetails.image.cover.url} alt="artist"/> 
          }
        </Row >
<div className=' card-img-overlay'>
        <Row className='col-9 justify-content-between ' >

        <Col className='col-sm-8 col-md-auto justify-content-between'>
         <p><h2>{songDetails.title} </h2></p> 
          <p><h4>Duration :</h4></p>
          <p>{      songDetails.duration && dur()}</p>
          <p><h4>Download count :</h4></p>
          <p>{songDetails.downloadCount}</p>
          
          <Dropdown className='mt-4'> 
            <Dropdown.Toggle className='button-85 w-5'  id="">
                Download 
            </Dropdown.Toggle>
            {songDetails.audio &&
            <Dropdown.Menu>
              <Dropdown.Item className='text-decoration-none text-dark' href={songDetails.audio.medium.url} download>
              128
              </Dropdown.Item>
            <Dropdown.Item className='text-decoration-none text-dark' href={songDetails.audio.high.url} download>
                320
              </Dropdown.Item>
            </Dropdown.Menu>
            }
            <a>
            <img className='mx-4' src={Shareicon}></img>
            </a>

          </Dropdown>
        </Col>

              
        <Col className=' col-sm-8 col-md-4 '>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>{songDetails.Title}</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{
               maxHeight: 'calc(110vh - 210px)',
               overflowY: 'auto',
               }}
                >
                  {
                    songDetails.lyrics &&
                    songDetails.lyrics.split("\n").map(place => <div> {place}</div>)
                  
                  } 

            </Modal.Body>
          </Modal.Dialog>
        </Col>

        <Col className=' col-sm-8 col-md-5 order-first' >
          <Card className='bg-dark bg-opacity-75 rounded'>
          {songDetails.image && <Card.Img className=' img-fluid rounded-circle w-75' src={songDetails.image.cover.url} />}  
          <Card.Body className='text-white'>
            <Card.Title className=''>{songDetails.title}</Card.Title>
              <Card.Text className='text-light'>{songDetails.artists && songDetails.artists[0].fullName}</Card.Text> 
          </Card.Body>
          <ListGroup className='p-0 m-0'>
        <div>_____________________</div>
        <div className=' buttons row row-cols-6 m-4 bg-dark bg-opacity-75'>
          <img src={ShuffleImg}/>
          <img src={PreviousImg}/>
      
        <React.StrictMode>
            { songDetails.audio &&<AudioButton url={`${songDetails.audio.medium.url}`} />}
        </React.StrictMode>
        <img src={SkipImg}/>
          <img src={Replay}/>
        </div>

      </ListGroup>
        </Card> 
        </Col>

        </Row>
        </div>
    </Container>
    );

    }
export default Song;