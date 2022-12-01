import React from 'react';
import { useState } from 'react';
import styles from './terms.module.css';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import Policy from './termsContent/policy';
import Personal from './termsContent/personal';
import Email from './termsContent/email';
import Marketing from './termsContent/marketing';
import Youth from './termsContent/youth';
import CancelPolicy from './termsContent/cancelPolicy';
import Location from './termsContent/location';

const Terms = () => {
    const [index, setIndex] = useState(0);
    const [btnClick, setBtnClick] = useState("korean");
    
    const data = [
        {id: 0, title: "이용약관",  language: true , content: <Policy type={btnClick}/>},
        {id: 1, title: "개인정보처리방침",  language: true, content: <Personal type={btnClick}/>},
        {id: 2, title: "이메일무단수집거부",  language: true, content: <Email type={btnClick}/>},
        {id: 3, title: "마케팅활용동의",  language: true, content: <Marketing type={btnClick}/>},
        {id: 4, title: "청소년보호정책", language: false, content: <Youth/>},
        {id: 5, title: "위치정보이용약관", language: false, content: <Location/>},
        {id: 6, title: "취소규정", language: false, content: <CancelPolicy/>},
    ]

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
                            {item.language === true && 
                                <div className={styles.languageBtn}>
                                    <button type='button' className={[styles.koreanBtn, btnClick === "korean" ? styles.btnActive : ""].join(" ")} onClick={()=> {setIndex(item.id); setBtnClick("korean")}}>한글(Korean)</button>
                                    <button type='button' className={[styles.englishBtn, btnClick === "english" ? styles.btnActive : ""].join(" ")} onClick={() => {setIndex(item.id); setBtnClick("english")}}>영문(English)</button>
                                </div>
                            }
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