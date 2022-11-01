import React from 'react';
import styles from './join.module.css';

const Join = () => {
    return (
        <div className={styles.joinBox}>
            <h4 className={styles.joinTltle}>회원가입</h4>
            <label className={styles.userTitle} htmlFor="userId">아이디</label>
            <input className={styles.userInput} type="text" id='userId' />
            <label className={styles.userTitle} htmlFor="password">비밀번호</label>
            <input className={styles.userInput} type="password" id='password' />
            <label className={styles.userTitle} htmlFor="checkPassword">비밀번호 확인</label>
            <input className={styles.userInput} type="password" id='checkPassword' />
            <label className={styles.userTitle} htmlFor="phoneNum">휴대폰번호</label>
            <input className={styles.userInput} type="number" id='phoneNum' />
            <label className={styles.userTitle} htmlFor="userMail">이메일</label>
            <input className={styles.userInput} type="text" id='userMail' />
            
            <div className={styles.checkBox}>
                <label className={styles.checkLabel} htmlFor="allCheck"><input type="checkBox" /> <span id='allCheck' className={styles.allCheckTxt}>전체동의</span></label>
                <label className={styles.checkLabel} htmlFor="oneCheck"><input type="checkBox" /> <span id='oneCheck' className={styles.checkTxt}>이용약관 동의</span> <span className={styles.essentialCheck}>(필수)</span></label>
                <label className={styles.checkLabel} htmlFor="oneCheck"><input type="checkBox" /> <span id='oneCheck' className={styles.checkTxt}>만 14세 이상 확인</span> <span className={styles.essentialCheck}>(필수)</span></label>
                <label className={styles.checkLabel} htmlFor="oneCheck"><input type="checkBox" /> <span id='oneCheck' className={styles.checkTxt}>개인정보 수집 이용 동의</span> <span className={styles.essentialCheck}>(필수)</span></label>
                <label className={styles.checkLabel} htmlFor="oneCheck"><input type="checkBox" /> <span id='oneCheck' className={styles.checkTxt}>마케팅 알림 수신 동의</span> <span className={styles.essentialCheck}>(필수)</span></label>
                <label className={styles.checkLabel} htmlFor="oneCheck"><input type="checkBox" /> <span id='oneCheck' className={styles.checkTxt}>위치기반 서비스 이용약관 동의</span> <span className={styles.essentialCheck}>(필수)</span></label>
            </div>
            <button className={styles.joinBtn} type='button'>회원가입</button>
        </div>
    );
};

export default Join;