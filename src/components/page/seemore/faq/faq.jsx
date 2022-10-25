import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../mypage/sideMenu/sideMenu';

const Faq = (props) => {
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

export default Faq;