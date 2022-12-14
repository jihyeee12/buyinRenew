import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './roomprice.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BusinessBox from './businessBox/businessBox';
import RentBox from './rentBox';


const Roomprice = ({roomData}) => {
    console.log(roomData)
    const navigate = useNavigate();
    const linkRoom = () =>{
        navigate('/rooms')
    }
    
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
            {roomData.map(room => (
            <div className={styles.roomPriceInfo}>
                <div className={styles.roomInfo}>
                    <Slider {...settings}>
                    {room.room_images.map((roomImg) => (
                        <img className={styles.roomImg} key={roomImg.id} src={roomImg.room_img_url} onClick={linkRoom} alt="roomprice" />
                    ))}
                    </Slider>
                    <div className={styles.roomName} onClick={linkRoom}>
                        <h4>{room.room_name}</h4>
                        <div className={styles.standardBox}>
                            <p>기준 {room.people_num}명/ 최대 {room.max_people_num}명</p>
                        </div>
                    </div>
                </div>
                <div className={styles.hotelPriceBox} onClick={linkRoom}>
                <div className={styles.rent}>
                    {room.can_reserve_rent === true || room.can_reserve_rent === false && <RentBox roomData={roomData}/>}
                    
                </div>
                <div className={styles.lodge}>
                    <div className={styles.kinds}>
                        <div>
                            <p className={styles.typeName}>숙박</p>
                            <span className={styles.availTime}>18:00부터</span>
                        </div>
                        <div>
                            <p className={styles.discountBox}><span className={styles.discount}><span className={styles.percent}>40%</span><span className={styles.listPrice}>70,000원</span></span></p>
                            <p className={styles.salePrice}><span className={styles.hotelSalePrice}>42,000</span>원</p>
                        </div>
                    </div>
                </div>
                {room.is_business !== false && <BusinessBox/>}
                </div>
            </div>
            ))}
        </>
    )
};

export default Roomprice;