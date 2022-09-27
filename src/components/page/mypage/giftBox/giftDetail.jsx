import React from 'react';
import Banner from '../../../banner/banner';
import CardInfo from '../../../gift/cardInfo/cardInfo';
import GiftInfo from '../../../gift/giftInfo/giftInfo';
import GuideLine from '../../../gift/guideLine/guideLine';
import SideMenu from '../sideMenu/sideMenu';
import styles from './giftDetail.module.css';

const GiftDetail = (props) => {
    
    return(
        <>
        <Banner/>
        <div className="mypage">
            <SideMenu/>
            <div className="pageBox">
                <div className={styles.card}>
                    <CardInfo/>
                </div>
                <div>
                    <GiftInfo/>
                </div>
                <div className={styles.guideLine}>
                    <GuideLine/>
                </div>
            </div>
        </div>
        </>
    )
};

export default GiftDetail;