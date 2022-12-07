import React from 'react';
import styles from './timeTable.module.css';
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

const TimeTable = () => {
    const [sequence, setSequence] = useState(true);
    const [dateList, setDateList] = useState([]);

    const times = [
        {id: 0, time: "11:00"},
        {id: 1, time: "11:30"},
        {id: 2, time: "12:00"},
        {id: 3, time: "12:30"},
        {id: 4, time: "13:00"},
        {id: 5, time: "13:30"},
        {id: 6, time: "14:00"},
        {id: 7, time: "14:30"},
        {id: 8, time: "15:00"},
        {id: 9, time: "15:30"},
        {id: 10, time: "16:00"},
        {id: 11, time: "16:30"},
        {id: 12, time: "17:00"},
        {id: 13, time: "17:30"},
        {id: 14, time: "18:00"},  
        {id: 15, time: "18:30"},
        {id: 16, time: "19:00"},
        {id: 17, time: "19:30"},
        {id: 18, time: "20:00"},
        {id: 19, time: "20:30"},
        {id: 20, time: "21:00"},
        {id: 21, time: "21:30"},
        {id: 20, time: "22:00"},
    ]

    const handleClickidBtn = (time) => {
        setDateList((arr) => {
        let newArr = [];
        arr.map((item) => newArr.push(item));

        if (newArr.includes(time)) {
        newArr.splice(newArr.indexOf(time), 1);
        } else {
            newArr.push(time);
        }
        console.log(dateList);
        return newArr;
        });
    };

    const timeClick = (time) => {
        handleClickidBtn(time);
        if(sequence === true){
            const limitHours = parseInt(dateList[0].split(":")[0]) + parseInt(4) + ":" + dateList[0].split(":")[1];
            times.forEach(time => {
                if(limitHours < time){
                    
                }
                if(dateList[0] > time){
                    
                }
            });
            console.log(limitHours)
            setSequence(false);
        } else if(sequence === false){

            setSequence(true);
        }
    }

    return (
        <div>
            <ul className={styles.timeTable}>
                {times.map((time ,index) => (
                    <li key={index} className={[styles.timeBtn , (dateList.includes(time.time) && styles.checkBtn)].join(" ")} value={time.time} onClick={() => timeClick(time.time)}>{time.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default TimeTable;