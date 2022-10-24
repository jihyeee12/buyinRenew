import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../mypage/sideMenu/sideMenu';

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
        <img id={v.event_id}  src={v.event_img_url}></img>
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