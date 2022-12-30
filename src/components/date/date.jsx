import React from 'react';
import styles from './date.module.css';
import { useState ,useContext } from 'react';
import { MainContext } from './store';
import Calendar from './calendar';
import dayjs from 'dayjs';


const DateInfo = ({period}) => {
    const {dateSet} = useContext(MainContext);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const periodCheckin = period.checkin;
    const periodCheckOut = period.checkout;
    
    let checkin = periodCheckin;
        if(periodCheckin === null){
            checkin = dayjs(today).format("YYYY.MM.DD");
        }
    
    let checkout = periodCheckOut;
    if(periodCheckOut === null){
        checkout = dayjs(tomorrow).format("YYYY.MM.DD");
    }
    const nightDays = (dayjs(checkout).$d-dayjs(checkin).$d)/(1000*60*60*24);
    
    const showDatePicker = () => {
        setOpenDatePicker(!openDatePicker);
    }
    

    return(
    <div className={styles.dateBox}>
        <img src="/img/icon/dateIcon.png" alt="dateIcon" />
        <p className={styles.date}>
            {checkin} - {checkout} , {nightDays}박
        </p>
        <div className={styles.changeBox}>
            <button className={styles.changeDate} onClick={showDatePicker}>변경</button>
            {openDatePicker && <div className={styles.changePicker}>
            <Calendar showDatePicker={showDatePicker}/>
        </div>}
        </div>
        
    </div>
    )};

export default DateInfo;