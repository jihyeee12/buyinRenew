import React from 'react';
import RoomCard from '../../roomCard/roomCard';
import SearchBar from '../../searchBar/searchBar';
import styles from './search.module.css';

const Search = () => (
        <>
            <div className={styles.searchDiv}>
                <SearchBar />
                <div className={styles.sort}>
                    <p className={styles.count}>결과 9건</p>
                    <ul className={styles.sortKind}>
                        <li>인기순</li>
                        <li>리뷰순</li>
                        <li>낮은가격순</li>
                        <li>높은가격순</li>
                    </ul>
                </div>
                <div className={styles.roomList}>
                    <RoomCard />
                </div>
            </div>
        </>
    );

export default Search;