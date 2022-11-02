import React from 'react';
import Paymethod from '../../paymethod/paymethod';
import Userinfo from '../../reservation/userinfo/userinfo';
import styles from './gift.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Gift = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const linkgift = () =>{
        navigate('/giftResult');
    }
    console.log(location.state);
    const locationHref= location.state;
    
    return(
        <>
        <div className={styles.giftBox}>
            <div>
                <Userinfo/>
                <Paymethod/>
            </div>
            <div>
                <div className={styles.giftName}>
                    <img src={locationHref.name === "giftcard" ? locationHref.giftCard_img : null} alt="giftRoom" />
                    <h4>{locationHref.name === "giftcard" ? locationHref.giftcard_name : null}</h4>
                    <p>{locationHref.name === "giftcard" ? locationHref.giftCard_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','): null}원</p>
                </div>
                <label className={styles.agreeBox}><input type="checkbox" /> <span className={styles.agreeTxt}>주문정보 및 서비스 이용약관 동의</span>&nbsp;<span className={styles.blue}>(필수)</span></label>
                <button type='button' className={styles.reservationBtn} onClick={linkgift}>{locationHref.name === "giftcard" ? locationHref.giftCard_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','): null}원 결제하기</button>
                <p className={styles.notice}>발행일로부터 1년 이내 수신자에게 90% 환불 가능하며, 판매가 중단되거나 판매가 변경된 상품의 경우 기간연장이 불가하여 환불처리됩니다.</p>
            </div>
        </div>
        </>
    )
};

export default Gift;