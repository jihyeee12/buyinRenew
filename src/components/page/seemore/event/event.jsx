import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../mypage/sideMenu/sideMenu';
import styles from './event.module.css';

const Event = () => {
    const eventBanner= [
        {
            event_contents_url: "https://www.buyinhotel.co.kr/images/event/invitation_friends.jsp",
            event_id: 1,
            event_img_url: "https://www.buyinhotel.co.kr/images/event/invitation_friends2.png"
        },
        {
            event_contents_url: "https://www.buyinhotel.co.kr/images/event/review_point.jsp",
            event_id: 7,
            event_img_url: "https://www.buyinhotel.co.kr/images/event/review_point.png"
        }
    ]
    
    const event = eventBanner.map(v => (
        <img className={styles.eventImg} id={v.event_id}  src={v.event_img_url} onClick={()=> window.open(v.event_contents_url,'_blank','width=780, height= 1200, left=100%')} />
    ))
    return(
        <>
        <Banner name={"더보기"}/>
        <div className="mypage">
            <SideMenu type={'see'}/>
            <div className="pageBox">
                {event}
            </div>
        </div>
        </>
    )
}

export default Event;