import React from 'react';
import Options from '../../options/options';
import styles from './roomopion.module.css';

const Roomoption = () => (
        <>
        <div className={styles.roomoption}>
            <div>
                <Options/>
            </div>
            <div>
                <div className={styles.reservationInfo}>
                    <div className={styles.roomInfo}>
                        <img src="/img/roomImg/roomPrice.png" alt="roomprice" />
                        <div className={styles.roomName}>
                            <h4>스탠다드</h4>
                            <p>기준 2명/ 최대 2명</p>
                            <p>넷플릭스 이용가능</p>
                        </div>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>체크인</td>
                                <td>2022.01.01(토) 18:00</td>
                            </tr>
                            <tr>
                                <td>체크아웃</td>
                                <td>2022.01.02(일) 12:00</td>
                            </tr>
                            <tr>
                                <td>총 예약금액</td>
                                <td>45,000원</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        </>
    );

export default Roomoption;