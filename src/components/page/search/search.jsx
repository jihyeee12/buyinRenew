import React from 'react';
import { useState } from 'react';
import RoomCard from '../../reservation/roomCard/roomCard';
import SearchBar from '../../searchBar/searchBar';
import Sort from '../../sort/sort';
import styles from './search.module.css';

const Search = () => {
    
    const roomData = [
        {dc_rate: "44.3",
            is_ambassadr: false,
            is_wished: false,
            landmark: "광주공항,KTX 송정역",
            list_price: 140000,
            lodge_dc_rate: "44.3",
            lodge_list_price: 140000,
            lodge_sale_price: 78000,
            lodgement_id: 247,
            lodgement_img_url: "https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_99_000_2022-09-08-17_15_44.jpg",
            lodgement_name: "송정 아우라 호텔",
            rent_list_price: null,
            rent_sale_price: null,
            review_num: 0,
            sale_price: 78000,
            wish_num: 14},
    ]
    
    return(
        <>
            <div className={styles.searchDiv}>
                <SearchBar />
                <Sort state={roomData}/>
                <div className={styles.roomList}>
                    <RoomCard state={roomData}/>
                </div>
            </div>
        </>

    )
};

export default Search;