import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container , Button , Card , InputGroup , Row, FormControl} from 'react-bootstrap'
import {useState , useEffect} from 'react'

import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Slider from './components/slider/slider.js';
import Circle from './components/circleImg/circle.js';
import Cards from './components/cards/card.js';
import Song from './components/Song.js';


import Search from './components/search/Search';



class App extends Component {
  render() {
    
    return (
      <div className="App w-100">
          <Row className='row-col-12'>
          <Header /> 
          </Row>
 
     {/*      <Row>
          <Slider/>
            </Row>  
          <Row>
            <Circle/>
          </Row>
          <Row>
            <Cards/>
          </Row> 
          <Row>
          </Row>  */}

          {/* * <Row>
            <Search/>
          </Row>  */}
          <Row >
            <Song/>
          </Row>
     
      </div>
    );
  }
}
export default App;