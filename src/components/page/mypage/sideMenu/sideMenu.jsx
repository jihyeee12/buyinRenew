import React from 'react';
import styles from './sideMenu.module.css';
import { useNavigate } from 'react-router-dom';

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

    return(
            <div className={styles.sideMenu}>
                {type === 'my' ? 
                    <ul>
                        <li className={styles.menuClick} onClick={info}>내정보</li>
                        <li onClick={reservation}>예약내역</li>
                        <li onClick={point}>포인트 · 쿠폰</li>
                        <li onClick={review}>리뷰관리</li>
                        <li onClick={recent}>최근검색숙소</li>
                        <li onClick={giftBox}>선물함</li>
                    </ul>
                    :
                    <ul>
                        <li className={styles.menuClick} onClick={notice}>공지사항</li>
                        <li onClick={giftcard}>선물하기</li>
                        <li>이벤트</li>
                        <li>회원등급혜택</li>
                        <li>FAQ</li>
                        <li>약관 및 정책</li>
                    </ul>
                }

                
            </div>
        
    )
}
            
    

export default SideMenu;