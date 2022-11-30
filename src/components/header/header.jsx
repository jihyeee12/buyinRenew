
import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [clickedNumArr, setClickedNumArr] = useState([]);
    
    const subMenuClick = (id) => {
        setClickedNumArr((arr) => {
            let newArr = [];
            arr.map((item) => newArr.push(item));
    
            if (newArr.includes(id)) {
            newArr.splice(newArr.indexOf(id), 1);
            } else {
            newArr.push(id);
            }
            return newArr;
        });
        };

        return (
            <header>
                <div className={styles.header}>
                        <Link to ="/">
                            <img src="/img/header/Logo.png" alt='Logo'/>
                        </Link>
                    <div className={styles.menu}>
                        <img src="/img/header/magnifier.png" alt='magnifier' />
                        <ul className={styles.ul}>
                            <Link to="wish" className={styles.link}><li>위시리스트</li></Link>
                            <Link to="basket" className={styles.link}><li>장바구니</li></Link>
                            <li className={styles.menuClick} onClick={() => subMenuClick(1)}>더보기
                            {clickedNumArr.includes(1) && (
                                <ul className={styles.subMenu}>
                                    <li><Link to ="notice" className={styles.link}>공지사항</Link></li>
                                    <li><Link to="giftcard" className={styles.link}>선물하기</Link></li>
                                    <li><Link to="event" className={styles.link}>이벤트</Link></li>
                                    <li><Link to="grade" className={styles.link}>회원등급혜택</Link></li>
                                    <li><Link to="faq" className={styles.link}>FAQ</Link></li>
                                    <li><Link to="terms" className={styles.link}>약관 및 정책</Link></li>
                                </ul>
                            )}
                                
                            </li>
                            <li className={styles.menuClick} onClick={() => subMenuClick(2)}>마이페이지
                            {clickedNumArr.includes(2) && (
                                <ul className={styles.subMenu}>
                                    <li className={styles.userName}>김호텔님</li>
                                    <li><Link to="info" className={styles.link}>내 정보</Link></li>
                                    <li><Link to="reservationList" className={styles.link}>예약내역</Link></li>
                                    <li><Link to="point" className={styles.link}>포인트·쿠폰</Link></li>
                                    <li><Link to="review" className={styles.link}>리뷰관리</Link></li>
                                    <li><Link to="recent" className={styles.link}>최근검색숙소</Link></li>
                                    <li><Link to="giftBox" className={styles.link}>선물함</Link></li>
                                    <li>로그아웃</li>
                                </ul>
                            )}</li>
                            
                        </ul>
                        
                    </div>
                </div>

                {/* <div className={styles.header}>
                        <Link to ="/">
                            <img src="/img/header/Logo.png" alt='Logo'/>
                        </Link>
                    <div className={styles.menu}>
                        <img src="/img/header/magnifier.png" alt='magnifier' />
                        <ul className={styles.ul}>
                            <Link to="login" className={styles.link}><li>로그인</li></Link>
                            <Link to="wish" className={styles.link}><li>위시리스트</li></Link>
                            <Link to="basket" className={styles.link}><li>장바구니</li></Link>
                            <Link to ="notice" className={styles.link}><li>더보기</li></Link>
                        </ul>
                    </div>
                </div> */}
            </header>
        );
}

export default Header;