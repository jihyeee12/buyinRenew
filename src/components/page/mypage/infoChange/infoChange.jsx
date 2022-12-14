import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './infoChange.module.css';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import { useState } from 'react';
import { useEffect } from 'react';
import Get from '../../../../service/api/url/Get';
import { useForm } from 'react-hook-form';
import Put from '../../../../service/api/url/Put';


const Infochange = () => {
    const {register, handleSubmit, formState:{errors}, setError} = useForm();
    const [pwBox, setPwBox] = useState(false);    
    const navigate = useNavigate();
    
    const userDelete = () => {
        navigate('/userDelete');
    }
    const [myInfo, setMyInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setErrors] = useState(null);

    useEffect(() => {
        
    const fetchmyInfo = async () => {
        
        Get.getmyInfo()
        .then(function (response) {
            setMyInfo(response);
        })
        .catch(error => {
            setErrors(error);
        })

        setLoading(false);
        };
        fetchmyInfo();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!myInfo) return null;
    
    console.log(myInfo);

    const pwClick = () => {
        setPwBox(true);
    }
    const onValid = (data) =>{
        if(data.newPw !== data.newPwCheck){
            return setError("newPwCheck",{message:"비밀번호가 일치하지 않습니다."});
        } else{
            return setError("newPwCheck",{message:"비밀번호가 일치합니다."});
        }
    }

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <div className={styles.changeBox}>
                    <form onSubmit={handleSubmit(onValid)}>
                    <div className={styles.userChange}>
                        <p className={styles.changeTxt}>회원정보 변경</p>
                        <table className={styles.changeTable}>
                            <tbody>
                                <tr>
                                    <td>이름</td>
                                    <td>{myInfo.user_name}</td>
                                </tr>
                                <tr>
                                    <td>전화번호</td>
                                    <td><input {...register("userTel")} type="text" value={myInfo.user_tel}/>
                                        {/* <button type='button' className={styles.certifyBtn}>인증하기</button> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>이메일</td>
                                    <td><input {...register("userEmail")} type="text" value={myInfo.user_email} /></td>
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
                                    <td>
                                        <input {...register("currentPw")} name='currentPw' type="password"/>
                                        <button type='button'
                                            className={styles.confirmBtn}
                                            onClick={pwClick}
                                            >확인</button>
                                    </td>
                                </tr>
                                {pwBox === true && <>
                                <tr>
                                    <td>새 비밀번호</td>
                                    <td><input {...register("newPw",{minLength:{
                                        value: 8,
                                        message: "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
                                    }, 
                                    maxLength: 16})} name='newPw' type="password"/>
                                    <p className={styles.errorMessage}>{errors?.newPw?.message}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>새 비밀번호 확인</td>
                                    <td><input {...register("newPwCheck",{
                                        required:"새 비밀번호를 입력해주세요."
                                    })} name='newPwCheck' type="password"/>
                                    <p className={styles.errorMessage}>{errors?.newPwCheck?.message}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td style={{textAlign: "center"}}>
                                        <button className={styles.changePw}>비밀번호 변경</button>
                                    </td>
                                </tr>
                                </>}
                                
                            </tbody>
                        </table>
                    </div>
                    </form>
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