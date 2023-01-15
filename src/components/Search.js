
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Card, InputGroup, Row, FormControl, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


import srch from '../img/icons8-search-48.png';
import { getSongOrArtist } from '../services/api';


function Search() {
  const [SA, SetSA] = useState([])
  const [searchInput, setSearchInput] = useState("")


  var FetchApisearch = async () => {
    console.log(searchInput)
    const inf = await getSongOrArtist(searchInput)
    SetSA(inf)
    console.log(SA)

  }

  return (
    <div className="search">
      <Container className='row row-cols-9 mx-auto'>
        <InputGroup className='mb-3 my-5' size='lg'>
          <FormControl
            placeholder='Search Artist or Song!'
            type='input'
            onKeyPress={event => {
              if (event.key == "Enter") {
                FetchApisearch()

              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          >
          </FormControl>

          <Button className='button-85' onClick={FetchApisearch}>
            <img src={srch}></img>
          </Button>
        </InputGroup>
      </Container >
      <Container className='search row-cols-9 '>
        <Row className='mx-2 row row-cols-3'>
          {SA.map((s, i) => {
            var type = s.type
            if (s.type == 'song') {
              var Details = s.song
              var name = Details.title
            }
            else {
              var Details = s.artist
              var name = Details.fullName
              console.log(Details.id)


            }
            return (
              <Link to={`/Song/${Details.id}`} className='text-decoration-none '>

                <Row key={Details.id} className='cardstyle bg-light bg-opacity-25 my-3 m-2 rounded'>
                  <Col className='col-4 p-3'>
                    <img className='img-fluid p-0' src={Details.image.cover_small.url} />
                  </Col>
                  <Col className="my-auto">
                    <p className='m-2 fw-bold'> {type}:</p>
                    <p> {name}</p>
                  </Col>
                </Row>
              </Link>

            )

          }
          )

          }
        </Row>
      </Container>
    </div>
  );
}

export default Search;
