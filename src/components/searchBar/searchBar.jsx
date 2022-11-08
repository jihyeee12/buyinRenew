import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './searchBar.module.css';


const SearchBar = (props) => {
    const navigate = useNavigate();

    const linkSearch = () => {
        navigate('/search');
    }
        return(
            <>
                <div className={styles.searchDiv}>
                    <ul className={styles.searchBar}>
                        <li>
                            <p className={styles.searchTitle}>숙소명</p>
                            <input type='textbox' placeholder='숙소명을 입력해주세요'></input>
                        </li>
                        <li>
                            <p className={styles.searchTitle}>지역</p>
                            <input type='textbox' readOnly placeholder='지역을 입력해주세요'></input>
                        </li>
                        <li>
                            <p className={styles.searchTitle}>체크인</p>
                            <input type='textbox' readOnly placeholder='날짜를 선택해주세요'></input>
                        </li>
                        <li>
                            <p className={styles.searchTitle}>체크아웃</p>
                            <input type='textbox' readOnly placeholder='날짜를 선택해주세요'></input>
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
