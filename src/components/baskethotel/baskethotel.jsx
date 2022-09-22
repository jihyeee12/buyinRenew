import React from 'react';
import styles from './baskethotel.module.css';
import Options from '../reservation/options/options';

const Baskethotel = () => (
    <>
        <div className={styles.basketBox}>
            <div className={styles.roomInfo}>
                <img className={styles.roomImg} src="/img/roomImg/room1.png" alt="roomImg" />
                <div className={styles.roomTxt}>
                    <p className={styles.roomType}>스탠다드<img className={styles.delete} src="/img/icon/deleteIcon.png" alt="deleteIcon" /></p>
                    <p className={styles.reservation}>예약금액</p>
                    <p className={styles.roomPrice}>45,000원</p>
                </div>
            </div>
            <table className={styles.rangeTable}>
                <tbody>
                    <tr>
                        <td>체크인</td>
                        <td>2022.01.01 (토) 18:00</td>
                    </tr>
                    <tr>
                        <td>체크아웃</td>
                        <td>2022.01.02(일) 12:00</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.options}>
                <Options/>
            </div>
            <div className={styles.changeBtn}>
                <button type='button' className={styles.changeOptionBtn}>옵션변경 <img src="/img/icon/down.png" alt="downIcon" /></button>
            </div>
        </div>
    </>
    );

export default Baskethotel;