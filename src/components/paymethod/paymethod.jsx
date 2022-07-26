import React from 'react';
import styles from './paymethod.module.css';

const Paymethod = () => (
    <>
        <div className={styles.paymethodBox}>
            <h4 className={styles.discountTitle}>결제수단</h4>
            <div className={styles.discount}>
                <p className={styles.discountType}>기프트카드</p>
                <div className={styles.selectBox}>
                    <input className={styles.selectTxt} type="text" value={"적용안함"} readOnly/>
                    <div className={styles.btnBox}>
                        <button className={styles.selectBtn} type='button'>선택</button>
                    </div>
                </div>
            </div>
            <div className={styles.paymethodBtn}>
                <button type='button' className={styles.bank}>계좌이체</button>
                <button type='button' className={styles.card}>신용카드 결제</button>
            </div>
        </div>
    </>     
    );

export default Paymethod;