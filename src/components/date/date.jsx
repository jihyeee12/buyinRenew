import React from 'react';
import styles from './date.module.css';

const Date = () => (
        <>
        <div className={styles.dateBox}>
            <img src="/img/icon/dateIcon.png" alt="dateIcon" />
            <p className={styles.date}>01.01(토) - 01.02(일), 1박</p>
            <p className={styles.changeDate}>변경</p>
        </div>
        </>
    );

export default Date;