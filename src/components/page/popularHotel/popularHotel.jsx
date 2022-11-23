import React from 'react';
import styles from './popularHotel.module.css';
import { useLocation } from 'react-router-dom';
import RoomCard from '../../reservation/roomCard/roomCard';
import Sort from '../../sort/sort';


const PopularHotel = () => {
    const location = useLocation();
    const state = location.state.state.state;
    
    return (
        <>
            <div className="titleBar">
                <p>인기숙소</p>
            </div>
            <div className="container">
                <Sort state={state}/>
                <div className={styles.popluarBox}>
                    <RoomCard state={state} slider={false}/>
                </div>
            </div>
        </>
    );
};

export default PopularHotel;