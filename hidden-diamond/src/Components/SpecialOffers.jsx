import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import heart from "../Images/heart-g5ad36d19b_1920.jpg";
import happynewyear from "../Images/happynewyear.png";
import happybirthday from "../Images/happybirthday.png";
import happyholidays from "../Images/happyholidays.png";
// import { Container } from 'react-bootstrap';


export default function SpecialOffers() {
  return(  
    <>
    <h1>Special Offers</h1>    
        <div class = "box">
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" class="so" src={heart}/>
                    <Card.Body>
                        <Card.Title>Couples Retreat</Card.Title>
                        <Card.Text>
                        <h6>Add on a romantic indoor/outdoor picnic.</h6>
                        </Card.Text>
                    </Card.Body>
            </Card>
    <br></br>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" class="so" src={happyholidays} />
                    <Card.Body>
                        <Card.Title>Holiday Gathering</Card.Title>
                        <Card.Text>
                        <h6>Add on holiday decor and hors devours for your holiday gatherings.</h6>
                        </Card.Text>
                    </Card.Body>
            </Card>
    <br></br>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" class="so" src={happybirthday} />
                    <Card.Body>
                        <Card.Title>Birthday</Card.Title>
                            <Card.Text>
                            <h6>Add on a custom cake and/or champagne.</h6> 
                            </Card.Text>
                    </Card.Body>
            </Card>
    <br></br>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" class="so" src={happynewyear} />
                    <Card.Body>
                        <Card.Title>New Year Celebration</Card.Title>
                            <Card.Text>
                            <h6>Add on a champagne toast and fireworks.</h6>
                            </Card.Text>
                    </Card.Body>
            </Card>
    </div>
    </>
)};