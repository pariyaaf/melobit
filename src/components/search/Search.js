
import '../../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container , Button , Card , InputGroup , Row, FormControl} from 'react-bootstrap'
import {useState , useEffect} from 'react'

import srch from'../../img/icons8-search-50.svg';



function Search() {
  const [searchInput, setSearchInput] = useState("")
  const [Songs, setSongs] = useState([])





   async function search() {  
    var sliderParams ={
      method:'GET'
  } 
    var returnedAlbums = await fetch (' https://api-beta.melobit.com/v1/search?q=' + searchInput +'/0/50',sliderParams )
     .then(Response=>Response.json())
     .then( data => setSongs(data))
     .then(console.log('song is:'+Songs))
    // .then(console.log(slider[0].album.image.cover.url))
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
            {Songs.map((album , i) => {
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
