import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './roomprice.module.css';
import styled, {css} from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BusinessBox from './businessBox/businessBox';
import RentBox from './rentBox';
import LodgeBox from './lodgeBox';


const Roomprice = ({roomData}) => {
    console.log(roomData)
    const navigate = useNavigate();
    const linkRoom = () =>{
        navigate('/rooms')
    }
    
    const StyledSlider = styled(Slider)`
    width: 100%;
    height: 100%;
    position: relative;
    .slick-prev::before,
    .slick-next::before{
        opacity: 0;
        display: none;
    }
`;

    const arrowBtn = css`
        width: 3rem;
        height: 3rem;
        border: none;
        background-color: transparent;
        position: absolute;
        z-index: 1;
    `

    const Pre = styled.div`
        ${arrowBtn}
        left: 0%;
    `
    const Next = styled.div`
        ${arrowBtn}
        right: -4%;
    `

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <Pre>
                <img src="../img/icon/roomLeft.png" alt="" />
            </Pre>
        ),
        nextArrow: (
            <Next>
                <img src="../img/icon/roomRight.png" alt="" />
            </Next>
        )
    };
    

    return(
        <>
            {roomData.map(room => (
            <div className={styles.roomPriceInfo}>
                <div className={styles.roomInfo}>
                    <StyledSlider {...settings}>
                    {room.room_images.map((roomImg, index) => (<>
                        <img className={styles.roomImg} key={roomImg.id} src={roomImg.room_img_url} onClick={linkRoom} alt="roomprice" />
                        <div className={styles.countBox}>
                            <p>{index+1} / {room.room_images.length}</p>
                        </div>
                        </>
                    ))}
                    </StyledSlider>
                    <div className={styles.roomName} onClick={linkRoom}>
                        <h4>{room.room_name}</h4>
                        <div className={styles.standardBox}>
                            <p>기준 {room.people_num}명/ 최대 {room.max_people_num}명</p>
                        </div>
                    </div>
                </div>
                <div className={styles.hotelPriceBox} onClick={linkRoom}>
                <div className={styles.rent}>
                    {(room.can_reserve_rent === true || room.can_reserve_rent === false) && <RentBox roomData={room}/>}
                    
                </div>
                <div className={styles.lodge}>
                    <LodgeBox roomData ={room} />
                </div>
                {room.is_business !== false && <BusinessBox roomData={room} />}
                </div>
            </div>
            ))}
        </>
    )
};

export default Roomprice;