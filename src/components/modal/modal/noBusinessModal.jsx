import React from 'react';
import styles from '../modal.module.css';

const NoBusinessModal = ({closeModal}) => {
    return (
        <div className={styles.businessBox}>
            <p>기업회원가가 없는 객실입니다.</p>
            <p>예약을 진행하시겠습니까?</p>
            <div className={styles.businessBtns}>
                <button className={styles.businessCancel} type='button' onClick={closeModal}>취소</button>
                <button className={styles.businessOk} type='button'>확인</button>
            </div>
        </div>
    );
};

export default NoBusinessModal;