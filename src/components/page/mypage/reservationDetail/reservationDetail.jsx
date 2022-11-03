import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../../../banner/banner';
import DetailBox from '../../../reservation/reservationDetatilBox/detailBox';
import SideMenu from '../sideMenu/sideMenu';
import styles from './reservationDetail.module.css';

const ReservationDetail = () => {
    const location = useLocation();
    const locationType = location.state.name;
    

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <p className={styles.reservationTitle}>예약내역상세</p>
                    <DetailBox type={locationType} />
                    {locationType === "reservation" && <div className={styles.cancelBox}>
                        <button type='button' className={styles.cancelBtn} >예약취소요청</button>
                    </div>}
                    
            </div>
        </div>
        </>
    )
};

export default ReservationDetail;