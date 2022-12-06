import React from 'react';
import styles from './businessBox.module.css';

const BusinessBox = () => {
    return (
        <div className={styles.businessBox}>
            <div>
                <p className={styles.businessTitle}>기업숙박</p>
                <p className={styles.businessTime}>18:00부터</p>
            </div>
            <div className={styles.right}>
                <p><span className={styles.businessRate}>50%</span><span className={styles.businessListPrice}>70,000원</span></p>
                <p className={styles.businessSalePrcie}><span className={styles.hotelPrice}>35,000</span>원</p>
            </div>
        </div>
    );
};

export default BusinessBox;