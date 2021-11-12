import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'; 
import DateSearch from './DateSearch';


function Welcome () {
    //Setting the state of the search button using hooks
    const [showSearch,setShowSearch] =useState(false); 
    return (
        <div className='Welcome'>
  
                <div className='welcome_search'>
                
                    <Button onClick={() => setShowSearch(!showSearch)} //setting the search to the opposite value - true or false
                    className='search_Button'>Pick Your Travel Dates</Button>
                    {showSearch && <DateSearch/>}
 
                </div>
                <div className='welcome_info'>
                        <p>YOUR ATLANTA HOME AWAY FROM HOME</p>
            
                </div>                  
        </div>
    ) 
}

export default Welcome