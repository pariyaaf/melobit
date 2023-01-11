

import React from 'react';
import '../styles/style.css';
import srch from'../img/icons8-search-50.svg';
import logo from'../img/logo.png';
import {Link} from 'react-router-dom';

import {Container , Button , Navbar , Nav , Row, NavDropdown} from 'react-bootstrap'

//اینجا باید لینک سرچ و صفحه اصلی رو بیاری که باهاش بریم به صفحه اصلی


const Header = () => (
  <Container className="">
   
    <Navbar className=' header navbar px-5 '  expand="lg">
      <Container>
        <Link to="/" className='text-decoration-none'>
        <Navbar.Brand  className="link-light" href="#home">
        <img className="mx-4 img-fluid rounded float-left  " src={logo}  />
        <span className>Melobit</span>
          </Navbar.Brand>
          </Link>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="navbar-nav  mx-auto justify-text-over" id="basic-navbar-nav">
          <Nav  className="m-auto nav-menu h3  border-bottom">
            <Nav.Link className='px-3 text-light' href="home">Home</Nav.Link>
            <Nav.Link className='px-3 text-light' href="playlist">Playlist</Nav.Link>
            <Nav.Link className='px-3 text-light' href="Favorite">Favorite</Nav.Link>
            <Nav.Link className='px-3 text-light' href="history">History</Nav.Link>
          </Nav>


      
          <Link to="/search"className='text-decoration-none'>
          <div>
            <button className='btn - border-dark abs' >
              <img src={srch}></img>
            </button>
            </div>
            </Link> 

        </Navbar.Collapse>
      </Container>

  
    </Navbar>
  </Container>
)
export default Header;


