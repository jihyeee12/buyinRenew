import React from 'react';
import styles from './roomCard.module.css';


    function RoomCard() {
        return(
            <li>
                <div className={styles.roomCard}>
                    <img className={styles.roomImg} src='/img/roomImg/roomCard.png' alt='roomImg' />
                    <img className={styles.wish} src='/img/icon/wish.png' alt='wish' />
                    <div className={styles.roomInfo}>
                        <p className={styles.HotelName}>하남 이끌림 비즈니스 호텔</p>
                        <p className={styles.Location}><img className={styles.wishIcon} src='/img/icon/location.png' alt='mapIcon'/> 광주여자대학교, 한국소방안전원</p>
                        <div className={styles.hotelPrice}>
                            <div className={styles.interestZone}>
                                <p className={styles.interest}>관심 <span className={styles.interestCount}>95</span></p>
                                <p className={styles.interest}>리뷰 <span className={styles.interestCount}>123</span></p>
                            </div>
                            <div className={styles.priceZone}>
                                <p className={styles.discounts}><span className={styles.discount}>33%</span><span className={styles.discountPrice}>30,000원</span></p>
                                <p className={styles.roomPrice}>대실 20,000원</p>
                                <p className={styles.discounts}><span className={styles.discount}>55%</span><span className={styles.discountPrice}>80,000원</span></p>
                                <p className={styles.roomPrice}>숙박 40,000원</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    };
    

export default RoomCard;