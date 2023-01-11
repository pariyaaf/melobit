


import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container , Button , Card , InputGroup , Row, FormControl} from 'react-bootstrap'
import { Route, Routes} from 'react-router-dom';
import {useState , useEffect} from 'react'


import React, { Component } from 'react';
import HomePage from './components/home';
import Search from './components/Search';
import Header from './components/Header';
import Song from './components/Song';



class App extends Component {
  render() {
    
    return (
      <div className="App w-100">

           
          
          <Row>
            <Header/>
          </Row> 
          
          <Routes>
          <Route path="/Song/:id" element={<Song />} />
          <Route path="/search/Song/:id" element={<Song/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/search" element={<Search/>} />  
          </Routes>  
          
     
      </div>
    );
  }
}
export default App;
