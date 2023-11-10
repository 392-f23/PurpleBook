import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Displaytime from '../Displaytime/Displaytime';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Dayjs } from 'dayjs';
import * as dayjs from 'dayjs';
import { useDbData,useAuthState } from '../../utilities/firebaseUtils';
import PurpleBookButtomNav from '../PurpleBookButtomNav/PurpleBookButtomNav'
import './Calendar.less'
// var bookHistory = {
//     "bookHistory": ["2023-11-6 13:00-14:00","2023-11-6 14:00-15:00"]
// }



const projectWeekdayIndex = ({weekday}) => {
    // console.log(weekday);
    
    if (weekday === undefined) return 0;
    console.log((weekday.day() + 6) % 7);
    return (weekday.day() + 6) % 7;
}

const PUDatePicker = ({value, handleSelectDay}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="Basic date picker" disablePast value={value} onChange={handleSelectDay}/>
    </LocalizationProvider>
  );
}


const BasicDateCalendar = () => {
    // return (
    //   <LocalizationProvider dateAdapter={AdapterDayjs}>
    //     <DatePicker label="Basic date picker" />
    //   </LocalizationProvider>
    // );
    const [bookHistory, error] = useDbData('/history');
    console.log(bookHistory);
    const location = useLocation();
    const receivedData = location.state;
    const [user] = useAuthState();
    console.log(user);
    var data = [receivedData.Sunday,receivedData.Monday, receivedData.Tuesday, receivedData.Wednesday, receivedData.Thursday, receivedData.Friday, receivedData.Saturday];
    const [selectedDay, setSelectedDay] = useState();
    

    const handleSelectDay = (eventKey, event) => {
        console.log(eventKey.day());
        setSelectedDay(eventKey);  
        // console.log(data[eventKey.day()]);
    };

    
    return (
        <div className={'background-container'}>
            <h1 style={{marginTop: '20px', fontFamily: "Playpen Sans, cursive"}}>Pick a Time</h1>
            <div className='calendar'>
            <PUDatePicker value={selectedDay} handleSelectDay={handleSelectDay} />
            
            {selectedDay === undefined || bookHistory === undefined ? <p>No data</p> : <Displaytime selectedDay={selectedDay} receivedData ={receivedData} dayInfo={data[selectedDay.day()]} bookHistory={bookHistory} user={user}/>}
            <PurpleBookButtomNav/>
            </div>
            
        </div>
        
        );
  }

export default BasicDateCalendar;