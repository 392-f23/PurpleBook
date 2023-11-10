import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from "dayjs";
import { useState } from "react";
import data from "../../utilities/temp.json";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import {useDbUpdate, useAuthState } from '../../utilities/firebaseUtils.js'
import './Displaytime.less'


const ButtonBar = ({ message, disabled }) => {
  const navigate = useNavigate();
  return (
    <div className="bar">
      <button type="button" className="btn btn-outline-dark mx-auto  me-2" onClick={() => navigate(-1)}>
        Cancel
      </button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>
        Submit
      </button>
      <span className="p-2">{message}</span>
    </div>
  );
};


const Displaytime = (props) => {
  const { selectedDay,receivedData, dayInfo, bookHistory,user } = props;
  console.log(bookHistory);
  const id = useParams();
  const courtName = id.courtId;
  const bookHistoryA = data.history;
  const navigate = useNavigate();
  
  // const [user] = useAuthState();
  
  console.log(id);

  const [update, result] = useDbUpdate(`/history/${user.displayName}`);
  
  const queryUserHistory = () => {
    // console.log(bookHistory[0].split(' ')[0]);
    const bookings = bookHistory[user.displayName];
    if(bookings === undefined){
      return null;
    }
    console.log(bookings);
    return bookings;
  };
  
  const currentUserHist = queryUserHistory();

  console.log(currentUserHist);
  var b = [];
  if(currentUserHist !== null){
    b = currentUserHist.booking;
  }
  const [bookings, setBooktings] = useState(b);

  const toggleBookingsSelected = (item) => {
    console.log(bookings);
    console.log(bookings.some(bookingData =>
      {
        console.log(bookingData.courtName === item.courtName &&
          bookingData.date === item.date &&
          bookingData.time === item.time)
        return bookingData.courtName === item.courtName &&
        bookingData.date === item.date &&
        bookingData.time === item.time
      }
    ));

    const newBookings = bookings.some(bookingData =>
      {
        return bookingData.courtName === item.courtName &&
        bookingData.date === item.date &&
        bookingData.time === item.time
      }
    )
      ? bookings.filter((x) => {console.log(x.time === item.time && x.date === item.date && item.courtName === x.courtName); return !(x.time === item.time && x.date === item.date && item.courtName === x.courtName)})
      : [...bookings, item];
    console.log(newBookings);
    setBooktings(
      newBookings
    );
  };
  const queryBookHistory = (selectedDay, bookHistory) => {
    // console.log(bookHistory[0].split(' ')[0]);
    const bookingsTemp = Object.keys(bookHistory).map(user => {
      return bookHistory[user].booking;
    }).flat();
    console.log(bookingsTemp);
    const days = Object.entries(bookingsTemp)
      .filter((item) => {return item[1].courtName == courtName && selectedDay.isSame(item[1].date, 'day')});
    // console.log(days.map((item) => item[1].time));
    return days.map((item) => item[1].time);
  };

  const currentHistoryy = queryBookHistory(selectedDay, bookHistory);

  const handleClick = (time) => {
    if (bookings.some(bookingData =>
      bookingData.courtName === id.courtId &&
      bookingData.date === selectedDay.format("YYYY-MM-DD") &&
      bookingData.time === time
    )) {
      alert(`You have unselected: ${time}`);
    } else {
      if(currentHistoryy.includes(time)){
        alert(`The slot is reserved by others`);
      }
      alert(`You have selected: ${time}`);
    }
    // console.log(selectedDay.format("YYYY-MM-DD") + " " + time);
    const bookingData = {
      courtName : id.courtId,
      date : selectedDay.format("YYYY-MM-DD"),
      time : time,
      location : null
    }
    // console.log(bookingData);
    toggleBookingsSelected(bookingData);
    console.log(bookings);
  };


  const submit = (e) => {
    // console.log("Wrong Place");
    e.preventDefault();
    const formData = {
      name: user.displayName,
      email: user.email,
      booking: bookings
    };
    console.log(formData);
    update(formData);

  };

  const isAvaliable = (time) => {
    console.log(time);
    if(!currentHistoryy.includes(time)){
      if(bookings.some(bookingData =>
        bookingData.courtName === id.courtId &&
        bookingData.date === selectedDay.format("YYYY-MM-DD") &&
        bookingData.time === time
      )){
        return false;
      }
      return true;
    }else{
        if(!bookings.some(bookingData =>
          bookingData.courtName === id.courtId &&
          bookingData.date === selectedDay.format("YYYY-MM-DD") &&
          bookingData.time === time
        )){
          return true;
        }
        return false;
    }
    return false;
  }

  const reservedByCurrentUser = ({time}) => {

    return bookings.some(bookingData =>
      bookingData.courtName === id.courtId &&
      bookingData.date === selectedDay.format("YYYY-MM-DD") &&
      bookingData.time === time
    );
  }

  return (
    <div>
      <ListGroup>
        {dayInfo.length === 0 ? (
          <p>This court is not available on {selectedDay.format()}. </p>
        ) : (
          <>
            {/* {console.log(queryBookHistory(selectedDay, bookHistory))} */}
            <p>Here are the available times on {selectedDay.format()}:</p>
            {Object.entries(dayInfo)
              .filter(
                (item) =>
                  !item[1].booked 
              )
              .map((item, index) => {
                return <ListGroup.Item
                  key={index}
                  action
                  onClick={() => handleClick(item[1].time)}
                  className={isAvaliable(item[1].time) ? "" : "selected"}
                >
                  {item[1].time}
                </ListGroup.Item>
              }
                
              )}
          </>
        )}
      </ListGroup>
      <form onSubmit={submit} noValidate className={'centered'}>
      
      <ButtonBar/>
      </form>
      
    </div>
  );
};

export default Displaytime;
