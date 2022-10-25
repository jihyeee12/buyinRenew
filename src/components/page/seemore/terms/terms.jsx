import React from 'react';
import { useState } from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../mypage/sideMenu/sideMenu';
import Policy from './termsContent/policy';
import styles from './terms.module.css';
import Personal from './termsContent/personal';
import Email from './termsContent/email';
import Marketing from './termsContent/marketing';
import Youth from './termsContent/youth';
import CancelPolicy from './termsContent/cancelPolicy';
import Location from './termsContent/location';

const Terms = () => {
    const data = [
        {id: 0, title: "이용약관",  language: true , content: <Policy type={"korean"}/>},
        {id: 1, title: "개인정보처리방침",  language: true, content: <Personal type={"korean"}/>},
        {id: 2, title: "이메일무단수집거부",  language: true, content: <Email type={"korean"}/>},
        {id: 3, title: "마케팅활용동의",  language: true, content: <Marketing type={"korean"}/>},
        {id: 4, title: "청소년보호정책", language: false, content: <Youth/>},
        {id: 5, title: "위치정보이용약관", language: false, content: <Location/>},
        {id: 6, title: "취소규정", language: false, content: <CancelPolicy/>},
    ]

    const [index, setIndex] = useState(0);
    const [btnClick, setBtnClick] = useState("click");
    return (
        <>
        <Banner name={"더보기"}/>
        <div className="mypage">
            <SideMenu type={'see'}/>
            <div className="pageBox">
                <ul className={styles.faqTab}>
                    {data.map(item => (
                        <li
                            key={item.id}
                            className={index === item.id ? styles.active : null}
                            onClick ={() => setIndex(item.id)}
                        >{item.title}</li>
                    ))}
                </ul>
                <div className={styles.termsBox}>
                    {data.filter(item => index === item.id).map(item => (
                        <div className={styles.Btn}>
                            {item.language === true ? 
                                <div className={styles.languageBtn}>
                                    <button type='button' className={[styles.koreanBtn, btnClick === "click" ? styles.btnActive : ""].join(" ")}>한글(Korean)</button>
                                    <button type='button' className={[styles.englishBtn, btnClick === "click" ? styles.btnActive : ""].join(" ")}>영문(English)</button>
                                </div>
                                :<></>}
                        </div>
                    ))}
                    {data.filter(item => index === item.id).map((item) => (
                    <div className={styles.termsContent}>
                        {item.content}
                    </div>   
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default Terms;