import React from 'react';
import RoomCard from '../roomCard/roomCard';
import styles from './roomList.module.css';

const RoomList = (props) => (
    <>
    <h2 className={styles.popular}>인기숙소 <img className={styles.seemore} src='/img/icon/seemore.png' alt='seeMore'/></h2>
        <ul>
            <RoomCard />
        </ul>
    </>
);

export default RoomList;