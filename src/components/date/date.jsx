import React from 'react';
import { useState } from 'react';
import styles from './date.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import { useContext } from 'react';
import { MainContext } from './store';


const Date = () => {
    
    const {dateSet} = useContext(MainContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    console.log(startDate);

    const showDatePicker = () => {
        setOpenDatePicker(!openDatePicker);
    }
    const {onDateSetting} = useContext(MainContext);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        onDateSetting(start,end);
        if(start && end){
            showDatePicker();
        }
    }

    return(
    <div className={styles.dateBox}>
            <img src="/img/icon/dateIcon.png" alt="dateIcon" />
             <p className={styles.date}>
                {dateSet.start} - {dateSet.end}
             </p>
                <DatePicker
                    selected={startDate}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="yyyy.MM.dd"
                    className={styles.datepicker}
                    onChange={onChange}
                    locale={ko}
                    inline />
            <p className={styles.changeDate} onClick={showDatePicker}>변경</p>
        </div>
    )};

export default Date;