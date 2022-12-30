import React from 'react';
import { useState ,useContext } from 'react';
import styles from './date.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import { MainContext } from './store';

const Calendar = ({showDatePicker}) => {
    const {onDateSetting} = useContext(MainContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const getDayName = (date) => {
        return date.toLocaleDateString('ko-KR', {
        weekday: 'long',
        }).substr(0, 1);
    }
    
    // 날짜 비교시 년 월 일까지만 비교하게끔
    const createDate = (date) => {
        return new Date(new Date(date.getFullYear()
        , date.getMonth()
        , date.getDate()
        , 0
        , 0
        , 0));
    }
    
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        onDateSetting(start,end);
        
        if(start && end){
            showDatePicker();
        }
    }
    return (
        <DatePicker
            selected={startDate}
            selectsRange
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy.MM.dd" 
            className={styles.datepicker}
            onChange={() => onChange()}
            locale={ko}
            dayClassName={(date) => 
                getDayName(createDate(date)) === '토' ? styles.saturDay :
                getDayName(createDate(date)) === '일' ? styles.sunDay : ""}
            inline />
    );
};

export default Calendar;