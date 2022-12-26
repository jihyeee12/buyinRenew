import React from 'react';
import styles from './recentSearch.module.css';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import RecentBox from './recentBox';
import { useState } from 'react';
import { useEffect } from 'react';
import Get from '../../../../service/api/url/Get';


const RecentSearch = () => {
    const [recentData, setRecentData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [deleteState, setDeleteState] = useState(false);
    
    useEffect(() => {
      
    const fetchrecentData = async () => {

        Get.getRecent()
        .then(function (response) {
            setRecentData(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchrecentData();
    
    }, [deleteState]);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!recentData) return null;
    
    console.log(recentData);

    
    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <div className={styles.recentList}>
                    <RecentBox setDeleteState={setDeleteState} recentData={recentData}/>
                </div>
            </div>
        </div>
        </>
    )
};

export default RecentSearch;