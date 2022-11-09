import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import styles from './recentSearch.module.css';
import { useNavigate } from 'react-router-dom';

const RecentSearch = (props) => {
    const navigate = useNavigate();

    const lodgement = () =>{
        navigate('/lodgement');
    }
    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <div className={styles.recentList}>
                    <div className={styles.recentBox} onClick={lodgement}>
                        <div>
                            <img className={styles.hotelImg} src='../../../img/roomImg/room1.png' alt='hotelImg' />
                        </div>
                        <div className={styles.hotelInfo}>
                            <p className={styles.hotelName}>천안 이끌림호텔</p>
                            <div className={styles.infoTxt}>
                                <p className={styles.standard}>2인기준 / 1박</p>
                                <p><span className={styles.percent}>44%</span> <span className={styles.listPrice}>80,000원</span></p>
                                <p className={styles.salePrice}>45,000원</p>
                            </div>
                        </div>
                        <div className={styles.deleteIcon}>
                            <img className={styles.deleteImg} src='../../../img/icon/deleteIcon.png' alt='deleteIcon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default RecentSearch;