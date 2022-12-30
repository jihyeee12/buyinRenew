import React from 'react';
import styles from './search.module.css';
import RoomCard from '../../reservation/roomCard/roomCard';
import SearchBar from '../../searchBar/searchBar';
import Sort from '../../sort/sort';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Get from '../../../service/api/url/Get';
import { useCallback } from 'react';

const Search = () => {
    const location = useLocation();
    const [searchParams, setSeratchParams] = useSearchParams();
    const [search, setSearch] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const checkin = searchParams.get("checkin");
    const checkout = searchParams.get("checkout");
    const regionName = searchParams.get("name");
    const region = searchParams.get("region");

    const searchInfo = {checkin,checkout,regionName,region};
    const period = {checkin, checkout};
    
    useEffect(() => {
      
    const fetchsearch = async () => {

        Get.getSearch(checkin, checkout, regionName, region)
        .then(function (response) {
            setSearch(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchsearch();
    
    }, [checkin, checkout, regionName, region]);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!search) return null;
    
    console.log(search);
    
    return(
        <>
            <div className={styles.searchDiv}>
                <SearchBar searchInfo={searchInfo}/>         
                <Sort state={search}/>
                <div className={styles.roomList}>
                    <RoomCard period={period} state={search}/>
                </div>
            </div>
        </>

    )
};

export default Search;