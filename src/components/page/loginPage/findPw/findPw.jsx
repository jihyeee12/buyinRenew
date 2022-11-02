import React from 'react';
import styles from './findPw.module.css';
const FindPw = () => {
    return (
        <div className={styles.pwBox}>
            <h4 className={styles.pwTitle}>비밀번호 찾기</h4>
            <label className={styles.pwLabel} htmlFor="newPw">새 비밀번호</label>
            <input className={styles.pwInput} type="password" id='newPw' />
            <label className={styles.pwLabel} htmlFor="pwCheck">새 비밀번호 확인</label>
            <input className={styles.pwInput} type="password" id='pwCheck' />
            <button className={styles.pwBtn} type='button'>비밀번호 변경완료</button>
        </div>
    );
};

export default FindPw;