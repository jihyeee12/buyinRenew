import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from '../modal';
import styles from '../modal.module.css';

const PhotoReviewModal = ({img_id}) => {
    
    const [allReview, setAllReview] = useState(false);

    const reviewData = [
        {id: 1, img_url: "../../img/roomImg/room1.png"},
        {id: 2, img_url: "../../img/roomImg/room2.png"},
        {id: 3, img_url: "../../img/roomImg/room3.png"},
        {id: 4, img_url: "../../img/roomImg/bigRoom.png"},
    ]


    return (
        <div className={styles.reviewBox}>
            {reviewData.filter(review => img_id === review.id).map(review => (
                <>
                <img className={styles.reviewImgs} src={review.img_url} alt="reviewPhoto" />
                <div className={styles.reviewInfo}>
                    <button type='button' className={styles.bestBtn}>BEST</button>
                    <p className={styles.reviewInfoTxt}>바이인호텔님</p>
                    <p className={styles.reviewInfoTxt}>2022.01.01</p>
                    <p className={styles.reviewInfoTxt}>스탠다드</p>
                    <p className={styles.reviewTxt}>내부 깔금 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</p>
                </div>
                </>
            ))}
            <button type='button' className={styles.reviewListBtn} onClick={()=> setAllReview(!allReview)}>목록보기</button>
            {allReview && <Modal type={"allReview"} setAllReview={() => setAllReview(!allReview)} />}
        </div>
    );
};

export default PhotoReviewModal;