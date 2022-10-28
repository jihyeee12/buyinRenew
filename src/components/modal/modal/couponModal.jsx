import React from 'react';
import styles from '../modal.module.css';

const CouponModal = ({setcouponOpen}) => {
    const closeModal = () => {
        setcouponOpen(false);
    }

    return (
        <div>
            <div className={styles.Modal}>
                <div className={styles.modalBody}>
                    <button className={styles.modalCloseBtn} onClick={closeModal}>
                        <img src='../../../img/icon/modalClose.png' />
                    </button>
                    <div className={styles.couponList}>
                        <div className={styles.couponBox}>
                            <div className={styles.couponName}>
                                <h4 className={styles.couponPrice}>3,000원 쿠폰</h4>
                                <ul className={styles.couponCondition}>
                                    <li>30,000원 이상 결제 시</li>
                                    <li>발급 당일 사용 가능</li>
                                </ul>
                            </div>
                            <button type='button' className={styles.couponBtn}>쿠폰받기</button>
                        </div>
                    </div>
               </div>      
            </div>
        </div>
    );
};

export default CouponModal;