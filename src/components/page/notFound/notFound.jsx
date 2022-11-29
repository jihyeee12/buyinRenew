import React from 'react';
import styles from './notFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.notFoundBox}>
            <img src="../../img/icon/404Icon.png" alt="404Icon" />
            <p className={styles.notFoundTxt}>해당 페이지를 찾을 수 없습니다.</p>
            <button type='button' className={styles.homeBtn}>홈으로 돌아가기</button>
        </div>
    );
};

export default NotFound;