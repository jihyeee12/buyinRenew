import React from 'react';
import Banner from '../../../banner/banner';
import DetailBox from '../../../reservation/reservationDetatilBox/detailBox';
import SideMenu from '../sideMenu/sideMenu';
import styles from './reservationDetail.module.css';

const ReservationDetail = (props) => {

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <p className={styles.reservationTitle}>예약내역상세</p>
                    <DetailBox/>
                    <div className={styles.cancelBox}>
                        <button type='button' className={styles.cancelBtn}>예약취소요청</button>
                    </div>
            </div>
        </div>
        </>
    )
};

export default ReservationDetail;