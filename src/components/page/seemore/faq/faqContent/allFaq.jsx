import React from 'react';
import { useState } from 'react';
import styles from "../../faq/faq.module.css"

const AllFaq = () => {
    const data =[
        {id: 0, category: "예약·결제·영수증", title: "당일예약 가능?", answer: "가능 불가능?"},
        {id: 1, category: "예약·결제·영수증", title: "당일예약 불가능?", answer: "불가능"}
    ]
    //const [isCheck, setCheck] = useState(false);
    const [clickedNum, setClickedNum] = useState();
    
    return (
        <>
        {data.map(v => (
            <div className={styles.contentList}>
                <div className={styles.contentTitle}>
                    <div className={styles.title}>
                        <p>[{v.category}]</p>
                        <p key={v.id}>{v.title}</p>    
                    </div>
                    <button type='button' key={v.id} className={styles.toggleBtn} onClick={() => {setClickedNum(v.id)}}>
                        {v.id === clickedNum  ? <img src='../../../img/icon/oneUp.png' alt='upIcon' /> : <img src='../../../img/icon/oneDown.png' alt='downIcon' />}
                    </button>
                </div>
                {v.id === clickedNum  && (
                    <div key={v.id} className={styles.answerBox}>
                        <p className={styles.answerTxt}>{v.answer}</p>
                    </div>
                )}
            </div> 
        ))}
        </>
    );
};


export default AllFaq;