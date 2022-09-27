import React from 'react';
import styles from './reservationInfo.module.css';

const ReservationInfo = (props) => {

    return(
        <div className={styles.hotelInfo}>
            <div className={styles.roomInfo}>
                <img src="/img/roomImg/roomPrice.png" alt="roomprice" />
                <div className={styles.roomName}>
                    <h4>스탠다드</h4>
                    <p>예약금액</p>
                    <p>0원</p>
                </div>
            </div>
            <table className={styles.totalpriceTable}>
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
                        <td>객실옵션 (+0)</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>어메니티 옵션(+0)</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default ReservationInfo;