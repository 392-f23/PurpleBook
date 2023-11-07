import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from "dayjs";
import { useState } from "react";

const Displaytime = (props) => {
  const { selectedDay, dayInfo, bookHistory } = props;
  const [bookings, setBooktings] = useState([]);

  const toggleBookingsSelected = (item) => {
    return setBooktings(
      bookings.includes(item)
        ? bookings.filter((x) => x !== item)
        : [...bookings, item]
    );
  };

  const handleClick = (time) => {
    if (bookings.includes(selectedDay.format("YYYY-MM-DD") + " " + time)) {
      alert(`You have unselected: ${time}`);
    } else {
      alert(`You have selected: ${time}`);
    }
    // console.log(selectedDay.format("YYYY-MM-DD") + " " + time);
    toggleBookingsSelected(selectedDay.format("YYYY-MM-DD") + " " + time);
    console.log(bookings);
  };

  const queryBookHistory = (selectedDay, bookHistory) => {
    // console.log(bookHistory[0].split(' ')[0]);

    const days = bookHistory
      .filter((day) => selectedDay.isSame(day.split(" ")[0], "day"))
      .map((slot) => slot.split(" ")[1]);
    return days;
  };

  return (
    <div>
      <ListGroup>
        {dayInfo.length === 0 ? (
          <p>This court is not available on {selectedDay.format()}. </p>
        ) : (
          <>
            {/* {console.log(queryBookHistory(selectedDay, bookHistory))} */}
            <p>Here are the available times on {selectedDay.format()}:</p>
            {Object.entries(dayInfo[1])
              .filter(
                (item) =>
                  !item[1].booked &&
                  !queryBookHistory(selectedDay, bookHistory).includes(
                    item[1].time
                  )
              )
              .map((item, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  onClick={() => handleClick(item[1].time)}
                >
                  {item[1].time}
                </ListGroup.Item>
              ))}
          </>
        )}
      </ListGroup>
    </div>
  );
};

export default Displaytime;
