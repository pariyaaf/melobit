import React from 'react';
import '../../styles/style.css';

import srch from'../../img/icons8-search-50.svg';
import logo from'../../img/favicon.svg';

import {Container , Button , Navbar , Nav , Row, NavDropdown} from 'react-bootstrap'



const Header = () => (
  <Container className='m-0 p-0 '>
   
    <Navbar className='navbar px-5 '  expand="lg">
      <Container>
        <Navbar.Brand  className="link-light" href="#home">
        <img className="mx-4 img-fluid rounded float-left  " src={logo}  />
        <strong>Melobit</strong>
          </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="navbar-nav  mx-auto justify-text-over" id="basic-navbar-nav">
          <Nav  className="mx-auto nav-menu h3  border-bottom">
            <Nav.Link className='px-3 text-light' href="#home">Home</Nav.Link>
            <Nav.Link className='px-3 text-light' href="#playlist">Playlist</Nav.Link>
            <Nav.Link className='px-3 text-light' href="#Favorite">Favorite</Nav.Link>
            <Nav.Link className='px-3 text-light' href="#history">History</Nav.Link>
          </Nav>

        <div className=''>
          <input className="form-control-sm " type="text" placeholder="Search a song!"
            onKeyPress={event => {
              if (event.key == "Enter") {
                console.log("hello")
              }
            }} 
            >
            </input>   
            <button className='btn' onClick={'#'}>
              <img src={srch}></img>
            </button>
            </div>
        </Navbar.Collapse>
      </Container>

  
    </Navbar>
  </Container>
)
export default Header;