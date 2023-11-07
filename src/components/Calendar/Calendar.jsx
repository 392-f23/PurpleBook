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

var userData ={

}

var bookHistory = {

}

var testData = {
    "sport":{
        "basketball": {
            "b1": {
                "address": "2379 Campus Dr, Evanston, IL 60208",
                "availiable": true,
                "bookHistory": ["2023-11-6 13:00-14:00","2023-11-6 14:00-15:00"],
                "timeslot" : {
                    "Monday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": true}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": true}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Tuesday":
                    [{"time": "8:00-9:00", "booked": true}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": true}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Wednesday": 
                    [],
                "Thursday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": true}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": true}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Friday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": true}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": true}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Saturday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": true}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Sunday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": true}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}]
                }
            },
            "b2": {
                "address": "some address",
                "availiable": true,
                "Monday":
                    [],
                "Tuesday":
                    [],
                "Wednesday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": true}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": true}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Thursday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": true}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Friday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": true}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Saturday":
                    [],
                "Sunday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": true}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}]
            }
        },
        "tennis": {
            "t1": {
                "address": "2379 Campus Dr, Evanston, IL 60208",
                "availiable": true,
                "Monday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": true}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": true}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Tuesday":
                    [{"time": "8:00-9:00", "booked": true}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": true}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Wednesday": 
                    [],
                "Thursday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": true}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": true}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Friday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": true}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": true}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Saturday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": true}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Sunday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": true}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}]
            },
            "t2": {
                "address": "some address",
                "availiable": true,
                "Monday":
                    [],
                "Tuesday":
                    [],
                "Wednesday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": true}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": true}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Thursday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": true}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Friday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": true}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Saturday":
                    [],
                "Sunday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": true}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}]
            }
        },
        "badminton": {
            "ba1": {
                "address": "2379 Campus Dr, Evanston, IL 60208",
                "availiable": true,
                "Monday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": true}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": true}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Tuesday":
                    [{"time": "8:00-9:00", "booked": true}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": true}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Wednesday": 
                    [],
                "Thursday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": true}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": true}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Friday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": true}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": true}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Saturday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": true}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Sunday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": true}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}]
            },
            "ba2": {
                "address": "some address",
                "availiable": true,
                "Monday":
                    [],
                "Tuesday":
                    [],
                "Wednesday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": true}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": true}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Thursday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": true}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Friday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": true}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": false}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}],
                "Saturday":
                    [],
                "Sunday":
                    [{"time": "8:00-9:00", "booked": false}, 
                    {"time": "9:00-10:00", "booked": false}, 
                    {"time": "10:00-11:00", "booked": false}, 
                    {"time": "11:00-12:00", "booked": false}, 
                    {"time": "12:00-13:00", "booked": false}, 
                    {"time": "13:00-14:00", "booked": false}, 
                    {"time": "14:00-15:00", "booked": false}, 
                    {"time": "15:00-16:00", "booked": false}, 
                    {"time": "16:00-17:00", "booked": false}, 
                    {"time": "17:00-18:00", "booked": false}, 
                    {"time": "18:00-19:00", "booked": false}, 
                    {"time": "19:00-20:00", "booked": true}, 
                    {"time": "20:00-21:00", "booked": false}, 
                    {"time": "21:00-22:00", "booked": false}]
            }
        }
    }
}



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
    const location = useLocation();
    const receivedData = location.state;
    const [selectedDay, setSelectedDay] = useState();
    

    const handleSelectDay = (eventKey, event) => {
        console.log(eventKey.day());
        setSelectedDay(eventKey);  
    };


    console.log(testData.sport.basketball.b1.bookHistory);
    
    return (
        <div>
            <PUDatePicker value={selectedDay} handleSelectDay={handleSelectDay} />
            {selectedDay === undefined ? <p>No data</p> : <Displaytime selectedDay={selectedDay} dayInfo={Object.entries(testData.sport.basketball.b1.timeslot)[(selectedDay.day() + 6) % 7]} bookHistory={testData.sport.basketball.b1.bookHistory} />}
            
        </div>
        
        );
  }

export default BasicDateCalendar;