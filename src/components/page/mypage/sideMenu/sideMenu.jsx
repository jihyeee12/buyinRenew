import React from 'react';
import styles from './sideMenu.module.css';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
    const navigate = useNavigate();

    const info = () => {
        navigate('/info');
    }
    const reservation = () =>{
        navigate('/reservationList');
    }

    return(
        <>
            <div className={styles.sideMenu}>
                <ul>
                    <li className={styles.menuClick} onClick={info}>내정보</li>
                    <li onClick={reservation}>예약내역</li>
                    <li>포인트 · 쿠폰</li>
                    <li>리뷰관리</li>
                    <li>최근검색숙소</li>
                    <li>선물함</li>
                </ul>
            </div>
        </>
    )
}
            
    

export default SideMenu;