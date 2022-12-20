import React from 'react';
import { useState } from 'react';
import styles from './review.module.css';
import Modal from '../../../modal/modal';
import { Link, useNavigate } from 'react-router-dom';

const WrittenReview = ({review}) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
        <p className={styles.reviewCount}>작성리뷰 <span className={styles.reviewCount}>{review.length}개</span></p>
            {review.map(review => (
                <div className={styles.reviewBox}>
                    <table className={styles.reviewTitle}>
                        <tbody>
                            <tr>
                                <td>{review.review_date}</td>
                                <td>
                                    <Link className='link' to={`/writeReview/${review.reservation_id}`}><span key={review.review_id}>수정</span></Link>
                                    <span key={review.review_id} className={styles.deleteBtn} onClick={()=> setModalOpen(!modalOpen)}>삭제</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {modalOpen && <Modal type={"delete"} setModalOpen={() => setModalOpen(!modalOpen)} />}
                    <div className={styles.hotelInfoBox}>
                        <div>
                            <img src={review.lodgement_img_url} alt='호텔이미지' className={styles.hotelImg} />
                        </div>
                        <div className={styles.hotelInfo}>
                            <p>{review.lodgement_name}</p>
                            <p>{review.room_name}</p>
                        </div>
                    </div>
                    <p className={styles.reviewTxt}>{review.review_text}</p>
                    <div className={styles.reviewImgBox}>
                        {review.review_img_url && <img className={styles.reviewImg} src={review.review_img_url} alt="리뷰이미지" />}
                    </div>
                    <div className={styles.likeBox}>
                        <img src="../../../img/icon/likeBtn.png" alt="좋아요" />
                        <span className={styles.likeCount}>{review.like_num}</span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default WrittenReview;