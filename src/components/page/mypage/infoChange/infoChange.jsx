import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './infoChange.module.css';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';


const Infochange = () => {
    const navigate = useNavigate();

    const userDelete = () => {
        navigate('/userDelete');
    }
    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <div className={styles.changeBox}>
                    <div className={styles.userChange}>
                        <p className={styles.changeTxt}>회원정보 변경</p>
                        <table className={styles.changeTable}>
                            <tbody>
                                <tr>
                                    <td>아이디</td>
                                    <td>buyinhotel</td>
                                </tr>
                                <tr>
                                    <td>전화번호</td>
                                    <td><input type="text" />
                                        <button type='button' className={styles.certifyBtn}>인증하기</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>이메일</td>
                                    <td><input type="text" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.pwChange}>
                        <p className={styles.changeTxt}>비밀번호 변경</p>
                        <table className={styles.changeTable}>
                            <tbody>
                                <tr>
                                    <td>현재 비밀번호</td>
                                    <td><input type="password"/></td>
                                </tr>
                                <tr>
                                    <td>새 비밀번호</td>
                                    <td><input type="password"/></td>
                                </tr>
                                <tr>
                                    <td>새 비밀번호 확인</td>
                                    <td><input type="password"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.changeBtn}>
                    <button type='button' className={`${styles.modifyBtn} ${styles.clickBtn}`}>수정완료</button>
                    <button type='button' className={styles.deleteBtn} onClick={userDelete}>회원탈퇴</button>
                </div>
            </div>      
        </div>
        </>
    )    
};

export default Infochange;