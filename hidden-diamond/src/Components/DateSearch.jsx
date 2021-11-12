//start with RFCE
//Datepicker from React
import React, {useState} from 'react';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from "react-date-range"; //date picker requires and fns install npm i date-fns


//Using the datepicker from React
function DateSearch () {
//setting the initial state
    const [startDate, setStartDate] = useState (new Date());//New date defaults to the current day. Similar to postgres date. 
    const [endDate, setEndDate] = useState (new Date());
    
      const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:"selection",               
    };

//function for when you select the date to set the start date/end date to what you selected
//issue - start date selection woudln't work because I had a capital S.(30 min of time)
    function handleSelect (ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    
    return (
        <div className="dateSearch">
            <DateRangePicker ranges={[selectionRange]}onChange={handleSelect} />
            <h5>Number of guests </h5>
            <input min={0} defaultValue={2} type="number"/>
        </div>
    )
}
export default DateSearch
