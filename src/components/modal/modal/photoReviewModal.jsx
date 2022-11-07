import React, { useState } from 'react';
import Modal from '../modal';
import styles from '../modal.module.css';

const PhotoReviewModal = () => {
    const [allReview, setAllReview] = useState(false);

    return (
        <div className={styles.reviewBox}>
            <img className={styles.reviewImgs} src="../../img/roomImg/room1.png" alt="reviewPhoto" />
            <div className={styles.reviewInfo}>
                <button type='button' className={styles.bestBtn}>BEST</button>
                <p className={styles.reviewInfoTxt}>바이인호텔님</p>
                <p className={styles.reviewInfoTxt}>2022.01.01</p>
                <p className={styles.reviewInfoTxt}>스탠다드</p>
                <p className={styles.reviewTxt}>내부 깔금 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</p>
            </div>
            <button type='button' className={styles.reviewListBtn} onClick={()=> setAllReview(!allReview)}>목록보기</button>
            {allReview && <Modal type={"allReview"} setAllReview={() => setAllReview(!allReview)} />}
        </div>
    );
};

export default PhotoReviewModal;