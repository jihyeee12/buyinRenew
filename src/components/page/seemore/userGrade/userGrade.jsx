import React from 'react';
import styles from './userGrade.module.css';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';

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