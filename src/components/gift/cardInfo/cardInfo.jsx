import React from 'react';
import styles from './cardInfo.module.css';

const CardInfo = (props) => {

    return(
        <div className={styles.cardBox}>
            <div className={styles.sender}>
                <p>TO. 00님</p>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.cardImg}>
                    <img src='../img/roomImg/giftcard.png' alt='card' />
                </div>
                <div className={styles.cardTxt}>
                    <p className={styles.company}>BUY IN HOTEL</p>
                    <p className={styles.cardName}>기프트카드 0원권</p>
                    <p className={styles.cardPrice}>0원</p>
                </div>
            </div>
        </div>
    )
}

export default CardInfo;