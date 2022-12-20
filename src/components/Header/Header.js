import React from 'react';
import './Header.css';
import srch from'../../img/icons8-search-50.svg';
import {Container , Button , Card , InputGroup , Row, FormControl} from 'react-bootstrap'



const Header = () => (
  <Container className='m-0 p-0 w-100 '>
    <Row>


  <nav class="navbar  navbar-expand-lg shadow-lg ">
    <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">
    <img Class="mx-3 img-fluid rounded float-left col-4" src="https://www.melobit.com/logo.svg"  />
    <strong>Melobit</strong>
    </a>
    
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
  </button>

  <div class="collapse navbar-collapse ">
    <ul class="navbar-nav   w-50  mx-auto justify-text-center ">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Disabled</a>
      </li>
    </ul>
    
    <input class="form-control-sm " type="text" placeholder=".form-control-lg"
            onKeyPress={event => {
              if (event.key == "Enter") {
                console.log("hello")
              }
            }} 
            >
            </input>   
            <button class='btn' onClick={'#'}>
              <img src={srch}></img>
            </button>
  </div>
  </div>

</nav>


</Row>
  </Container>
)
export default Header;