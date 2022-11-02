import React from 'react';
import { useState } from 'react';
import styles from './join.module.css';

const Join = () => {
    const checkData = [
        {id: 0, title: "이용약관 동의"},
        {id: 1, title: "만 14세 이상 확인"},
        {id: 2, title: "개인정보 수집 이용 동의"},
        {id: 3, title: "마케팅 알림 수신 동의"},
        {id: 4, title: "위치기반 서비스 이용약관 동의"},
    ]

    // 체크된 아이템을 담을 배열
    const [checkItems, setCheckItems] = useState([]);

    // 체크박스 단일 선택
    const handleSingleCheck = (checked, id) => {
        if (checked) {
        // 단일 선택 시 체크된 아이템을 배열에 추가
        setCheckItems(prev => [...prev, id]);
        } else {
        // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
        setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    // 체크박스 전체 선택
    const handleAllCheck = (checked) => {
        if(checked) {
        // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
        const idArray = [];
        checkData.forEach((el) => idArray.push(el.id));
        setCheckItems(idArray);
        }
        else {
        // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
        setCheckItems([]);
        }
    }

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
                <label className={styles.checkLabel} htmlFor="allCheck">
                    <input type="checkBox" name='select-all' onChange={(e) => handleAllCheck(e.target.checked)} checked={checkItems.length === checkData.length ? true : false} /> 
                    <span id='allCheck' className={styles.allCheckTxt}>전체동의</span>
                </label>
                {checkData.map((data,key)=> (
                    <label key={key} className={styles.checkLabel} htmlFor="oneCheck">
                        <input type="checkBox" name={`select-${data.id}`} onChange={(e) => handleSingleCheck(e.target.checked, data.id)} checked={checkItems.includes(data.id) ? true : false} /> 
                        <span id='oneCheck' className={styles.checkTxt}>{data.title}</span> <span className={styles.essentialCheck}>(필수)</span>
                    </label>
                ))
                }
            </div>
            <button className={styles.joinBtn} type='button'>회원가입</button>
        </div>
    );
};

export default Join;