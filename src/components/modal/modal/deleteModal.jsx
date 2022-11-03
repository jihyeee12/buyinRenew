import React from 'react';
import styles from '../modal.module.css';

const DeleteModal = () => {
    return (
        <div>
            <p className={styles.reviewTitle}>리뷰를 삭제하시겠습니까?</p>
            <button type='button' className={styles.reviewBtn}>취소</button>
            <button type='button' className={styles.deleteBtn}>삭제</button>
        </div>
    );
};

export default DeleteModal;