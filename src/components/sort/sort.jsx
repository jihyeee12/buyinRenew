import React from 'react';
import { useState } from 'react';
import styles from './sort.module.css';

const Sort = ({state}) => {
    console.log(state);
    const [order, setOrder] = useState("best");
    //const sortItems = state.wish_num.sort((a,b) => b[order] - a[order]);
    
    
    const handleBestClick = () => {
        setOrder("best");
    }
    const handleReviewClick = () => {
        setOrder("review");
    }
    const handleRowClick = () => {
        setOrder("row");
    }
    const handleHighClick = () => {
        setOrder("high");
    }


    return (
        <div className={styles.sortBox}>
            <p className={styles.sortResult}>결과 {state.length}건</p>
            <ul className={styles.sortList}>
                <li onClick={handleBestClick}>인기순</li>
                <li onClick={handleReviewClick}>리뷰순</li>
                <li onClick={handleRowClick}>낮은가격순</li>
                <li onClick={handleHighClick}>높은가격순</li>
            </ul>
        </div>
    );
};

export default Sort;