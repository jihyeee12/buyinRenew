import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../modal.module.css';

const ReservationCancelModal = ({id, cancelReason,closeModal}) => {
    const [detail, setdetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const cancelClick = () => {
        const fetchdetail = async () => {
            try {
                 // 요청이 시작 할 때에는 error 와 detail 를 초기화하고
                setError(null);
                setdetail(null);
                 // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.post(
                     '/v2/cancelations',{reservation_id: id, cancel_reason: cancelReason},{headers:{'Contents-type': 'application/json','user': 'AppIDEtest'}}); //get은 data 넣을 자리 필요없으니까 안넣어도 됨
                 setdetail(response.data.data); // 데이터는 response.data 안에 들어있습니다.
                alert("예약이 취소되었습니다.");
                closeModal();
            } catch (e) {
                setError(e);
            }
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