import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AboutUs from './AboutUs';
import SpecialOffers from './SpecialOffers';
import Testimonials from './Testimonials';
import Bio from './Bio';

export default function NavBar(){
  return(
  <>
  <Router>
        <div class= "nav">
                <br />       
          <nav class="navbar">
            <Link to='/'>Home</Link>
            <Link to='/AboutUs'>AboutUs</Link>
            <Link to='/SpecialOffers'>Special Offers</Link>
            <Link to='/Testimonials'>Testimonials</Link>
            <Link to='/Bio'>Developer Bio</Link>
          </nav>
        </div> 
            
        <Switch>
        <Route exact path='/'>
          <Home/></Route>
          <Route path ="/AboutUs"><AboutUs/></Route>
          <Route path ="/SpecialOffers"><SpecialOffers/></Route>
          <Route path ="/Testimonials"><Testimonials/></Route>
          <Route path="/Bio"><Bio/></Route>
          <Route path="*"><Redirect to='/' /></Route>
        </Switch>
      </Router>

  </>
  )};