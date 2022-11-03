import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../sideMenu/sideMenu';
import ReservationBox from '../../../reservation/reservationBox/reservationBox';
import { useState } from 'react';


const ReservationList = () => {
    const tabList = [
        {id: 0, title: "예약내역"},
        {id: 1, title: "취소내역"}
    ]
    const [index, setIndex] = useState(0);

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <section className="reservation">
                    <ul className="tabMenu">
                        {tabList.map(item => (
                            <li
                                key={item.id}
                                className={index === item.id? "selectTab": null}
                                onClick={()=> setIndex(item.id)}
                            >{item.title}</li>
                        ))}
                    </ul>
                    <div className="tabContent">
                        {tabList.filter(item => index === item.id).map(item => {
                            if(item.id === 0){
                                return <><ReservationBox type={"reservation"}/></>
                            } else if(item.id === 1){
                                return <><ReservationBox type={"cancel"}/></>
                            }
                        })}
                        
                    </div>
                </section>
            </div>
        </div>
        
        </>
    )
};

export default ReservationList;