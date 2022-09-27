import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../sideMenu/sideMenu';
import ReservationBox from '../../../reservation/reservationBox/reservationBox';


const ReservationList = () => {

    return(
        <>
        <Banner/>
        <div className="mypage">
            <SideMenu/>
            <div className="pageBox">
                <section className="reservation">
                    <ul className="tabMenu">
                        <li className="selectTab">예약내역</li>
                        <li>취소내역</li>
                    </ul>
                    <div className="tabContent">
                        <ReservationBox/>
                    </div>
                </section>
            </div>
        </div>
        
        </>
    )
};

export default ReservationList;