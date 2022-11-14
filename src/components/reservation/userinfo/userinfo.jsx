import React from 'react';
import { useState } from 'react';
import styles from './userinfo.module.css';

const Userinfo = ({users}) => {
    const [check, setCheck] = useState(false);
    
 return(   
    
    <div className={styles.infoBox}>
        <div className={styles.reservaionInfo}>
            <h4 className={styles.infoTitle}>예약자 정보</h4>
            <table className={styles.infoTable}>
                <tbody>
                    <tr>
                        <td>성명</td>
                        <td><input type="text" className={styles.infoInput} defaultValue={users.user_name}/></td>
                    </tr>
                    <tr>
                        <td>연락처</td>
                        <td><input type="text" className={styles.infoInput} defaultValue={users.user_tel}/></td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type="text" className={styles.infoInput} defaultValue={users.user_email}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.userInfo}>
            <h4 className={styles.infoTitle}>이용자 정보 <span className={styles.agreeBox}><label>예약자 정보와 동일합니다 <input type="checkbox" onClick={()=> setCheck(!check)} /></label></span></h4>
            <table className={styles.infoTable}>
                <tbody>
                    <tr>
                        <td>성명</td>
                        <td><input defaultValue={check === true ? users.user_name : ""} type="text" className={styles.infoInput}/></td>
                    </tr>
                    <tr>
                        <td>연락처</td>
                        <td><input defaultValue={check === true ? users.user_tel : ""} type="text" className={styles.infoInput}/></td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input defaultValue={check === true ? users.user_email:""} type="text" className={styles.infoInput}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
};

export default Userinfo;