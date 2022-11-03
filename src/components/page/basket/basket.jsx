import React from 'react';
import Baskethotel from '../../baskethotel/baskethotel';
import styles from './basket.module.css';
import { useNavigate } from 'react-router-dom';

const Basket = () => {
    const navigate = useNavigate();

    const linkpay = () => {
        navigate('/payment');
    }
console.log("dd");
    return(
        <>
            <div className="titleBar">
                <p>장바구니</p>
            </div>
            <div className="container">
                <div className={styles.hotelInfo}>
                    <img className={styles.hotelImg} src="/img/roomImg/wishRoom.png" alt="hotelImg" />
                    <h4 className={styles.hotelName}>이끌림호텔 충장점</h4>
                </div>
                <Baskethotel/>
                <div className={styles.payBtns}>
                    <button type='button' className={styles.payBtn} onClick={linkpay}>1,000원 결제하기</button>
                </div>
            </div>
        </>
    )
};

export default Basket;