import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './roomprice.module.css';

const Roomprice = props => {
    const navigate = useNavigate();
    const linkRoom = () =>{
        navigate('/rooms')
    }

    return(
        <>
        <div className={styles.roomPriceInfo} onClick={linkRoom}>
            <div className={styles.roomInfo}>
                <img src="/img/roomImg/roomPrice.png" alt="roomprice" />
                <div className={styles.roomName}>
                    <h4>스탠다드</h4>
                    <p>기준 2명/ 최대 2명</p>
                    <p>넷플릭스 이용가능</p>
                </div>
            </div>
            <div className={styles.rent}>
                <p className={styles.discount}><span className={styles.percent}>50%</span><span className={styles.listPrice}>40,000원</span></p>
                <div className={styles.kinds}>
                    <p className={styles.typeName}>대실<span className={styles.availTime}>최대 3시간 이용가능</span></p>
                    <p className={styles.salePrice}>20,000원</p>
                </div>
            </div>
            <div className={styles.lodge}>
                <p className={styles.discount}><span className={styles.percent}>50%</span><span className={styles.listPrice}>40,000원</span></p>
                <div className={styles.kinds}>
                    <p className={styles.typeName}>숙박<span className={styles.availTime}>18:00부터 12:00까지</span></p>
                    <p className={styles.salePrice}>35,000원</p>
                </div>
            </div>
        </div>
        </>
    )
};

export default Roomprice;