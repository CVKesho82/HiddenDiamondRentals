import React from 'react';
import { Link } from "react-router-dom";

const NavBar= () =>{
  return (
  <div>
    <li>
      <Link to="./Components/Home.jsx">Home</Link>
    </li>
    <li>
      <Link to="/">SpecialOffers</Link>
    </li>
    <li>
      <Link to="./Components/AboutUs.jsx">AboutUs</Link>
    </li>
    <li>
      <Link to="./Components/Testimonials.jsx">Testimonials</Link>
    </li>
  </div>
  );
}
export default NavBar;