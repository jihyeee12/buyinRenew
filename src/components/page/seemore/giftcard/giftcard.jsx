import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../mypage/sideMenu/sideMenu';
import styles from './giftcard.module.css'


const Giftcard = (props) => {

    return(
        <>
            <Banner name={"더보기"}/>
            <div className="mypage">
                <SideMenu type={'see'}/>
                <div className="pageBox">
                
                </div>
            </div>
        
        </>
    )
}

export default Giftcard;