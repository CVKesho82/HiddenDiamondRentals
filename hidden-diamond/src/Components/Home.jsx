import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Card from "react-bootstrap/Card";
import {CardGroup, Button} from "react-bootstrap";
import home1 from "../Images/home1.png";
import home2 from "../Images/home2.png";
import home3 from "../Images/home3.png";
import home4 from "../Images/home4.png";
import Welcome from "./Welcome";
// import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

//functional component - just the render()method of a class Component.

//set four pieces of state to correspond with each home, so all can be displayed at a different time.

export default function Home() {
const [homes,setHomes] = useState([])
const [homes2,setHomes2] = useState([])
const [homes3,setHomes3] = useState([])
const [homes4,setHomes4] = useState([])

  return(
    <>
    <Card body>
      <Welcome/>
    </Card>
    
      <CardGroup className='card'>
        <Card>
          <Card.Img variant="top" class="images" src={home1} />
            <Card.Body>
              <Card.Title>Buckhead Barracks</Card.Title>
                <Card.Text>
                  <Button onClick = { () => {
                    axios.post('http://localhost:4000/homes', {
                    term:3})
                    .then(function (response) {
                    setHomes(response.data[0]);
                    }); 
                    }}>See Details
                  </Button>
                    <div>
                      <h6>{homes.description}</h6>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        
        <Card>
          <Card.Img variant="top" class="images" src={home2} />
            <Card.Body>
              <Card.Title>Smyrna Sanctum</Card.Title>
                <Card.Text>
                  <Button onClick = { () => {
                    axios.post('http://localhost:4000/homes', {
                    term:4})
                    .then(function (response) {
                    setHomes2(response.data[0]);
                    }); 
                    }}>See Details
                  </Button>
                    <div>
                      <h6>{homes2.description}</h6>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        
        <Card>
          <Card.Img variant="top" class="images" src={home3} />
            <Card.Body>
              <Card.Title>Sandy Springs Sanctuary</Card.Title>
                <Card.Text>
                  <Button onClick = { () => {
                    axios.post('http://localhost:4000/homes', {
                    term:2})
                    .then(function (response) {
                    setHomes3(response.data[0]);
                    }); 
                    }}>See Details
                  </Button>
                    <div>
                      <h6>{homes3.description}</h6>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        
        <Card>
          <Card.Img variant="top" class="images" src={home4} />
            <Card.Body>
              <Card.Title>West End Wonderland</Card.Title>
                <Button onClick = { () => {
                  axios.post('http://localhost:4000/homes', {
                  term:5}) 
                  .then(function (response) {
                  setHomes4(response.data[0]);
                  }); 
                  }}>See Details
                </Button>
                  <div>
                    <h6>{homes4.description}</h6>
                  </div>
            </Card.Body>
        </Card>        
    </CardGroup>
  </>
  )
 };