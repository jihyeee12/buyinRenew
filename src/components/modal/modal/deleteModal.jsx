import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Delete from 'service/api/url/Delete';
import styles from '../modal.module.css';

const DeleteModal = ({reviewId, closeModal , setDeleteState }) => {
    console.log(reviewId)
    console.log(setDeleteState)
    const [error, setError] = useState(null);
    
    const deleteClick = () => {
        const fetchDeleteReview = async () => {
        Delete.deleteReview(reviewId)
            .then(function (response) {
                console.log(response);
                closeModal(false);
                setDeleteState();
            })
            .catch(error => {
                setError(error);
                console.log(error);
            })
            };
            fetchDeleteReview();
    }
    
    if (error) return <div>에러가 발생했습니다</div>;
    

    return (
        <div>
            <p className={styles.reviewTitle}>리뷰를 삭제하시겠습니까?</p>
            <button type='button' className={styles.reviewBtn} onClick={() => closeModal(false)}>취소</button>
            <button type='button' className={styles.deleteBtn} onClick={deleteClick}>삭제</button>
        </div>
    );
};

export default DeleteModal;