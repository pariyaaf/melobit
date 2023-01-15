import React from 'react';
import { Container, Row, Figure, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getTopDaySong, getTrendingArtists } from '../services/api.js';
import '../styles/style.css'

function TopArtists() {

  const [Artist, SetArtist] = useState([])

  useEffect(() => {
    const FetchApiTrendingArtists = async () => {
      const artists = await getTrendingArtists()
      console.log(artists);
      SetArtist(artists);
    }
    FetchApiTrendingArtists();

  }, [])

  return (
    <Container className='cardstyle w-75 align-items-center pt-4 '>
      <p className='text-light  h4 mb-4'>Week trending artists</p>

      <Row className=' justify-content-between top-artists row-cols-4'>
        {Artist.map((s) => (
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
        ))}
      </Row>
    </Container>
  );

}
export default TopArtists;