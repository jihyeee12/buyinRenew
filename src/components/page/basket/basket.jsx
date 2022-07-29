import React from 'react';
import styles from './basket.module.css';

const Basket = () => (
    <>
        <div className="titleBar">
            <p>장바구니</p>
        </div>
        <div className="container">
            <div className={styles.hotelInfo}>
                <img className={styles.hotelImg} src="/img/roomImg/wishRoom.png" alt="hotelImg" />
                <h4>이끌림호텔 충장점</h4>
            </div>
            <div>
                <div className={styles.roomInfo}>
                    <img className={styles.roomImg} src="/img/roomImg/room1.png" alt="roomImg" />
                    <div>
                        <p>스탠다드</p>
                        <img src="/img/icon/deleteIcon.png" alt="deleteIcon" />
                        <p>예약금액</p>
                        <p>45,000원</p>
                    </div>
                </div>
                <table>
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
                <button type='button'>옵션변경 <img src="/img/icon/down.png" alt="downIcon" /></button>
            </div>
        </div>
    </>
    );

export default Basket;