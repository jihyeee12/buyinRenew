import React from 'react';
import { useState } from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../mypage/sideMenu/sideMenu';
import styles from './faq.module.css';
import AllFaq from './faqContent/allFaq';
import CouponFaq from './faqContent/couponFaq';
import RefundFaq from './faqContent/refundFaq';
import ReservationFaq from './faqContent/reservationFaq';
import InfoFaq from './faqContent/infoFaq';


const Faq = () => {
    const data = [
        {id: 0, title: "전체", content: <AllFaq />},
        {id: 1, title: "예약·결제·영수증", content: <ReservationFaq/>},
        {id: 2, title: "변경·취소·환불", content: <RefundFaq/>},
        {id: 3, title: "쿠폰·할인", content: <CouponFaq/>},
        {id: 4, title: "회원·개인정보", content: <InfoFaq/>},
    ];
    const [index, setIndex] = useState(0);
    
    return(
        <>
        <Banner name={"더보기"}/>
        <div className="mypage">
            <SideMenu type={'see'}/>
            <div className="pageBox">
                <ul  className={styles.faqTitle}>
                    {data.map(item => (
                        <li 
                            key={item.id}
                            className={index === item.id? styles.active : null}
                            onClick={()=> setIndex(item.id)}
                        >{item.title}</li>
                    ))}
                </ul>
                <div className={styles.faqContent}>
                    {data.filter(item => index === item.id).map(item => (
                        <div>
                        {item.content}
                        </div>
                ))}
                </div>
                <div className={styles.serviceBox}>
                    <h3 className={styles.serviceTitle}>원하시는 질문이 없으신가요?</h3>
                    <div className={styles.callBox}>
                        <img src="../img/icon/callIcon.png" alt="callIcon" />
                        <div className={styles.serviceInfo}>
                            <p>고객센터 : 1533-3152</p>
                            <p>문의 가능 시간: 09:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Faq;