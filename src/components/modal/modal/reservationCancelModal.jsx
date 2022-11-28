import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../../../service/api/url/Post';
import styles from '../modal.module.css';

const ReservationCancelModal = ({id, cancelReason,closeModal}) => {
    const [detail, setdetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const reservationList = () =>{
        navigate('/reservationList');
    }
    
    const cancelClick = () => {

        const fetchdetail = async () => {
        Post.reservationCancel(id, cancelReason)
                .then(function (response) {
                    setdetail(response);
                    alert("예약이 취소되었습니다.");
                    closeModal();
                    reservationList();
                })
                .catch(error => {
                    setError(error);
                })
            setLoading(false);
            };
            fetchdetail();

            if (loading) return <div>로딩중..</div>;
            if (error) return <div>에러가 발생했습니다</div>;
            if (!detail) return null;
    }
        
        
    
    return (
        <div className={styles.reservationCancelBox}>
            <p className={styles.cancelTitle}>예약을 취소하시겠습니까?</p>
            <div className={styles.reservationCancel}>
                <button type='button' className={styles.cancelBtn} onClick={()=>cancelClick()}>예약취소</button>
                <button type='button' className={styles.closeBtn} onClick={closeModal}>닫기</button>
            </div>
        </div>
    );
};

export default ReservationCancelModal;