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
                            <Link to="wish"><li>위시리스트</li></Link>
                            <Link to="basket"><li>장바구니</li></Link>
                            <li>더보기</li>
                            <li>마이페이지</li>
                        </ul>
                    </div>
                </div>
            </header>
        );
}

export default Header;