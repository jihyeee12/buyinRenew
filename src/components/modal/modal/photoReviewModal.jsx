import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from '../modal';
import styles from '../modal.module.css';

const PhotoReviewModal = ({reviewImg, review, setPhotoOpen, setAllReview, allReview}) => {
    //const [allReview, setAllReview] = useState(false);
    console.log(reviewImg);
    console.log("review");
    const listClick = () => {
        // setPhotoOpen(false);
        setPhotoOpen(false);
        setAllReview(true);
    }
    
    return (
        <div className={styles.reviewBox}>
            <img className={styles.reviewImgs} src={reviewImg[0].review_img_url} alt="reviewPhoto" />
                <div className={styles.reviewInfo}>
                    <button type='button' className={styles.bestBtn}>BEST</button>
                    <p className={styles.reviewInfoTxt}>{reviewImg[0].review_writer_name}님</p>
                    <p className={styles.reviewInfoTxt}>{reviewImg[0].review_date}</p>
                    <p className={styles.reviewInfoTxt}>{reviewImg[0].room_name}</p>
                    <p className={styles.reviewTxt}>{reviewImg[0].review_text}</p>
                </div>
            <button type='button' className={styles.reviewListBtn} onClick={()=> listClick()}>목록보기</button>
            {allReview && <Modal type={"allReview"} review={review} setAllReview={() => setAllReview(!allReview)} />}
        </div>
    );
};

export default PhotoReviewModal;