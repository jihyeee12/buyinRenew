import React from 'react';
import styles from './reservationBox.module.css';

const ReservationBox = () => {
    return (
        <div className={styles.reservationInfo}>
            <p className={styles.reservationDate}>2022.01.01  예약</p>
            <div className={styles.reservationBox}>
                <div className={styles.reservationImg}>
                    <img src="../img/roomImg/bigRoom.png" alt="호텔사진" />
                </div>
                <div className={styles.reservationTxt}>
                    <p className={styles.reservationHotel}>이끌림호텔 충장점</p>
                    <p className={styles.reservationRoom}>스탠다드 외 1</p>
                </div>
                <div className={styles.reservationCheck}>
                    <table className={styles.reservationTable}>
                        <tbody>
                            <tr>
                                <td>체크인</td>
                                <td>2022.01.01(토) 18:00</td>
                            </tr>
                            <tr>
                                <td>체크아웃</td>
                                <td>2022.01.02(일) 12:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReservationBox;