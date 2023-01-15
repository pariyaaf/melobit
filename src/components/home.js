import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Card, InputGroup, Row, FormControl } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";//in jadide
import { useState, useEffect } from 'react'
import React, { Component } from 'react';
import Slider from './slider.js';
import TopDay from '../view/TopDay.js';
import TopWeek from '../view/TopWeek.js';
import TopArtists from '../view/TopArtists';
import Last from '../view/LatestSong.js';



const Home = () => (
  <Container className='home'>

    <Row>
      <Slider />
    </Row>

    <Row>
      <TopDay />
    </Row>
    <Row>
      <TopArtists />
    </Row>

    <Row>
      <TopWeek />
    </Row>

    <Row>
      <Last />
    </Row>
  </Container>

)
export default Home;