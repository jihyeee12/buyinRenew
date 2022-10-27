import React from 'react';
import { useState } from 'react';
import styles from "../../faq/faq.module.css"

const RefundFaq = () => {
    const data =[
        {id: 0, category: "변경·취소·환불", title: "당일예약 가능?", answer: "가능 불가능?"},
        {id: 1, category: "변경·취소·환불", title: "당일예약 불가능?", answer: "불가능"}
    ]
    const [isCheck, setCheck] = useState(false);
    
    return (
        <>
        {data.map(v => (
            <div className={styles.contentList}>
                <div className={styles.contentTitle}>
                    <div className={styles.title}>
                        <p>[{v.category}]</p>
                        <p key={v.id}>{v.title}</p>    
                    </div>
                    <button type='button' className={styles.toggleBtn} onClick={() => {
                        setCheck((e) => !e);}}>
                        {isCheck ? <img src='../../../img/icon/oneUp.png' alt='upIcon' /> : <img src='../../../img/icon/oneDown.png' alt='downIcon' />}
                    </button>
                </div>
                {isCheck && (
                    <div className={styles.answerBox}>
                        <p className={styles.answerTxt}>{v.answer}</p>
                    </div>
                )}
            </div> 
        ))}
        </>
    );
};

export default RefundFaq;