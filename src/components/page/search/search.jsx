import React from 'react';
import styles from './search.module.css';
import RoomCard from '../../reservation/roomCard/roomCard';
import SearchBar from '../../searchBar/searchBar';
import Sort from '../../sort/sort';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Get from '../../../service/api/url/Get';

const Search = () => {
    const location = useLocation();
    const startDay = location.state.startDay;
    const endDay = location.state.endDay;
    const [search, setSearch] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const checkin = '2022.12.24';
    const checkout = '2022.12.25';

    useEffect(() => {
      
    const fetchsearch = async () => {

        Get.getSearch(checkin,checkout)
        .then(function (response) {
            setSearch(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchsearch();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!search) return null;
    
    console.log(search);
    
    return(
        <>
            <div className={styles.searchDiv}>
                <SearchBar />         
                <Sort state={search}/>
                <div className={styles.roomList}>
                    <RoomCard state={search}/>
                </div>
            </div>
        </>

    )
};

export default Search;