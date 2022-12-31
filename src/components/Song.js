import React from 'react';
import '../styles/style.css';
import {Container , Row,Col ,Card,ListGroup, Button, Dropdown,Modal} from 'react-bootstrap'
import {useState , useEffect} from 'react';


import Shareicon from'../img/shareicon.svg';
import ShuffleImg from '../img/shuffle.png';
import SkipImg from '../img/skip.png';
import PreviousImg from '../img/pravius.png';
import Replay from '../img/replay.png';





import AudioButton from "./audio.js";
import { getSong } from '../services/api';




function Song  (){
  const [songDetails, setSongDetails] = useState([])

    useEffect(()=>{
      
    const FetchApiChoice = async()=>{
        const Details = await getSong()
        console.log(Details);
        setSongDetails(Details);
      }
      FetchApiChoice();
    
    },[])

    return(

    <Container className=' songPage  pt-5 pb-5 '>
        <Row className=' backImg col-11 '>
             {/* <img src={songsDetails.artists.image.thumbnail}/>  */}
              <img src='https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-1323206.jpg&fm=jpg'/> 
        </Row >
<div className=' card-img-overlay'>
        <Row className='col-10 justify-content-between ' >

        <Col className='col-sm-8 col-md-auto justify-content-between'>
          <p><strong>اسم اهنگ</strong></p>
          <p>:ترانه سرا</p><p>a</p>
          <p>:آهنگساز</p><p>b</p>
          <p>:تنظیم کننده</p><p>c</p>
          <p>:سبک</p><p>d</p>
          
          <Dropdown className='mt-4'> 
            <Dropdown.Toggle className='button-85 w-5'  id="">
                Download  
            </Dropdown.Toggle>
            <Dropdown.Menu >
              <Dropdown.Item>128</Dropdown.Item>
              <Dropdown.Item>320</Dropdown.Item>
            </Dropdown.Menu>
            <a>
            <img className='mx-4' src={Shareicon}></img>
            </a>

          </Dropdown>
        </Col>

              
        <Col className=' col-sm-8 col-md-4 '>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{
               maxHeight: 'calc(100vh - 210px)',
               overflowY: 'auto',
               }}
                        >
                One fine body...
                One fine body...
                One fine body...

            </Modal.Body>
          </Modal.Dialog>
        </Col>

        <Col className=' col-sm-8 col-md-5 order-first' >
          <Card className='bg-dark bg-opacity-75 rounded'>
          <Card.Img className=' img-fluid rounded-circle w-75' src="https://www.mittun.com/wp-content/uploads/2020/11/Instagram-logo-square.jpg" />
          <Card.Body className=''>
            <Card.Title>song name</Card.Title>
            <Card.Text>aron afshar</Card.Text>
          </Card.Body>
          <ListGroup className='p-0 m-0'>
        <div>_____________________</div>
        <div className=' buttons row row-cols-6 m-4 bg-dark bg-opacity-75'>
          <img src={ShuffleImg}/>
          <img src={PreviousImg}/>
      
        <React.StrictMode>
            <AudioButton url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
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