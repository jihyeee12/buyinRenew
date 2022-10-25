import React from 'react';
import styles from './sideMenu.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SideMenu = ({type}) => {
    const navigate = useNavigate();

    const info = () => {
        navigate('/info');
    }
    const reservation = () =>{
        navigate('/reservationList');
    }
    const point = () =>{
        navigate('/point');
    }
    const review = () =>{
        navigate('/review');
    }
    const recent = () =>{
        navigate('/recent');
    }
    const giftBox = () =>{
        navigate('/giftBox');
    }
    const notice = () =>{
        navigate('/notice');
    }
    const giftcard = () =>{
        navigate('/giftcard');
    }
    const event = () =>{
        navigate('/event');
    }
    const faq = () =>{
        navigate('/faq');
    }
    const terms = () =>{
        navigate('/terms');
    }
    
    const [activeId, setActiveId] = useState();
    const menuList = [
        {EngName : "info", KorName: "내정보"},
        {EngName : "reservationList", KorName: "예약내역"},
        {EngName : "point", KorName: "포인트 · 쿠폰"},
        {EngName : "review", KorName: "리뷰관리"},
        {EngName : "recent", KorName: "최근검색숙소"},
        {EngName : "giftBox", KorName: "선물함"}
    ]
    const seemoreList = [
        {EngName: "notice", KorName: "공지사항"},
        {EngName: "giftcard", KorName: "선물하기"},
        {EngName: "event", KorName: "이벤트"},
        {EngName: "notice", KorName: "회원등급혜택"},
        {EngName: "faq", KorName: "FAQ"},
        {EngName: "terms", KorName: "약관 및 정책"},
    ]
    const navigateMenu = (menuName) => {
    navigate(`/${menuName}`);
    }
    const navigateSee = (seeName) => {
        navigate(`/${seeName}`);
    }
    return(
            <div className={styles.sideMenu}>
                {type === 'my' ? 
                    <ul>
                        {/* <li className={styles.menuClick} onClick={info}>내정보</li>
                        <li onClick={reservation}>예약내역</li>
                        <li onClick={point}>포인트 · 쿠폰</li>
                        <li onClick={review}>리뷰관리</li>
                        <li onClick={recent}>최근검색숙소</li>
                        <li onClick={giftBox}>선물함</li>
                         */}
                        {menuList.map((menu,index) => (
                            <li key={index} className={activeId === index ? styles.menuClick : ""} onClick={() => {navigateMenu(menu.EngName); setActiveId(index)}} >{menu.KorName}</li>
                        ))}
                    </ul>
                    :
                    <ul>
                        {seemoreList.map((see,index) => (
                            <li key={index} className={activeId === index ? styles.menuClick : ""} onClick={() => {navigateSee(see.EngName); setActiveId(index)}} >{see.KorName}</li>
                        ))}
                        {/* <li className={styles.menuClick} onClick={notice}>공지사항</li>
                        <li onClick={giftcard}>선물하기</li>
                        <li onClick={event}>이벤트</li>
                        <li>회원등급혜택</li>
                        <li onClick={faq}>FAQ</li>
                        <li onClick={terms}>약관 및 정책</li> */}
                    </ul>
                }

                
            </div>
        
    )
}
            
    

export default SideMenu;