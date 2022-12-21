import React from 'react';
import { useState ,useEffect } from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import CouponBox from './couponBox';

import PointTabBox from './pointBox';
import PointBox from './pointBox';

const Point = () => {
    const tabList = [
        {id: 0, title : "포인트"},
        {id: 1, title : "쿠폰"}
    ]
    const [index, setIndex] = useState(0);
    
    
    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <section className="reservation">
                    <ul className="tabMenu">
                        {tabList.map(item => (
                            <li
                                key={item.id}
                                className={index === item.id? "selectTab": null}
                                onClick={() => setIndex(item.id)}
                            >{item.title}</li>
                        ))}
                        
                    </ul>
                    <div className="tabContent">
                        {tabList.filter(item => index === item.id).map(item => {
                            if(item.id === 0){
                                return <PointBox/>
                            } else if(item.id === 1){
                                return <CouponBox/>
                            }
                            }
                        )}
                        </div>
                </section>
            </div>
        </div>
        </>
    )

};

export default Point;