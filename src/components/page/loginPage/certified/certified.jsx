import React from 'react';
import styles from './certified.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Certified = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navigatePage = () => {
        if (location.state.value === "signUp") {
          navigate("/join");
        } else if (location.state.value === "findId") {
          navigate("/findId");
        } else {
          navigate("/findPW");
        }
      };


    return (
        <div className={styles.certifyBox}>
            <h4 className={styles.certifiedTitle}>
                {location.state.value === "signUp"? "회원가입": location.state.value === "findId"? "아이디 찾기": "비밀번호 찾기"}
            </h4>
            <p className={styles.certifiedTxt}>본인 인증을 위해 인증하기를 진행해주세요.</p>
            <button type='button' className={styles.phoneBtn} onClick={navigatePage}>휴대폰 인증하기</button>
        </div>
    );
};

export default Certified;