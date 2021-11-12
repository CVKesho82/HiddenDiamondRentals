import React from 'react'
// import './Header.css'
import blacklogo from '../Images/blacklogo.png';


function Header() {
    return (
        <div className='header'>            
            <img className ="header_logo" src={blacklogo} alt="HDlogo" height="200px" width="200px"/>     
        </div>            
    )
};

export default Header
            
            