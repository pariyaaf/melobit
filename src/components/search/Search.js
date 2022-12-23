
import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container , Button , Card , InputGroup , Row, FormControl} from 'react-bootstrap'
import {useState , useEffect} from 'react'

import srch from'../../img/icons8-search-50.svg';


const CLIENT_ID = "9ff5f8ee6cd343178409e3808eeff759"
const CLIENT_SECRET = "a5592a57425840d6a96340b85bdf8c56"

function Search() {
  const [searchInput, setSearchInput] = useState("")
  const [accessToken, setAccessToken] = useState("")
   const [albums, setAlbums] = useState([])


  useEffect(() => {
    var auth = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token' , auth)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))
  }, [])

  //Search
  async function search() {
    console.log("Search: " + searchInput) // Mohsen EbrahimZadeh

    var artistParams = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
      },
    }
    var artistID = await fetch ('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist' , artistParams)
    .then(response => response.json())
    .then( data => {return data.artists.items[0].id})

    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' , artistParams)
    .then(response => response.json())
    .then (data => {
      console.log(data)
      setAlbums(data.items)
    })
  }


  return (
    <div className="search">
        <Container className='row row-cols-9 mx-auto'>
          <InputGroup className='mb-3 my-5' size='lg'>
          <FormControl
            placeholder='Search Artist'
            type='input'
            onKeyPress={event => {
              if (event.key == "Enter") {
                search()
              }
            }} 
            onChange={event => setSearchInput(event.target.value)}
            >
            </FormControl> 

            <Button className='button-85' onClick={search}>
              <img src={srch}></img>
              Search
            </Button>
          </InputGroup>
        </Container >
        <Container className=''>
          <Row className='row row-cols-msw-25 row-cols-lg-5 mx-auto '>
            {albums.map((album , i) => {
              return (
             <Card className='rounded-shadow bg-dark my-1 mx-auto'>
              <Card.Img className='mt-3 img-fluid rounded-circle' src={album.images[0].url} />
                <Card.Body  className='mx-auto text-bg-dark'>
                  <Card.Title>{album.name}</Card.Title>
                </Card.Body>
            </Card>


            )})
            }
            
            </Row>
        </Container>
    </div>
  );
}

export default Search;
