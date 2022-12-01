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
            onChange={onChange}
            locale={ko}
            inline />
    );
};

export default Calendar;