import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../../../../banner/banner';
import Modal from '../../../../modal/modal';
import DetailBox from '../../../../reservation/reservationDetatilBox/detailBox';
import SideMenu from '../../../../sideMenu/sideMenu';
import styles from './reservationCancel.module.css';

const ReservationCancel = () => {
    const location = useLocation();
    const refund_charge = location.state.refund;
    const id = location.state.id;
    const type = "reservationCancel";
    const [modalOpen, setModalOpen] = useState(false);
    const [cancelReason, setCancelReason] = useState("단순변심");
    
    const changeReason = (event) => {
        const selectReason = event.target.value;
        setCancelReason(selectReason);
    }

    return (
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <p className={styles.reservationTitle}>예약내역상세</p>
                <DetailBox type={type} id={id} refund={refund_charge} changeReason={changeReason}/>
                <div className={styles.btnBox}>
                    <button type='button' className={styles.cancelBtn} onClick={() => setModalOpen(!modalOpen)}>예약취소</button>
                    {modalOpen && <Modal type={"reservationCancel"} cancelReason={cancelReason} id={id} setModalOpen={() => setModalOpen(!modalOpen)} />}
                </div>
            </div>
        </div>
        </>
    );
};

export default ReservationCancel;