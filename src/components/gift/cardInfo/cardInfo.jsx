import React from 'react';
import styles from './cardInfo.module.css';

const CardInfo = ({cardInfo}) => {
    
    return(
        <div className={styles.cardBox}>
            <div className={styles.sender}>
                <p>{cardInfo.gift_status === "send" ? "To." + cardInfo.gift_receiver : "FROM. "+ cardInfo.gift_sender }님</p>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.cardImg}>
                    <img className={styles.cardImg} src={cardInfo.gift_img} alt='card' />
                </div>
                <div className={styles.cardTxt}>
                    <p className={styles.company}>BUY IN HOTEL</p>
                    <p className={styles.cardName}>{cardInfo.gift_name}</p>
                    <p className={styles.cardPrice}>{cardInfo.gift_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                </div>
            </div>
        </div>
    )
}

export default CardInfo;