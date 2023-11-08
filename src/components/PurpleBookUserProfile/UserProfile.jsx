import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./UserProfile.less";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import PurpleBookButtomNav from "../PurpleBookButtomNav/PurpleBookButtomNav";
import { useAuthState, firebaseSignOut } from "../../utilities/firebaseUtils";
import { useDbData } from "../../utilities/firebaseUtils";
import data2 from "./UserProfileTest.json";


const UserProfile = ({ setIsUserLoggedIn , user }) => {
  //const navigate = useNavigate();
  
  useEffect(() => {
    if (user !== undefined && user !== null) {
      setIsUserLoggedIn(true);
    }
  }, [user]);
  console.log(user)
  const userHistoryPath = user ? `/history/${user.displayName}` : null;
  //const userHistoryPath = user ? `/history/Adrian H` : null;
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
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isBookingDeleted, setBookingDeleted] = useState(false);

  const openModal = (booking) => {
    setSelectedBooking(booking);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedBooking(null);
    setModalIsOpen(false);
  };

  const handleDeleteBooking = (booking) => {
    // change to delete data from database
    data2.bookings = data2.bookings.filter(
      (currentBooking) => currentBooking.id !== booking.id
    );
    setBookingDeleted(true);
    setTimeout(() => {
      setBookingDeleted(false);
    }, 3000);
    closeModal();
  };
  const handleFirebaseLogout = () => {
    setIsUserLoggedIn(false);
    firebaseSignOut();
  };

  const handleBooking = (booking) => {
    openModal(booking);
  };

  const handleSendEmail = (booking) => {
    const subject = "Booking Details";
    const body = `Court: ${booking.courtName}%0ALocation: ${booking.location}%0ADate: ${booking.date}%0ATime: ${booking.time}`;

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    closeModal();
  };

  const handleSendSMS = (booking) => {
    //for text message sharing alert
    const message = `Court: ${booking.courtName}%0ALocation: ${booking.location}%0ADate: ${booking.date}%0ATime: ${booking.time}`;

    window.location.href = `sms:?&body=${message}`;
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
          <button onClick={handleFirebaseLogout}>Sign Out</button>
        </div>
        <h3>Upcoming Reservations</h3>
        <div className="upcoming-bookings">
          
          {selectedBooking && (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Booking Actions"
              className="ReactModal__Content"
            >
              <h2>How would you like to proceed?</h2>
              <div>
                <button onClick={() => handleSendEmail(selectedBooking)}>
                  Share via Email
                </button>
                <button onClick={() => handleSendSMS(selectedBooking)}>
                  Share via SMS
                </button>
                <button
                  onClick={() => {
                    handleDeleteBooking(selectedBooking);
                  }}
                >
                  Delete
                </button>
                <button onClick={closeModal}>Cancel</button>
              </div>
            </Modal>
          )}
           {currBookings ? (
            <ul>
              {currBookings.map((booking) => (
                <li key={booking.id}>
                  Court: <strong>{booking.courtName}</strong>
                  <br />
                  Location: <strong>{booking.location}</strong>
                  <br />
                  Date: <strong>{booking.date}</strong>
                  <br />
                  Time: <strong>{booking.time}</strong>
                  <br />
                  <div className="button-cont">
                    <button
                      className="handle-book"
                      onClick={() => handleBooking(booking)}
                    >
                      {" "}
                      Edit
                    </button>
                  </div>
                </li>
              ))}
            </ul>
             ) : (
              <p>No current Reservations</p>)}
          
        </div>
      </div>
      {isBookingDeleted && (
            <Alert severity="info">
              <AlertTitle>Success</AlertTitle>
              {`Booking has been deleted.`}
            </Alert>
          )}
      <PurpleBookButtomNav />
    </div>
  );
};

export default UserProfile;
