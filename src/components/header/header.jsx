/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {

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
                            <Link to ="notice" className={styles.link}><li>더보기</li></Link>
                            <Link to="info" className={styles.link}><li>마이페이지</li></Link>
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