import React from 'react';
import styles from './reservationInfo.module.css';

const ReservationInfo = ({room}) => {
    
    return(
        <div className={styles.hotelInfo}>
            <div className={styles.roomInfo}>
                <img className={styles.roomImg} src={room.room_img_url} alt="roomprice" />
                <div className={styles.roomName}>
                    <h4>{room.room_name}</h4>
                    <p>예약금액</p>
                    <p>{room.room_total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                </div>
            </div>
            <table className={styles.totalpriceTable}>
                <tbody>
                    <tr>
                        <td>체크인</td>
                        <td>{room.checkin_date}</td>
                    </tr>
                    <tr>
                        <td>체크아웃</td>
                        <td>{room.checkout_date}</td>
                    </tr>
                    <tr>
                        <td>객실옵션 </td>
                        <td className={styles.optionTxt}>{room.room_option.replaceAll("\n",", ")}</td>
                    </tr>
                    <tr>
                        <td>어메니티 옵션</td>
                        <td className={styles.optionTxt}>{room.room_amenity.replaceAll("\n",", ")}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default ReservationInfo;