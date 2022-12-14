import React from 'react';
import styles from './info.module.css';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../../../sideMenu/sideMenu';
import Banner from '../../../banner/banner';
import { useState } from 'react';
import { useEffect } from 'react';
import Get from '../../../../service/api/url/Get';


const Info = () => {
    const navigate = useNavigate();

    const infoChange = () => {
        navigate('/infoChange');
    }

    const [myInfo, setMyInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

 
    useEffect(() => {
        
    const fetchmyInfo = async () => {
        
        Get.getmyInfo()
        .then(function (response) {
            setMyInfo(response);
        })
        .catch(error => {
            setError(error);
        })

        setLoading(false);
        };
        fetchmyInfo();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!myInfo) return null;
    
    console.log(myInfo);
   
    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <div className={styles.infoBox}>
                    <div className={styles.infoTxt}>
                        <p className={styles.userinfo}><span className={styles.user_name}>{myInfo.user_name}</span> 님 <span className={styles.grade}>{myInfo.user_grade}</span></p>
                        <table className={styles.userTable}>
                            <tbody>
                                <tr>
                                    <td>연락처</td>
                                    <td>{myInfo.user_tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}</td>
                                </tr>
                                {myInfo.business_user === false && 
                                <tr>
                                    <td>이메일</td>
                                    <td>{myInfo.user_email}</td>
                                </tr>}
                            </tbody>
                        </table>
                    </div>
                    {myInfo.business_user === false && 
                    <div className={styles.infoBtn}>
                        <img src="../img/icon/infoBtn.png" alt="정보수정" onClick={infoChange} />
                    </div>}
                    
                </div>
            </div>
        </div>

        </>
    )
};

export default Info;