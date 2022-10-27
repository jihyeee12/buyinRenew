import React from 'react';
import RoomCard from '../roomCard/roomCard';
import styles from './roomList.module.css';


const RoomList = () => {
   return(
        <>
        <h2 className={styles.popular}>인기숙소 <img className={styles.seemore} src='/img/icon/seemore.png' alt='seeMore'/></h2>
            <div>
                <RoomCard />
            </div>
        </>
    )
};

export default RoomList;