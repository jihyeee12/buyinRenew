import React from 'react';
import { useState } from 'react';
import styles from "../../faq/faq.module.css"

const AllFaq = () => {
    const data =[
        {id: 0, category: "예약·결제·영수증", title: "당일예약 가능?", answer: "가능 불가능?"},
        {id: 1, category: "예약·결제·영수증", title: "당일예약 불가능?", answer: "불가능"}
    ]
    //const [isCheck, setCheck] = useState(false);
    //const [clickedNum, setClickedNum] = useState();
    const [clickedNumArr, setClickedNumArr] = useState([]);

    const handleClickToggleBtn = (id) => {
      setClickedNumArr((arr) => {
        let newArr = [];
        arr.map((item) => newArr.push(item));
  
        if (newArr.includes(id)) {
          newArr.splice(newArr.indexOf(id), 1);
        } else {
          newArr.push(id);
        }
        console.log(clickedNumArr);
        return newArr;
      });
    };

    return (
        <>
        {data.map(v => (
            <div className={styles.contentList}>
                <div className={styles.contentTitle}>
                    <div className={styles.title}>
                        <p>[{v.category}]</p>
                        <p key={v.id}>{v.title}</p>    
                    </div>
                    <button type='button' key={v.id} className={styles.toggleBtn} onClick={() => handleClickToggleBtn(v.id)}>
                        {v.id === clickedNumArr  ? <img src='../../../img/icon/oneUp.png' alt='upIcon' /> : <img src='../../../img/icon/oneDown.png' alt='downIcon' />}
                    </button>
                </div>
                {v.id === clickedNumArr  && (
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