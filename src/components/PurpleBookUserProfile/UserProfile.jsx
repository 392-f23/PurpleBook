import React, { useState } from "react";
import Modal from "react-modal";

const UpcomingBookings = ({ user, data }) => {
  const name = user.displayName;
  const userBookings = data.bookings.filter((booking) => booking.name === name);
  return userBookings;
};

const UserProfile = ({ data, profile }) => {
  const user = profile.user;
  const upcomingBookings = UpcomingBookings(user, data);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);

  const openModal = (booking, action) => {
    setSelectedBooking(booking);
    setSelectedAction(action);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDeleteBooking = (booking) => {
    data.bookings = data.bookings.filter(
      (currentBooking) => currentBooking.id !== booking.id
    );
    alert(`Booking with ID ${booking.name} has been deleted.`);
  };

  const handleShareBooking = (booking) => {
    openModal(booking, "share");
    alert(`Booking ${booking.name} has been shared.`);
  };

  const handleSendEmail = (booking) => {
    const subject = "Booking Details";
    const body = `Court: ${booking.courtName}%0ALocation: ${booking.location}%0ADate: ${booking.date}%0ATime: ${booking.time}`;

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    alert(`Booking ${booking.courtName} details have been shared via email.`);
    closeModal();
  };

  const handleSendSMS = (booking) => {
    //for text message sharing alert
    const message = `Court: ${booking.courtName}%0ALocation: ${booking.location}%0ADate: ${booking.date}%0ATime: ${booking.time}`;

    window.location.href = `sms:?&body=${message}`;
    alert(`Booking ${booking.courtName} details have been shared via SMS.`);
    closeModal();
  };

  return (
    <div className="profile-container">
      <div className="user-info">
        <h2>User Profile</h2>
        <div>
          <strong>Name: {user.name}</strong>
        </div>
        <div>
          <strong>Email: {user.email}</strong>
        </div>
        {/* more information?? */}
      </div>
      <div className="upcoming-bookings">
        <h2>Upcoming Reservations</h2>
        {selectedBooking && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Booking Actions"
          >
            <h2>How would you like to proceed?</h2>
            {selectedAction === "share" && (
              <div>
                <button onClick={() => handleSendEmail(selectedBooking)}>
                  Share via Email
                </button>
                <button onClick={() => handleSendSMS(selectedBooking)}>
                  Share via SMS
                </button>
              </div>
            )}
            {selectedAction === "delete" && (
              <div>
                <button onClick={() => handleDeleteBooking(selectedBooking)}>
                  Delete
                </button>
              </div>
            )}
          </Modal>
        )}
        {upcomingBookings.length > 0 ? (
          <ul>
            {upcomingBookings.map((booking) => (
              <li key={booking.id}>
                <strong>Court: {booking.courtName}</strong>
                <strong>Location: {booking.location}</strong>
                <br />
                <strong>Date: {booking.date}</strong>
                <br />
                <strong>Time: {booking.time}</strong>
                <br />
                <button onClick={() => handleShareBooking(booking)}>
                  Share
                </button>
                {selectedBooking && selectedBooking.id === booking.id && (
                  <div>
                    {selectedBooking ? (
                      <div>
                        <button
                          onClick={() => handleSendEmail(selectedBooking)}
                        >
                          Share via Email
                        </button>
                        <button onClick={() => handleSendSMS(selectedBooking)}>
                          Share via SMS
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteBooking(selectedBooking.id)
                          }
                        >
                          Delete
                        </button>
                      </div>
                    ) : null}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming reservations...</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
