import React from 'react';
import BookingCalendar from 'react-booking-calendar';



const bookings = [
    new Date(2021, 10, 1),
    new Date(2021, 10, 2),
    new Date(2021, 10, 3),
  ];
   
  const KBookingCalendar = () => (
    <BookingCalendar bookings={bookings} />
  );

  export default KBookingCalendar;