import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Region from './region/region';
import styles from './searchBar.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';


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
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());

       const getFormattedDate = (date) => {
            const month = date.toLocaleDateString('ko-KR', {
              month: 'long',
            });
            
            const day = date.toLocaleDateString('ko-KR', {
              day: 'numeric',
            });
            
            return `${month.substr(0, month.length - 1)}/${day.substr(0, day.length - 1)}`;
          }

        // 요일 반환
        const getDayName = (date) => {
            return date.toLocaleDateString('ko-KR', {
            weekday: 'long',
            }).substr(0, 1);
        }
        
        // 날짜 비교시 년 월 일까지만 비교하게끔
        const createDate = (date) => {
            return new Date(new Date(date.getFullYear()
            , date.getMonth()
            , date.getDate()
            , 0
            , 0
            , 0));
        }

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
                            <DatePicker 
                                selected={startDate} 
                                onChange={date => setStartDate(date)}
                                placeholderText="날짜를 선택해주세요."
                                minDate={new Date()}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                locale={ko}
                                dateFormat="yyyy.MM.dd"
                                showDisabledMonthNavigation
                                disabledKeyboardNavigation
                                dayClassName={date => 
                                getDayName(createDate(date)) === '토' ? styles.saturDay :
                                getDayName(createDate(date)) === '일' ? styles.sunDay : ""}
                                />
                            {/* <input type='textbox' className={styles.selectInput} readOnly onClick={()=> subMenuClick(2)} placeholder='날짜를 선택해주세요'></input>
                            {clickedNumArr.includes(2) && } */}
                        </li>
                        <li className={styles.searchLi}>
                            <p className={styles.searchTitle}>체크아웃</p>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                placeholderText="날짜를 선택해주세요."
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                locale={ko}
                                dateFormat="yyyy.MM.dd"
                                showDisabledMonthNavigation
                                disabledKeyboardNavigation
                                dayClassName={date => 
                                getDayName(createDate(date)) === '토' ? styles.saturDay :
                                getDayName(createDate(date)) === '일' ? styles.sunDay : undefined}
                            />
                            {/* <input type='textbox' className={styles.selectInput} readOnly placeholder='날짜를 선택해주세요'></input> */}
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
