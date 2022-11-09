import React from 'react';
import styles from './sideMenu.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SideMenu = ({type}) => {
    const navigate = useNavigate();
    
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
        {EngName: "grade", KorName: "회원등급혜택"},
        {EngName: "faq", KorName: "FAQ"},
        {EngName: "terms", KorName: "약관 및 정책"},
    ]
    const menuclickStyle = {
        background: "#3966B7",
        borderRadius: "4px",
        color: "#ffffff!important"
    }
    const navigateMenu = (menuName,index) => {
    navigate(`/${menuName}`);
    setActiveId(index);
    }
    const navigateSee = (seeName) => {
        navigate(`/${seeName}`);
    }
    return(
            <div className={styles.sideMenu}>
                {type === 'my' ? 
                    <ul>
                        
                        {menuList.map((menu,index) => (
                            <li key={index} className={activeId === index ? styles.menuClick : ""} onClick={() => {navigateMenu(menu.EngName,index)}} >{menu.KorName}</li>
                        ))}
                    </ul>
                    :
                    <ul>
                        {seemoreList.map((see,index) => (
                            <li key={index} className={activeId === index ? styles.menuClick : ""} onClick={() => {navigateSee(see.EngName); setActiveId(index)}} >{see.KorName}</li>
                        ))}
                    </ul>
                }

                
            </div>
        
    )
}
            
    

export default SideMenu;