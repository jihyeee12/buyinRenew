import React from 'react';
import {useState} from 'react';
import styles from './notice.module.css';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';


const Notice = () => {
    const data = [
        {id: 0, listTitle: "공지" ,title: "서비스 점검안내", date:"2022.01.01" ,answer: "안녕하세요. 바이인호텔입니다.\n"
    +"더욱 친절한 서비스 제공을 위해 서비스 점검 안내 드립니다."}
    ]
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
    return(
        <>
        <Banner name={"더보기"}/>
            <div className="mypage">
                <SideMenu type={'see'}/>
                <div className="pageBox">
                    {data.map(v => (
                        <div className={styles.noticeBox}>
                        <div className={styles.noticeTitle}>
                            <div className={styles.noticeTitleTxt}>
                                <p>[{v.listTitle}] {v.title}</p>
                                <p>{v.date}</p>
                            </div>
                            <button type='button' key={v.id} className={styles.toggleBtn} onClick={() => {
                                handleClickToggleBtn(v.id);
                            }}>
                                {clickedNumArr.includes(v.id) ? <img src='../../../img/icon/oneUp.png' alt='upIcon' /> : <img src='../../../img/icon/oneDown.png' alt='downIcon' />}
                            </button>
                        </div>
                        {clickedNumArr.includes(v.id) && (
                            <div className={styles.answerBox}>
                                <p className={styles.answerTxt}>{v.answer}</p>
                            </div>
                        )

                        }
                        
                    </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
};

export default Notice;