import React from 'react';
import '../styles/style.css';
import srch from'../img/icons8-search-50.svg';
import logo from'../img/favicon.svg';

import {Container , Button , Navbar , Nav , Row, NavDropdown} from 'react-bootstrap'

//اینجا باید لینک سرچ و صفحه اصلی رو بیاری که باهاش بریم به صفحه اصلی


const Header = () => (
  <Container className="">
   
    <Navbar className=' header navbar px-5 '  expand="lg">
      <Container>
        <Navbar.Brand  className="link-light" href="#home">
        <img className="mx-4 img-fluid rounded float-left  " src={logo}  />
        <span className>Melobit</span>
          </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="navbar-nav  mx-auto justify-text-over" id="basic-navbar-nav">
          <Nav  className="m-auto nav-menu h3  border-bottom">
            <Nav.Link className='px-3 text-light' href="home">Home</Nav.Link>
            <Nav.Link className='px-3 text-light' href="playlist">Playlist</Nav.Link>
            <Nav.Link className='px-3 text-light' href="Favorite">Favorite</Nav.Link>
            <Nav.Link className='px-3 text-light' href="history">History</Nav.Link>
          </Nav>


      
        <div className=''>
          
            <button className='btn - border-dark abs

            ' >
            {/* onClick={'#'} */}
              <img src={srch}></img>
            </button>
            </div>
        </Navbar.Collapse>
      </Container>

  
    </Navbar>
  </Container>
)
export default Header;