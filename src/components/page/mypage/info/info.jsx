import React from 'react';
import styles from './info.module.css';
import SideMenu from '../sideMenu/sideMenu';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../banner/banner';

const Info = () => {
    const navigate = useNavigate();

    const infoChange = () => {
        navigate('/infoChange');
    }

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <div className={styles.infoBox}>
                    <div className={styles.infoTxt}>
                        <p className={styles.userinfo}><span className={styles.user_name}>바이인호텔</span> 님 <span className={styles.grade}>VIP</span></p>
                        <table className={styles.userTable}>
                            <tbody>
                               <tr>
                                <td>연락처</td>
                                <td>010-6666-6666</td>
                               </tr>
                               <tr>
                                <td>이메일</td>
                                <td>buyinhotel@naver.com</td>
                               </tr> 
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.infoBtn}>
                        <img src="../img/icon/infoBtn.png" alt="정보수정" onClick={infoChange} />
                    </div>
                </div>
            </div>
        </div>

        </>
    )
};

export default Info;