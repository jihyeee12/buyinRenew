import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import styles from './userGrade.module.css';

const UserGrade = () => {
    return (
        <>
        <Banner name={"더보기"}/>
            <div className="mypage">
                <SideMenu type={'see'}/>
                <div className="pageBox">
                    <p className={styles.comment}>준비중입니다.</p>
                </div>
            </div>
        </>
    );
};

export default UserGrade;