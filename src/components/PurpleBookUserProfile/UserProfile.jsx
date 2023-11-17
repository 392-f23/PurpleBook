import React, { useState } from 'react';
import data from './UserProfileTest.json';

const UserProfile = ({ user, setIsUserLoggedIn }) => {
  // Initialize the bookings state with the user's bookings
  const [bookings, setBookings] = useState(data.user.bookings);

  // Function to handle logout
  const handleLogout = () => {
    setIsUserLoggedIn(false);
  };

  // Function to delete a booking
  const deleteBooking = (bookingId) => {
    // Filter out the booking that needs to be deleted
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
    setBookings(updatedBookings);
    // Here, you would also make an API call to delete the booking from the backend
  };

  return (
    <div>
      <h1>Welcome, {data.user.displayName}</h1>
      <button onClick={handleLogout}>Logout</button>
      <h2>Your Bookings</h2>
      <ul>
        {data.bookings.map(booking => (
          <li key={booking.id}>
            <p><strong>Court Name:</strong> {booking.courtName}</p>
            <p><strong>Location:</strong> {booking.location}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <button onClick={() => deleteBooking(booking.id)}>Delete Booking</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
