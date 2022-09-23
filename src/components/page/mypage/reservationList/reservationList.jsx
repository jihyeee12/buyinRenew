import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../sideMenu/sideMenu';
import styles from './reservationList.module.css';
import ReservationBox from '../../../reservationBox/reservationBox';

const ReservationList = () => {

    return(
        <>
        <Banner/>
        <div className="mypage">
            <SideMenu/>
            <div className="pageBox">
                <section className={styles.reservation}>
                    <ul className={styles.tabMenu}>
                        <li>예약내역</li>
                        <li>취소내역</li>
                    </ul>
                    <div className={styles.tabContent}>
                        <ReservationBox/>
                    </div>
                </section>
            </div>
        </div>
        
        </>
    )
};

export default ReservationList;