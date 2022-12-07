import React from 'react';
import styles from './sideMenu.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const SideMenu = ({type}) => {
    
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
    const MenuclickStyle = styled.li`
        width: 9.6rem;
        font-family: pretendard;
        font-size: 1.25rem;
        font-weight: 600;
        cursor: pointer;
        a {
            color: #303030;
            text-decoration: none;
            padding: 0.8rem;
            width: 100%;
            display: block;
            &.active {
                background: #3966B7;
                border-radius: 4px;
                color: #ffffff!important;
            }
        }
    `
 
    return(
            <div className={styles.sideMenu}>
                {type === 'my' ? 
                    <ul>
                        
                        {menuList.map((menu,index) => (
                            <MenuclickStyle key={index}>
                                <NavLink to={`/${menu.EngName}`} activeClassName="active">
                                    {menu.KorName}
                                </NavLink>
                            </MenuclickStyle>
                        ))}
                    </ul>
                    :
                    <ul>
                        {seemoreList.map((see,index) => (
                            <MenuclickStyle key={index}>
                                <NavLink to={`/${see.EngName}`} activeClassName="active">
                                {see.KorName}
                                </NavLink>
                            </MenuclickStyle>
                        ))}
                    </ul>
                }
            </div>
        
    )
}
            
    

export default SideMenu;