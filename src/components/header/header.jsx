/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import styles from './header.module.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className={styles.header}>
                    <img src="/img/header/Logo.png" alt='Logo' />
                    <div className={styles.menu}>
                        <img src="/img/header/magnifier.png" alt='magnifier' />
                        <ul className={styles.ul}>
                            <li>위시리스트</li>
                            <li>장바구니</li>
                            <li>더보기</li>
                            <li>마이페이지</li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;