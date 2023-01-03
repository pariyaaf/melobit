import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container , Button , Card , InputGroup , Row, FormControl} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";//in jadide
import {useState , useEffect} from 'react'


import React, { Component } from 'react';
import Header from './components/Header.js';
import Slider from './components/slider.js';
import Cards from './components/card.js';
import Song from './components/Song.js';

import TopDay from './view/TopDay.js';
import TopWeek from './view/TopWeek.js';

import TopArtists from './view/TopArtists';
import Last from './view/LatestSong.js';


import Search from './components/Search';



class App extends Component {
  render() {
    
    return (
      <div className="App w-100">
       <Row>
           <Header /> 
          </Row>
           
          <Row>
            <Slider/>
          </Row>

          <Row>
            <TopDay/>
          </Row> 
          <Row>
            <TopArtists/>
          </Row>  
 
          <Row>
            <TopWeek/>
          </Row>  
          
          <Row>
            <Last/>
          </Row>  

{/* <Row>
  <Song></Song>
          </Row>  */}



        

     
      </div>
    );
  }
}
export default App;