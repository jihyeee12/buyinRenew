import React from 'react';
import Paymethod from '../../paymethod/paymethod';
import Userinfo from '../../userinfo/userinfo';
import styles from './gift.module.css';

const Gift = () => (
    <>
    <div className={styles.giftBox}>
        <div>
            <Userinfo/>
            <Paymethod/>
        </div>
        <div>
            <div className={styles.giftName}>
                <img src="/img/roomImg/giftRoom.png" alt="giftRoom" />
                <h4>바이룸_충장 이끌림호텔(스탠다드_숙박_주말)</h4>
                <p>30,000원</p>
            </div>
            <label className={styles.agreeBox}><input type="checkbox" /> <span className={styles.agreeTxt}>주문정보 및 서비스 이용약관 동의</span>&nbsp;<span className={styles.blue}>(필수)</span></label>
            <button type='button' className={styles.reservationBtn}>30,000원 결제하기</button>
            <p className={styles.notice}>발행일로부터 1년 이내 수신자에게 90% 환불 가능하며, 판매가 중단되거나 판매가 변경된 상품의 경우 기간연장이 불가하여 환불처리됩니다.</p>
        </div>
    </div>
    </>
    );

export default Gift;