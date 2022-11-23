import React from 'react';
import styles from './recommandDorm.module.css';
import { useLocation } from 'react-router-dom';
import RoomCard from '../../reservation/roomCard/roomCard';
import Sort from '../../sort/sort';
import { useState } from 'react';

const RecommandDorm = () => {
    const location = useLocation();
    const state = location.state.state.recommendLodgements;
    

    return (
        <>
            <div className="titleBar">
                <p>숙소추천</p>
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

export default RecommandDorm;