import React from 'react';
import styles from '../modal.module.css';

const AllReviewModal = () => {
    return (
        <div className={styles.reviewImgBox}>
            <img className={styles.reviewImg} src="../../img/roomImg/room1.png" alt="roomImg" />
        </div>
    );
};

export default AllReviewModal;