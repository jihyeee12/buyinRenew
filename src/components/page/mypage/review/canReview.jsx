import React from 'react';
import styles from './review.module.css';
import { Link, useNavigate } from 'react-router-dom';

const CanReview = ({review}) => {
    return (
        <>
        <p className={styles.reviewCount}>작성리뷰 <span className={styles.reviewCount}>{review.length}개</span></p>
            <div className={styles.contentBox}>
            {review.map(able => (
                <div className={styles.reviewAbleBox}>
                    <table className={styles.reviewAbleTable}>
                        <tbody>
                            <tr className={styles.writeBox}>
                                <td>{able.date_string} <span>이용완료</span></td>
                                <Link className='link' to={`/writeReview/${able.reservation_id}`}><td className={styles.reviewBtn} key={able.reservation_id}>리뷰작성</td></Link>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.reviewAbleHotel}>
                        <div>
                            <img src={able.lodgement_img_url} alt='호텔이미지' className={styles.ableHotelImg} />
                        </div>
                        <div className={styles.reviewAbleInfo}>
                            <p>{able.lodgement_name}</p>
                            <p>{able.room_name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
            </>
    );
};

export default CanReview;