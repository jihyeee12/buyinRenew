import React from 'react';
import styles from './findId.module.css';
import { useNavigate } from 'react-router-dom';

const FindId = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate('/login');
    }
    return (
        <div className={styles.idBox}>
            <h4 className={styles.idTitle}>아이디 찾기</h4>
            <p className={styles.idTxt}>회원님의 아이디는</p>
            <input className={styles.idInput} type="text" disabled />
            <p className={styles.idTxt}>입니다.</p>

            <button className={styles.loginBtn} type='button' onClick={login}>로그인</button>
        </div>
    );
};

export default FindId;