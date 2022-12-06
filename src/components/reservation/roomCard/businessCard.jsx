import React from 'react';
import styles from './roomCard.module.css';

const BusinessCard = () => {
    return (
        <div className={styles.businessBox}>
            <p className={styles.businessTitle}>기업회원가</p>
            <div className={styles.businessPriceBox}>
                <p><span className={styles.businessRate}>50% </span><span className={styles.businessPrice}>80,000원</span></p>
                <p className={styles.businessTxt}>기업숙박 <span className={styles.businessSalePrice}>40,000</span>원</p>
            </div>
        </div>
    );
};

export default BusinessCard;