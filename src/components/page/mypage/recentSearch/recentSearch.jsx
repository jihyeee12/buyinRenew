import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import RecentBox from './recentBox';
import styles from './recentSearch.module.css';


const RecentSearch = (props) => {
    
    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <div className={styles.recentList}>
                    <RecentBox/>
                </div>
            </div>
        </div>
        </>
    )
};

export default RecentSearch;