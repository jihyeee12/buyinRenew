import React from 'react';
import styles from './baskethotel.module.css';
import Options from '../reservation/options/options';
import { useState } from 'react';

const Baskethotel = ({date, shopbaskets}) => {
    const [showOption, setShowOption] = useState(false);
    const showClick = () => {
        setShowOption((prev) => !prev);
    }

    const data =[
        {roomid: 0}
    ]

    return(
    <>
    {shopbaskets.map(basket => (
        <div className={styles.basketBox} key={basket.shopbasket_id}>
            <div className={styles.roomInfo}>
                <img className={styles.roomImg} src={basket.room_img_url} alt="roomImg" />
                <div className={styles.roomTxt}>
                    <p className={styles.roomType}>{basket.room_name}<img className={styles.delete} src="/img/icon/deleteIcon.png" alt="deleteIcon" /></p>
                    <p className={styles.reservation}>예약금액</p>
                    <p className={styles.roomPrice}>{basket.reserve_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                </div>
            </div>
            <table className={styles.rangeTable}>
                <tbody>
                    <tr>
                        <td>체크인</td>
                        <td>{date.split(" ~ ")[0]}</td>
                    </tr>
                    <tr>
                        <td>체크아웃</td>
                        <td>{date.split(" ~ ")[1].split(",")[0]}</td>
                    </tr>
                </tbody>
            </table>
            {showOption? <div className={styles.options}>
                <Options basket={basket}/>
            </div>:null}
            
            <div className={styles.changeBtn}>
                <button type='button' key={data.roomid} className={styles.changeOptionBtn} onClick={showClick}>옵션변경 {showOption? <img src="/img/icon/up.png" alt="upIcon" /> :  <img src="/img/icon/down.png" alt="downIcon" />}</button>
            </div>
        </div>
    ))} 
    </>

    )
};

export default Baskethotel;