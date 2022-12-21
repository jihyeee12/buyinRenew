import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Delete from '../../../service/api/url/Delete';
import styles from '../modal.module.css';

const DeleteModal = ({reviewId, closeModal}) => {
    console.log(reviewId)

    // const [deleteReview, setDeleteReview] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    
    // const deleteClick = () => {
    //     const fetchDeleteReview = async () => {
    
    //         Delete.deleteReview(reviewId)
    //         .then(function (response) {
    //             setDeleteReview(response);
    //         })
    //         .catch(error => {
    //             setError(error);
    //         })
    //         setLoading(false);
    //         };
    //         fetchDeleteReview();
    // }
    
    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!deleteReview) return null;
    
    // console.log(deleteReview);



    return (
        <div>
            <p className={styles.reviewTitle}>리뷰를 삭제하시겠습니까?</p>
            <button type='button' className={styles.reviewBtn} onClick={() => closeModal(false)}>취소</button>
            <button type='button' className={styles.deleteBtn}>삭제</button>
        </div>
    );
};

export default DeleteModal;