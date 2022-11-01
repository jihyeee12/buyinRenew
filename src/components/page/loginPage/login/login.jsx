import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
    const navigate = useNavigate();

    const certified = (value) => {
        navigate("/certified", {
          state: {
            value: value,
          },
        });
      };
    
    const listArr = [
        { id: 0, name: "회원가입", value: "signUp" },
        { id: 1, name: "아이디 찾기", value: "findId" },
        { id: 2, name: "비밀번호 찾기", value: "findPw" },
      ];
    

    return (
        <div className={styles.loginBody}>
            <img  className={styles.logo} src="../../img/header/loginLogo.png" alt="" />
            <label  className={styles.loginTxt} htmlFor="loginId">아이디</label>
            <input  className={styles.loginInput} type="text" name="loginId" id="loginId" />
            <label  className={styles.loginTxt} htmlFor="password">비밀번호</label>
            <input  className={styles.loginInput} type="password" name='password' id='password'/>
            <button  className={styles.loginBtn} type='button'>로그인</button>
            <ul className={styles.loginList} >
                {listArr.map((item) => (
                <li onClick={() => certified(item.value, item.name)}>{item.name}</li>
                ))}
            </ul>
        <div className={styles.snsLogin} >
                <p className={styles.snsTxt} >SNS 로그인</p>
                <img className={styles.snsBtn} src="../../img/icon/kakaoIcon.png" alt="카카오" />
                <img className={styles.snsBtn} src="../../img/icon/naverIcon.png" alt="네이버" />
            </div>
        </div>
    );
};

export default Login;