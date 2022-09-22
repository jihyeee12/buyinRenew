import React from 'react';
import styles from './info.module.css';
import SideMenu from '../sideMenu/sideMenu';


const Info = () => {

    return(
        <>
        <div className={styles.banner}>
            <p className={styles.bannerTxt}>마이페이지</p>
        </div>
        <div className={styles.page}>
            <SideMenu/>

        </div>

        </>
    )
};

export default Info;