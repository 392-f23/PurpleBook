import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./UserProfile.less";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import PurpleBookButtomNav from "../PurpleBookButtomNav/PurpleBookButtomNav";
import {  firebaseSignOut } from "../../utilities/firebaseUtils";
import { useDbData, useDbDelete } from "../../utilities/firebaseUtils";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';


const UserProfile = ({ setIsUserLoggedIn , user }) => {
  //const navigate = useNavigate();
  //const [deleteNode, deleteResult] = useDbDelete();
  
  useEffect(() => {
    if (user !== undefined && user !== null) {
      setIsUserLoggedIn(true);
    }
  }, [user]);
  
  const userHistoryPath = user ? `/history/${user.displayName}` : null;
  const userBookingPath = user ? `/history/${user.displayName}` : null;
 // const userHistoryPath = user ? `/history/Adrian Hoffer` : null;
  //const userBookingPath = user ? `/history/Adrian Hoffer/booking` : null;
  const [data, error] = useDbData(userHistoryPath);
  const [currBookings, setCurrBookings] = useState(null)
  
  useEffect(() => {
    if (data) {
     setCurrBookings(data.booking)
    }
    if (error) {
      console.error(error);
      console.log("no data")
    }
  }, [data, error]);
  const [isBookingDeleted, setBookingDeleted] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (booking) => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (isBookingDeleted) {
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
        setBookingDeleted(false);
      }, 3000);
    }
  }, [isBookingDeleted]);


  const handleDeleteBooking = (booking, id) => {
   
    setCurrBookings(currBookings.filter(
      (currentBooking) => currentBooking !== booking
    ));
    console.log(currBookings[1])
    openModal(booking)
    setBookingDeleted(true);
    setTimeout(() => {
      setBookingDeleted(false);
    }, 3000);
  };
  const handleFirebaseLogout = () => {
    setIsUserLoggedIn(false);
    firebaseSignOut();
  };

  const handleSendEmail = (booking) => {
    const subject = "Booking Details";
    const body = `Court: ${booking.courtName}%0ALocation: ${booking.location}%0ADate: ${booking.date}%0ATime: ${booking.time}`;

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    closeModal();
  };


  return (
    <div className="background-container">
      <div className="profile-container">
        
        <div className="user-info">
          <h2>{user.displayName}</h2>

          <div className="top-text">
            <p> {user.email}</p>
          </div>
          <Button onClick={handleFirebaseLogout} variant="outlined" color="error" endIcon={<LogoutIcon/>}>
        Logout
      </Button>
        </div>
        <h3>Upcoming Reservations:</h3>
        <div className="upcoming-bookings">
        
           {currBookings ? (
            <ul>
              {currBookings.map((booking, id) => (
                <li key={id}>
                  Court: <strong>{booking.courtName}</strong>
                  <br />
                  Location: <strong>{booking.location}</strong>
                  <br />
                  Date: <strong>{booking.date}</strong>
                  <br />
                  Time: <strong>{booking.time}</strong>
                  <br />
                  <div className="button-cont">
                    
                    <Stack direction="row" spacing={2}>
      <Button onClick={() => handleDeleteBooking(booking, id)} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button onClick={() => handleSendEmail(booking)} variant="contained" endIcon={<MailIcon />}>
        Send
      </Button>
    </Stack>
                  </div>
                </li>
              ))}
            </ul>
             ) : (
              <p>No current Reservations</p>)}
          
        </div>
      </div>
      <Modal  isOpen={isModalOpen}
            onRequestClose={closeModal}>
        <Alert severity="info">
          <AlertTitle>Success</AlertTitle>
          {`Booking has been deleted.`}
        </Alert>
      </Modal>
      <PurpleBookButtomNav />
    </div>
  );
};

export default UserProfile;