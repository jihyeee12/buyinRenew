import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from './calendar/calendar';
import Region from './region/region';
import styles from './searchBar.module.css';


const SearchBar = (props) => {
    const navigate = useNavigate();

    const linkSearch = () => {
        navigate('/search');
    }
    const [clickedNumArr, setClickedNumArr] = useState([]);
    
    const subMenuClick = (id) => {
        setClickedNumArr((arr) => {
            let newArr = [];
            arr.map((item) => newArr.push(item));
    
            if (newArr.includes(id)) {
            newArr.splice(newArr.indexOf(id), 1);
            } else {
            newArr.push(id);
            }
            return newArr;
        });
        };
        return(
            <>
                <div className={styles.searchDiv}>
                    <ul className={styles.searchBar}>
                        <li className={styles.searchLi}>
                            <p className={styles.searchTitle}>숙소명</p>
                            <input type='textbox' placeholder='숙소명을 입력해주세요'></input>
                        </li>
                        <li className={styles.searchLi}>
                            <p className={styles.searchTitle}>지역</p>
                            <input type='textbox' className={styles.selectInput} readOnly onClick={() => subMenuClick(1)} placeholder='지역을 입력해주세요'></input>
                            {clickedNumArr.includes(1) && <Region/>}
                        </li>
                        <li className={styles.searchLi}>
                            <p className={styles.searchTitle}>체크인</p>
                            <input type='textbox' className={styles.selectInput} readOnly onClick={()=> subMenuClick(2)} placeholder='날짜를 선택해주세요'></input>
                            {clickedNumArr.includes(2) && <Calendar/>}
                        </li>
                        <li className={styles.searchLi}>
                            <p className={styles.searchTitle}>체크아웃</p>
                            <input type='textbox' className={styles.selectInput} readOnly placeholder='날짜를 선택해주세요'></input>
                        </li>
                    </ul>
                    <div className={styles.searchButton}>
                        <button type='button' className={styles.searchBtn} onClick={linkSearch}>
                            <img src='/img/icon/round-search.png' alt='magnifier' />
                        </button>
                    </div>
                </div>           
            </>
            );
    }

export default SearchBar;
