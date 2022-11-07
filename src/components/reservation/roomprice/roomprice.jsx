import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './roomprice.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Roomprice = (props) => {
    
    const navigate = useNavigate();
    const linkRoom = () =>{
        navigate('/rooms')
    }
    const roomImgs = [
        {room_image_id: 12328, room_img_url: 'https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_000_2022-09-08-17_44_22.jpg', items: Array(0)},
        {room_image_id: 13197, room_img_url: 'https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_024_2022-09-08-17_44_22.jpg', items: Array(0)},
        {room_image_id: 13198, room_img_url: 'https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_025_2022-09-08-17_44_22.jpg', items: Array(0)},
        {room_image_id: 13199, room_img_url: 'https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_026_2022-09-08-17_44_22.jpg', items: Array(0)}
    ]
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return(
        <>
        <div className={styles.roomPriceInfo}>
            <div className={styles.roomInfo}>
                <Slider {...settings}>
                {roomImgs.map((roomImg) => (
                    <img className={styles.roomImg} key={roomImg.room_image_id} src={roomImg.room_img_url} onClick={linkRoom} alt="roomprice" />
                ))}
                </Slider>
                <div className={styles.roomName} onClick={linkRoom}>
                    <h4>스탠다드</h4>
                    <div className={styles.standardBox}>
                        <p>기준 2명/ 최대 2명</p>
                    </div>
                </div>
            </div>
            <div className={styles.rent}  onClick={linkRoom}>
                <p className={styles.discount}><span className={styles.percent}>50%</span><span className={styles.listPrice}>40,000원</span></p>
                <div className={styles.kinds}>
                    <p className={styles.typeName}>대실<span className={styles.availTime}>최대 3시간 이용가능</span></p>
                    <p className={styles.salePrice}>20,000원</p>
                </div>
            </div>
            <div className={styles.lodge}  onClick={linkRoom}>
                <p className={styles.discount}><span className={styles.percent}>50%</span><span className={styles.listPrice}>40,000원</span></p>
                <div className={styles.kinds}>
                    <p className={styles.typeName}>숙박<span className={styles.availTime}>18:00부터 12:00까지</span></p>
                    <p className={styles.salePrice}>35,000원</p>
                </div>
            </div>
        </div>
        </>
    )
};

export default Roomprice;