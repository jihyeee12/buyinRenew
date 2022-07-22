import React from 'react';
import RoomCard from '../../roomCard/roomCard';
import SearchBar from '../../searchBar/searchBar';
import styles from './search.module.css';

const Search = () => (
        <>
            <SearchBar />
            <div>
                <p>결과 9건</p>
                <ul>
                    <li>인기순</li>
                    <li>리뷰순</li>
                    <li>낮은가격순</li>
                    <li>높은가격순</li>
                </ul>
            </div>
            <div className={styles.roomList}>
                <RoomCard />
            </div>
        </>
    );

export default Search;