import React from 'react';
import styles from './date.module.css';
import { useState ,useContext } from 'react';
import { MainContext } from './store';
import Calendar from './calendar';


const Date = (props) => {
    const {dateSet} = useContext(MainContext);
    const [openDatePicker, setOpenDatePicker] = useState(false);

    const showDatePicker = () => {
        setOpenDatePicker(!openDatePicker);
    }

    return(
    <div className={styles.dateBox}>
            <img src="/img/icon/dateIcon.png" alt="dateIcon" />
             <p className={styles.date}>
                {dateSet.start && dateSet.start} ~ {dateSet.end && dateSet.end}
             </p>
             <div>
                <button className={styles.changeDate} onClick={showDatePicker}>변경</button>
                {/* <Calendar showDatePicker={showDatePicker}/> */}
             </div>
        </div>
    )};

export default Date;