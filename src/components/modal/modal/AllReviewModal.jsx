import React from 'react';
import { useState } from 'react';
import Modal from '../modal';
import styles from '../modal.module.css';

const AllReviewModal = ({setAllReview, review}) => {
    
    console.log(review);
    const [photoOpen, setPhotoOpen] = useState(false);
    const [imgId, setImgId] = useState("");

    const reviewImgClick = (id) => {
        setPhotoOpen(!photoOpen);
        setImgId(id);
    }
    const reviewData = review.filter(img => img.review_id === imgId);
    
    return (
        <div className={styles.reviewImgBox}>
            {review.map(img => (
                <img className={styles.reviewImg} key={img.review_id} value={img.review_id} onClick={(id) => reviewImgClick(img.review_id)} src={img.review_img_url} alt="roomImg" />
            ))}
            {photoOpen && <Modal type={"photoReview"} reviewImg={reviewData} review={review} setPhotoOpen={() => setPhotoOpen(!photoOpen)} />}
        </div>
    );
};

export default AllReviewModal;