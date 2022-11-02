import React from 'react';
import styles from '../modal.module.css';

const CouponModal = () => {
  
    return (
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
    );
};

export default CouponModal;