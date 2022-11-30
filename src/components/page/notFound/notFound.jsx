import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './notFound.module.css';

const NotFound = () => {
    const navigate = useNavigate();

    const home = () => {
        navigate('/');
    }

    return (
        <div className={styles.notFoundBox}>
            <img src="../../img/icon/404Icon.png" alt="404Icon" />
            <p className={styles.notFoundTxt}>해당 페이지를 찾을 수 없습니다.</p>
            <button type='button' className={styles.homeBtn} onClick={home}>홈으로 돌아가기</button>
        </div>
    );
};

export default NotFound;